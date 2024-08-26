import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { LoginUser } from '../types/User';

interface UserState {
  data: LoginUser;
  isAuth: boolean;
  orders: [];

  setUser: (user: Omit<LoginUser, 'password'>) => void;
  setIsAuth: (isAuth: boolean) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      data: {} as LoginUser,
      isAuth: false,
      orders: [],

      setUser(user) {
        set((state) => {
          return {
            data: user,
          };
        });
      },
      setIsAuth(isAuth) {
        set((state) => {
          return {
            isAuth: isAuth,
          };
        });
      },
    }),
    { name: 'user storage', storage: createJSONStorage(() => sessionStorage) },
  ),
);
