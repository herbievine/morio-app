import { ethers } from "ethers";

export interface NoteContent {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
  createdAt: string;
}

export interface ExtendedNote {
  noteId: ethers.BigNumber;
  owner: string;
  contentId: string;
  data: NoteContent;
}
