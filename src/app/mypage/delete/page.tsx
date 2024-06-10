'use client'

import React, { useState, useEffect } from 'react'
import NavBar from '@/components/atoms/NavBar'
import Modal, { ModalStyle } from './Modal'
import { useAccessToken } from '@/components/store/AccessTokenStore'

export default function DeleteOffice() {
  const [rooms, setRooms] = useState(['B동 156호', 'B동 200호'])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [message, setMessage] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState('')
  const [buildingInfoId, setBuildingInfoId] = useState<BUILDING[]>()
  const { accessToken } = useAccessToken()

  useEffect(() => {
    const getOfficeData = async () => {
      try {
        const response = await fetch(`http://10aeat.com/my/building/units`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            AccessToken: accessToken,
          },
        })
        const data = await response.json()
        setBuildingInfoId(data.data)
      } catch (error) {
        console.error(error)
      }
    }
    getOfficeData()
  }, [accessToken])

  console.log(buildingInfoId)

  const clickModal = (room: string) => {
    setSelectedRoom(room)
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  const deleteRoom = () => {
    setRooms(rooms.filter((room) => room !== selectedRoom))
    setIsModalOpen(false)
    setMessage(true)
    setTimeout(() => setMessage(false), 2000)
  }

  return (
    <div className="flex flex-col w-[375px] h-[812px] gap-[40px] bg-gray-100 font-Pretendard">
      <NavBar isTextChange={false} isTitle>
        호실 추가
      </NavBar>
      <div className="flex flex-col gap-[32px] mx-auto text-gray-600 text-[18px] font-semibold leading-[24px]">
        {buildingInfoId && buildingInfoId.length > 0
          ? buildingInfoId[0].officeName
          : ''}
        <div className="flex flex-col items-center gap-[16px]">
          {rooms.map((room) => (
            <div
              key={room}
              className="flex items-center justify-between w-[343px] py-[20px] px-[16px] rounded-[18px] text-[16px] font-semibold text-gray-900 bg-white"
            >
              {room}
              <button
                type="button"
                className="w-[45px] h-[40px] p-[10px] bg-red-500 justify-center items-center rounded-[8px] text-[14px] font-medium leading-[20px] text-white"
                onClick={() => clickModal(room)}
              >
                삭제
              </button>
            </div>
          ))}
        </div>
        {isModalOpen && (
          <Modal
            modalStyle={
              rooms.length > 1 ? ModalStyle.Over_Two : ModalStyle.OnlyOne
            }
            onClose={closeModal}
            onConfirm={deleteRoom}
            room={selectedRoom}
          />
        )}
      </div>

      {message && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 py-[8px] px-[16px] rounded-[100px] bg-gray-800 text-16px font-semibold leadeing-[24px] text-white">
          호실이 삭제되었어요.
        </div>
      )}
    </div>
  )
}
