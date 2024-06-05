import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const accessTokenKey = 'accesstoken-key'

interface AccessToken {
  accessToken: string
  setAccessToken: (accessToken: string) => void
}

export const useAccessToken = create(
  persist<AccessToken>(
    (set) => ({
      accessToken: '',

      setAccessToken: (accessToken: string) => {
        set({ accessToken })
      },
    }),
    {
      name: accessTokenKey,
    },
  ),
)
