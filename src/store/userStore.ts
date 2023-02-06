import { create } from 'zustand';

interface UserStateType {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const useUserStore = create<UserStateType>((set) => ({
  showSidebar: false,

  toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
}));

export default useUserStore;
