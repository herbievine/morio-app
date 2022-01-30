import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Chain from "../components/Chain";
import Note from "../components/Note";
import Wallet from "../components/Wallet";
import { useHub } from "../hooks/useHub";
import { useNetwork } from "../hooks/useNetwork";
import { useSigner } from "../hooks/useSigner";
import Page from "../layouts/Page";
import { sort } from "../lib/sort";
import { ExtendedNote, NoteContent } from "../types/note";

interface IndexProps {}

const Index: NextPage<IndexProps> = () => {
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
      title="Dashboard"
      loading={loading}
      component={
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 auto-rows-auto gap-6">
          <div className="xl:col-start-1 xl:row-start-1">
            <Wallet />
          </div>
          <div className="xl:col-start-1 xl:row-start-2">
            {network && <Chain chain={network} />}
          </div>
          {network && notes.length > 0
            ? notes.map((note, i) => (
                <div
                  className={`xl:col-start-2 xl:row-start-${i + 1}`}
                  key={note.contentId}
                >
                  <Note note={note} />
                </div>
              ))
            : !loading &&
              network?.chainId && (
                <div className="xl:col-start-2 xl:row-start-1">
                  <Note />
                </div>
              )}
        </div>
      }
    />
  );
};

export default Index;
