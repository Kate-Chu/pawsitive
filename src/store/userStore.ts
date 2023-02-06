import { create } from 'zustand';

interface UserStateType {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const useUserStore = create<UserStateType>((set) => ({
  showSidebar: false,

  toggleSidebar: () =>
    set((state) => {
      const body = document.querySelector('body');
      body?.classList.toggle('no-scroll');
      return { showSidebar: !state.showSidebar };
    }),
}));

export default useUserStore;
