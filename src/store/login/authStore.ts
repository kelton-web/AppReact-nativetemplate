import { create } from 'zustand';

type UserState = {
  user: null | { id: string, email: string, name: string },
  token: null | string,
  setToken: (token: string) => void,
  setUser: (user: { id: string, email: string, name: string }) => void,
  logout: () => void,
};

export const useUserStore = create<UserState>((set: (arg0: { token?: any; user?: any; }) => any) => ({
  user: null,
  token: null,
  setToken: (token: any) => set({ token }),
  setUser: (user: any) => set({ user }),
  logout: () => set({ user: null, token: null }),
}));
