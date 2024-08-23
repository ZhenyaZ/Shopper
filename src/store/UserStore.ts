import { create } from 'zustand';

interface UserState {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
  isAuth: false,
  setIsAuth(isAuth) {
    set((state) => {
      return {
        isAuth: isAuth,
      };
    });
  },
}));
