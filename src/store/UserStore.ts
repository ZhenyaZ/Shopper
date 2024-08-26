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
        set(() => {
          return {
            data: {...user, password: ''},
          };
        });
      },
      setIsAuth(isAuth) {
        set(() => {
          return {
            isAuth: isAuth,
          };
        });
      },
    }),
    { name: 'user storage', storage: createJSONStorage(() => sessionStorage) },
  ),
);
