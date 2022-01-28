import dayjs from "dayjs";
import { useRouter } from "next/router";
import React from "react";
import { up } from "../lib/up";
import type { ExtendedNote } from "../types/note";

interface NoteProps {
  note: ExtendedNote;
}

const Note: React.FC<NoteProps> = ({
  note: {
    noteId,
    data: { title, content, updatedAt, createdAt },
  },
}) => {
  const { push } = useRouter();

  return (
    <div
      className="p-4 rounded-lg bg-neutral-800 cursor-pointer"
      onClick={() => push(`/write?noteId=${noteId}`)}
    >
      <div className="flex justify-between items-center">
        <p className="font-bold text-neutral-300">{title}</p>
        <p className="text-sm font-bold text-neutral-500">
          {up(
            updatedAt !== createdAt
              ? dayjs(updatedAt).fromNow()
              : dayjs(createdAt).fromNow()
          )}
        </p>
      </div>
      <p className="mt-2 text-sm text-neutral-400 truncate">{content}</p>
    </div>
  );
};

export default Note;
