'use client'

import Image from 'next/image'
import { useState } from 'react'
import ClipboardIcon from '../../../../../../../public/icons/clipboard_check.svg'

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState<Boolean>(true)
  const [selectMenu, setSelectMenu] = useState<number | null>(null)

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectMenu = (menuIndex: number) => {
    setSelectMenu(menuIndex)
  }

  return (
    <div className="flex flex-col w-[232px] h-screen items-center font-Pretendard bg-gray-50">
      <div className="flex w-[100%] py-[12px] pl-[20px] pr-[24px] text-[18px] justify-between leading-[24px] font-bold items-center gap-[8px] text-gray-800 bg-white">
        <div className="flex w-[24px] h-[24px] p-[4px] items-center rounded-[4px] bg-blue-50">
          <Image
            src="/icons/buildings.svg"
            width={16}
            height={16}
            alt="arrow_up_large"
          />
        </div>
        <div className="w-[160px]">오피스너타워</div>
      </div>

      <div className="flex flex-col w-[100%] items-center py-[16px] border-y border-gray-200">
        <div className="flex w-[200px] px-[12px] py-[16px] gap-[12px] items-center justify-between rounded-[6px] bg-gray-100">
          <div className="w-[20px]">
            <ClipboardIcon color="#4B5563" width={20} height={20} />
          </div>
          <div className="w-[112px] font-bold text-[16px] leading-[24px]">
            건물 관리 현황
          </div>
          <button onClick={handleToggleMenu} type="button">
            <Image
              src={
                isOpen
                  ? '/icons/arrow_up_large.svg'
                  : '/icons/arrow_down_large.svg'
              }
              width={20}
              height={20}
              alt={isOpen ? 'arrow_up_large' : 'arrow_down_large'}
            />
          </button>
        </div>
        {isOpen ? (
          <>
            <div className="flex w-[200px] px-[12px] py-[16px] gap-[12px] items-center rounded-[6px]">
              <button
                type="button"
                className={`w-[100%] ${selectMenu === 1 ? 'font-bold text-blue-700' : 'font-medium'} text-left text-[14px] leading-[16px]`}
                onClick={() => handleSelectMenu(1)}
              >
                건물 유지보수 사안
              </button>
            </div>
            <div className="flex w-[200px] px-[12px] py-[16px] gap-[12px] items-center rounded-[6px]">
              <button
                type="button"
                className={`w-[100%] ${selectMenu === 2 ? 'font-bold text-blue-700' : 'font-medium'} text-left text-[14px] leading-[16px]`}
                onClick={() => handleSelectMenu(2)}
              >
                법정 시설물 유지관리 점검
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}
