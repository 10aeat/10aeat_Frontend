import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const storageKey = 'issue-key'

interface Issue {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}

export const useIssueStore = create(
  persist<Issue>(
    (set) => ({
      isVisible: true,

      setIsVisible: (isVisible: boolean) => {
        set({ isVisible })
      },
    }),
    {
      name: storageKey,
    },
  ),
)
