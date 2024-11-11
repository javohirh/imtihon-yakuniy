import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { data } from "../pages/HomePage";

type Store = {
  phone: string | null;
  name: string | null;
  token: string | null;

  count: number;
  inc: (e: data[]) => void;
  setPhone: (e: string) => void;
  setName: (e: string) => void;
  setToken: (e: string) => void;
  clearAll: () => void;
};

const useStore = create<Store>()(
  persist(
    (set) => ({
      token: null,
      phone: null,
      name: null,
      favorite: [],
      count: 0,
      inc: (e: data[]) =>
        set((state) => ({
          ...state,

          count: e.filter((e) => e.favorite === true).length,
        })),
      setPhone: (e: string) => set((state) => ({ ...state, phone: e })),
      setName: (e: string) => set((state) => ({ ...state, name: e })),
      setToken: (e: string) => set((state) => ({ ...state, token: e })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        phone: state.phone,
        name: state.name,
        token: state.token,
      }),
    }
  )
);

export default useStore;
