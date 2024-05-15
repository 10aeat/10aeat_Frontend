'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import ButtonStore, { ButtonStyle } from './ButtonStore'
import TooltipStore from './TooltipStore'

interface Props {
  children?: React.ReactNode
  isTitle: boolean
  isTextChange: boolean
}

export default function NavBar({ children, isTitle, isTextChange }: Props) {
  const router = useRouter()
  const [isTextChangeVisible, setIsTextChangeVisible] = useState(false)

  const toggleTextChange = () => {
    setIsTextChangeVisible(!isTextChangeVisible)
  }

  return (
    <div className="relative flex items-center justify-between w-[375px] h-11 font-Pretendard font-bold text-gray-900 text-lg capitalize px-[16px]">
      <div className="flex justify-start z-10">
        <Image
          src="/icons/arrow_left_large_gray900.svg"
          width={24}
          height={24}
          alt="arrow_left_large_gray900"
          className="cursor-pointer"
          onClick={() => router.back()}
        />
      </div>
      {isTitle && (
        <div className="absolute inset-0 flex justify-center items-center">
          {children}
        </div>
      )}
      <div className="flex justify-end z-10">
        {isTextChange ? (
          <ButtonStore
            buttonStyle={ButtonStyle.TEXT_CHANGE}
            onClickFunction={toggleTextChange}
          >
            글자크기
          </ButtonStore>
        ) : null}
      </div>
    </div>
  )
}
