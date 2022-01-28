import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Note from "../components/Note";
import { useHub } from "../hooks/useHub";
import { useSigner } from "../hooks/useSigner";
import Page from "../layouts/Page";
import { ExtendedNote, NoteContent } from "../types/note";

interface NotesProps {}

const Notes: NextPage<NotesProps> = () => {
  const [notes, setNotes] = useState<ExtendedNote[]>([]);
  const [loading, setLoading] = useState(true);
  const { signer } = useSigner();
  const { hub } = useHub();

  useEffect(() => {
    if (signer && hub) {
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

        notesToLoad.sort((a, b) => {
          return a.data.createdAt > b.data.createdAt
            ? -1
            : a.data.createdAt < b.data.createdAt
            ? 1
            : 0;
        });

        setNotes(notesToLoad);
        setLoading(false);
      };

      getNotes();
    } else {
      setNotes([]);
    }
  }, [signer, hub]);

  return (
    <Page
      title="Notes"
      loading={loading}
      component={
        <div className="flex justify-center items-start">
          {notes.length > 0 ? (
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-rows-auto gap-5">
              {notes.map((note) => (
                <Note key={note.contentId} note={note} />
              ))}
            </div>
          ) : (
            !loading && (
              <div>
                <p className="font-bold text-neutral-300">
                  Seems like you have no notes :(
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
