import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const accessTokenKey = 'accesstoken-key'

interface AccessToken {
  accessToken: string
  setAccessToken: (newAccessToken: string) => void
}

export const useAccessToken = create(
  persist<AccessToken>(
    (set) => ({
      accessToken: '',
      setAccessToken: (accessToken: string) => {
        set({ accessToken: accessToken })
      },
    }),
    {
      name: accessTokenKey,
    },
  ),
)
