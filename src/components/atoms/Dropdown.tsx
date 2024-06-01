'use client'

import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
  isDisabled: boolean
  size: string
}

export default function Dropdown({ isDisabled, size }: Props) {
  const [open, setOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('선택')

  let sizeStyle = ''

  switch (size) {
    case 'sm':
      sizeStyle = 'gap-0.5 rounded-[8px] text-sm p-2.5'
      break
    case 'md':
      sizeStyle = 'gap-1 rounded-[10px] text-base p-3.5'
  }

  const handleToggle = () => {
    if (!isDisabled) {
      setOpen(!open)
    }
  }
  const handleOptionClick = (option: string) => {
    if (!isDisabled) {
      setSelectedOption(option)
      setOpen(false) // 옵션 선택 후 드롭다운 닫기
    }
  }

  const options = ['선택 1', '선택 2', '선택 3']

  const isOptionSelected = options.includes(selectedOption)

  return (
    <div className="flex w-[200px] h-[48px]">
      <div
        className={`flex flex-col items-start z-10  ${size === 'md' ? 'w-[200px]' : 'w-[178px]'} ${isDisabled ? 'opacity-40' : ''}`}
      >
        <button
          className={`flex ${size === 'md' ? 'w-[200px] h-[48px] px-[16px] py-[12px]' : 'w-[178px] h-[36px] px-[10px] py-[0px] justify-between'} items-center rounded-[8px] border-[1px] border-solid ${isOptionSelected ? 'border-gray-400' : 'border-gray-300'} bg-white hover:bg-gray-50 group cursor-pointer`}
          onClick={handleToggle}
        >
          <div className="flex items-start gap-[60px] flex-[1_0_0%] ">
            <span
              className={`font-Pretendard ${size === 'md' ? 'text-[16px] leading-[16px]' : 'text-[14px] leading-[20px] tracking-[-0.14px]'} font-medium capitalize ${isOptionSelected ? 'text-gray-500' : 'text-gray-400'} group-hover:text-gray-500 `}
            >
              {selectedOption}
            </span>
          </div>
          <Image
            src="/icons/arrow_down_small.svg"
            width={24}
            height={24}
            alt="arrow_down"
            className={`relative ${size === 'md' ? '!w-[24px] !h-[24px]' : '!w-[16px] !h-[16px]'} !left-[6px]`}
          />
        </button>
        {open && (
          <div
            className={`flex flex-col relative items-start self-stretch rounded-[8px] border-[1px] border-solid border-gray-300 boxshadow-secondary bg-white`}
          >
            {options.map((option, index) => {
              return (
                <div
                  className="flex px-[16px] py-[12px] items-start gap-[10px] self-stretch  hover:bg-blue-50 group cursor-pointer"
                  key={index}
                  onClick={() => handleOptionClick(option)}
                >
                  <div
                    className={`font-Pretendard font-normal ${size === 'md' ? 'text-[16px] leading-[24px]' : 'text-[14px] leading-[20px] tracking-[-0.14px]'} text-gray-400 group-hover:text-blue-600`}
                  >
                    {option}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
