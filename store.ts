import { create } from "zustand";
import { Note } from "./types/note";

type Store = {
  notes: Note[];
  addNote: (content: string) => void;
  toggleNote: (id: number) => void;
  currentDate: string;
  setCurrentDate: (date: string) => void;
};

export const useStore = create<Store>()((set) => ({
  setCurrentDate: (date: string) => set({ currentDate: date }),
  notes: [
    {
      id: 1,
      content: "Hello",
      createdAt: "2024-02-26T21:57:19.643Z",
      checked: false,
    },
  ],
  currentDate: new Date().toISOString(),
  toggleNote: (id: number) =>
    set((state) => {
      const newNotes = state.notes?.map((note) => {
        if (note.id === id) {
          note.checked = !note.checked;
        }
        return note;
      });

      return { notes: newNotes };
    }),
  addNote: (content: string) =>
    set((state) => {
      const note = {
        id: Date.now(),
        content,
        createdAt: new Date().toISOString(),
        checked: false,
      };

      return { notes: [...state.notes, note] };
    }),
}));
