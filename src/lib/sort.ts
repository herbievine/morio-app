import { ExtendedNote, NoteContent } from "../types/note";

type SortParams = [keyof NoteContent, "asc" | "desc"];

const sort = (notes: ExtendedNote[], type: SortParams): ExtendedNote[] => {
  const sortOrder = type[1] === "asc" ? [1, -1] : [-1, 1];

  const arr = notes.sort((a, b) =>
    a.data[type[0]] < b.data[type[0]] ? sortOrder[0] : sortOrder[1]
  );

  return arr;
};

export { sort };
