import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Note from "../components/Note";
import { useHub } from "../hooks/useHub";
import { useNetwork } from "../hooks/useNetwork";
import { useSigner } from "../hooks/useSigner";
import Page from "../layouts/Page";
import { sort } from "../lib/sort";
import { ExtendedNote, NoteContent } from "../types/note";

interface NotesProps {}

const Notes: NextPage<NotesProps> = () => {
  const [notes, setNotes] = useState<ExtendedNote[]>([]);
  const [loading, setLoading] = useState(true);
  const { network } = useNetwork();
  const { signer } = useSigner();
  const { hub } = useHub();

  useEffect(() => {
    if (network && signer && hub) {
      setLoading(true);

      const getNotes = async () => {
        const [encodedNotes] = await hub.functions.getNotes();

        let notesToLoad: ExtendedNote[] = [];

        for (let i = 0; i < encodedNotes.length; i++) {
          const { noteId, owner, contentId } = encodedNotes[i];

          const [noteUri] = await hub.functions.getContent(contentId);

          const noteContent = (await (
            await fetch(noteUri)
          ).json()) as NoteContent;

          notesToLoad.push({
            noteId,
            owner,
            contentId,
            data: noteContent,
          });
        }

        setNotes(sort(notesToLoad, ["updatedAt", "asc"]));
        setLoading(false);
      };

      getNotes();
    } else {
      setNotes([]);
      setLoading(false);
    }
  }, [network, signer, hub]);

  return (
    <Page
      title="Notes"
      loading={loading}
      component={
        <div className="flex justify-center items-start">
          {network && notes.length > 0 ? (
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-rows-auto gap-6">
              {notes.map((note) => (
                <Note key={note.contentId} note={note} />
              ))}
            </div>
          ) : !loading && network?.chainId ? (
            <div>
              <p className="font-bold text-neutral-300">
                Seems like you have no notes :(
              </p>
            </div>
          ) : (
            !network?.chainId && (
              <div>
                <p className="font-bold text-neutral-300">
                  Connect your metamask wallet to see your notes
                </p>
              </div>
            )
          )}
        </div>
      }
    />
  );
};

export default Notes;
