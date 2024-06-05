'use client'

import { useState } from 'react'

export default function AdminFilterBtn() {
  const [isSelect, setIsSelect] = useState('전체')
  // const
  return (
    <>
      <button
        type="button"
        onClick={() => setIsSelect('전체')}
        className={`flex px-[12px] py-[4px] justify-center items-center gap-[8px] rounded-[100px] ${isSelect === '전체' ? 'bg-blue-600' : 'bg-white border-solid border-[1px] border-gray-300'}`}
      >
        <span
          className={`font-Pretendard text-[16px] font-medium leading-[24px] capitilize text-center ${isSelect === '전체' ? ' text-white' : 'text-gray-600'}`}
        >
          전체
        </span>
      </button>
      <button
        type="button"
        onClick={() => setIsSelect('대기')}
        className={`flex px-[12px] py-[4px] justify-center items-center gap-[8px] rounded-[100px] ${isSelect === '대기' ? 'bg-blue-600' : 'bg-white border-solid border-[1px] border-gray-300'}`}
      >
        <span
          className={`font-Pretendard text-[16px] font-medium leading-[24px] capitilize text-center ${isSelect === '대기' ? ' text-white' : 'text-gray-600'}`}
        >
          대기
        </span>
      </button>
      <button
        type="button"
        onClick={() => setIsSelect('진행중')}
        className={`flex px-[12px] py-[4px] justify-center items-center gap-[8px] rounded-[100px] ${isSelect === '진행중' ? 'bg-blue-600' : 'bg-white border-solid border-[1px] border-gray-300'}`}
      >
        <span
          className={`font-Pretendard text-[16px] font-medium leading-[24px] capitilize text-center ${isSelect === '진행중' ? ' text-white' : 'text-gray-600'}`}
        >
          진행중
        </span>
      </button>
      <button
        type="button"
        onClick={() => setIsSelect('완료')}
        className={`flex px-[12px] py-[4px] justify-center items-center gap-[8px] rounded-[100px] ${isSelect === '완료' ? 'bg-blue-600' : 'bg-white border-solid border-[1px] border-gray-300'}`}
      >
        <span
          className={`font-Pretendard text-[16px] font-medium leading-[24px] capitilize text-center ${isSelect === '완료' ? ' text-white' : 'text-gray-600'}`}
        >
          완료
        </span>
      </button>
    </>
  )
}
