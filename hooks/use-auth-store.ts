import { create } from 'zustand'

interface AuthStore {
  isOpen: boolean
  view: "login" | "signup"
  openModal: (view?: "login" | "signup") => void
  closeModal: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isOpen: false,
  view: "login",
  openModal: (view = "login") => set({ isOpen: true, view }),
  closeModal: () => set({ isOpen: false }),
}))