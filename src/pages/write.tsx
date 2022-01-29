import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Page from "../layouts/Page";
import { useRouter } from "next/router";
import Editor from "../components/Editor";
import { ExtendedNote, NoteContent } from "../types/note";
import { v4 } from "uuid";
import dayjs from "dayjs";
import { useHub } from "../hooks/useHub";
import { ipfs } from "../lib/ipfs";
import { useSigner } from "../hooks/useSigner";
import { ethers } from "ethers";
import { useModal } from "../hooks/useModal";
import Transaction from "../components/Transaction";

interface WriteProps {}

const Write: NextPage<WriteProps> = () => {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [note, setNote] = useState<ExtendedNote>();
  const { hub } = useHub();
  const { signer } = useSigner();
  const { setModal } = useModal();
  const { query } = useRouter();

  useEffect(() => {
    if (signer && hub && query.noteId) {
      setLoading(true);

      const getNote = async () => {
        const [encodedNote] = await hub.functions.getNote(
          ethers.BigNumber.from(query.noteId)
        );

        const { noteId, owner, contentId } = encodedNote;

        const [noteUri] = await hub.functions.getContent(contentId);

        const noteContent = (await (
          await fetch(noteUri)
        ).json()) as NoteContent;

        setNote({
          noteId,
          owner,
          contentId,
          data: noteContent,
        });
        setLoading(false);
      };

      getNote();
    }
  }, [hub, signer, query]);

  const saveNote = async (title: string, content: string) => {
    setUploading(true);

    const payload: NoteContent = {
      id: v4(),
      title,
      content,
      updatedAt: dayjs(new Date()).toISOString(),
      createdAt: dayjs(new Date()).toISOString(),
    };

    const { path } = await ipfs().add(JSON.stringify(payload));

    const ipfsLink = `https://ipfs.infura.io:5001/api/v0/cat?arg=${path}`;

    const tx = await hub.functions.createNote(ipfsLink);

    setModal(<Transaction tx={tx} />);
    setUploading(false);
  };

  const updateNote = async (
    { noteId, data: { id, createdAt } }: ExtendedNote,
    title: string,
    content: string
  ) => {
    setUploading(true);

    const payload: NoteContent = {
      id,
      title,
      content,
      updatedAt: dayjs(new Date()).toISOString(),
      createdAt,
    };

    const { path } = await ipfs().add(JSON.stringify(payload));

    const ipfsLink = `https://ipfs.infura.io:5001/api/v0/cat?arg=${path}`;

    const tx = await hub.functions.updateNote(noteId, ipfsLink);

    setModal(<Transaction tx={tx} />);
    setUploading(false);
  };

  return (
    <Page
      title="Write"
      loading={loading}
      component={
        <Editor
          note={note}
          onSave={saveNote}
          onUpdate={updateNote}
          uploading={uploading}
        />
      }
    />
  );
};

export default Write;
