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
  add: (item: FavoriteItemType) => void;
  remove: (id: number) => void;
}

const useFavoriteStore = create<FavoriteStateType>((set) => ({
  favorite: [],

  add: (item) => set((state) => ({ favorite: [...state.favorite, item] })),

  remove: (id) =>
    set((state) => ({
      favorite: state.favorite.filter((fav) => fav.id !== id),
    })),
}));

export default useFavoriteStore;
