/* eslint-disable no-unused-vars */
import { create } from 'zustand';

interface FavoriteStateType {
  favorite: number[];
  add: (id: number) => void;
  remove: (id: number) => void;
}

const useFavoriteStore = create<FavoriteStateType>((set) => ({
  favorite: [],
  add: (id) => set((state) => ({ favorite: [...state.favorite, id] })),
  remove: (id) =>
    set((state) => ({
      favorite: state.favorite.filter((item) => item !== id),
    })),
}));

export default useFavoriteStore;
