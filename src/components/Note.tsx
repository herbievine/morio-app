import dayjs from "dayjs";
import { useRouter } from "next/router";
import React from "react";
import { up } from "../lib/up";
import type { ExtendedNote } from "../types/note";

interface NoteProps {
  note?: ExtendedNote;
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const { push } = useRouter();

  return (
    <div
      className="p-4 rounded-md border border-neutral-700 cursor-pointer"
      onClick={() =>
        push(note?.noteId ? `/write?noteId=${note.noteId}` : "/write")
      }
    >
      <div className="flex justify-between items-center">
        <p className="font-bold text-neutral-300 truncate">
          {note?.data?.title
            ? note?.data?.title
            : "Seems like you don't have any notes"}
        </p>
        <p className="pl-4 whitespace-nowrap text-sm font-bold text-neutral-500">
          {note?.data?.updatedAt && up(dayjs(note?.data?.updatedAt).fromNow())}
        </p>
      </div>
      <p className="mt-2 text-sm text-neutral-400 truncate">
        {note?.data?.content ? note?.data?.content : "Create one now"}
      </p>
    </div>
  );
};

export default Note;
