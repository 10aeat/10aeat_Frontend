import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const storageKey = 'save-key'

interface Issue {
  isSave: boolean
  setIsSave: (isSave: boolean) => void
}

export const useSaveStore = create(
  persist<Issue>(
    (set) => ({
      isSave: false,

      setIsSave: (isSave: boolean) => {
        set({ isSave })
      },
    }),
    {
      name: storageKey,
    },
  ),
)
