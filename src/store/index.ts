/* eslint-disable no-unused-vars */
import { create } from 'zustand';

type FavoriteItemType = {
  id: number;
  img: string;
  name: string;
  place: string;
  sex: string;
  phone: string;
  variety: string;
  remark: string;
  shelter: string;
  updateDate: string;
};

interface FavoriteStateType {
  favorite: FavoriteItemType[];
  initialize: () => void;
  add: (item: FavoriteItemType) => void;
  remove: (id: number) => void;
}

const useFavoriteStore = create<FavoriteStateType>((set) => ({
  favorite: [],

  initialize: () =>
    set(() => {
      const fav = JSON.parse(localStorage.getItem('favorite') || '[]');
      return { favorite: fav };
    }),

  add: (item) =>
    set((state) => {
      const fav = [...state.favorite, item];
      localStorage.setItem('favorite', JSON.stringify(fav));
      return { favorite: fav };
    }),

  remove: (id) =>
    set((state) => {
      const newFav = state.favorite.filter((fav) => fav.id !== id);
      localStorage.setItem('favorite', JSON.stringify(newFav));
      return { favorite: newFav };
    }),
}));

export default useFavoriteStore;
