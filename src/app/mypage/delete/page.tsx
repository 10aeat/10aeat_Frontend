'use client'

import React, { useEffect, useState } from 'react'
import { useAccessToken } from '@/components/store/AccessTokenStore'
import NavBar from '@/components/atoms/NavBar'
import BuildingList from './components/BuildingList'

export default function App() {
  const [buildings, setBuildings] = useState<BUILDING[]>([])
  const { accessToken } = useAccessToken()

  useEffect(() => {
    const getOfficeData = async () => {
      if (!accessToken) {
        return
      }
      try {
        const response = await fetch(
          `https://api.10aeat.com/my/building/units`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )
        const data = await response.json()
        setBuildings(data.data)
      } catch (error) {
        console.error(error)
      }
    }
    getOfficeData()
  }, [accessToken])

  console.log(buildings)

  return (
    <div className="flex flex-col w-full items-center h-[812px] gap-[40px] bg-gray-100 font-Pretendard">
      <NavBar isTextChange={false} isTitle>
        호실 삭제
      </NavBar>
      <BuildingList buildings={buildings} />
    </div>
  )
}
