'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import ButtonStore, { ButtonStyle } from './Button'
import TooltipStore, { TooltipStyle } from './Tooltip'

interface Props {
  children?: React.ReactNode
  isTitle: boolean
  isTextChange: boolean
}

export default function NavBar({ children, isTitle, isTextChange }: Props) {
  const router = useRouter()
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  return (
    <div className="relative flex items-center justify-between w-[375px] h-11 mt-[44px] font-Pretendard font-bold text-gray-900 text-lg capitalize px-4 mb-4">
      <div className="flex justify-start">
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
      {isTextChange && (
        <div className="relative flex justify-end">
          <ButtonStore
            buttonStyle={ButtonStyle.TEXT_CHANGE}
            onClickFunction={() => {
              setIsTooltipVisible(!isTooltipVisible)
            }}
          >
            글자크기
          </ButtonStore>
          {isTooltipVisible && (
            <div className="absolute mt-5">
              <TooltipStore tooltipStyle={TooltipStyle.TEXT_CHANGE} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
