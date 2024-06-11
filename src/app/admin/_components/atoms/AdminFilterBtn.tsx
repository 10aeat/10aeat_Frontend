'use client'

import { useState } from 'react'

interface Props {
  progress?: string
  setProgress: (progress: string) => void
}
export default function AdminFilterBtn({ progress, setProgress }: Props) {
  // const [progress, setIsSelect] = useState('전체')/
  // const
  return (
    <>
      <button
        type="button"
        onClick={() => setProgress('전체')}
        className={`flex px-[12px] py-[4px] justify-center items-center gap-[8px] rounded-[100px] ${progress === '전체' ? 'bg-blue-600' : 'bg-white border-solid border-[1px] border-gray-300'}`}
      >
        <span
          className={`font-Pretendard text-[16px] font-medium leading-[24px] capitilize text-center ${progress === '전체' ? ' text-white' : 'text-gray-600'}`}
        >
          전체
        </span>
      </button>
      <button
        type="button"
        onClick={() => setProgress('대기')}
        className={`flex px-[12px] py-[4px] justify-center items-center gap-[8px] rounded-[100px] ${progress === '대기' ? 'bg-blue-600' : 'bg-white border-solid border-[1px] border-gray-300'}`}
      >
        <span
          className={`font-Pretendard text-[16px] font-medium leading-[24px] capitilize text-center ${progress === '대기' ? ' text-white' : 'text-gray-600'}`}
        >
          대기
        </span>
      </button>
      <button
        type="button"
        onClick={() => setProgress('진행중')}
        className={`flex px-[12px] py-[4px] justify-center items-center gap-[8px] rounded-[100px] ${progress === '진행중' ? 'bg-blue-600' : 'bg-white border-solid border-[1px] border-gray-300'}`}
      >
        <span
          className={`font-Pretendard text-[16px] font-medium leading-[24px] capitilize text-center ${progress === '진행중' ? ' text-white' : 'text-gray-600'}`}
        >
          진행중
        </span>
      </button>
      <button
        type="button"
        onClick={() => setProgress('완료')}
        className={`flex px-[12px] py-[4px] justify-center items-center gap-[8px] rounded-[100px] ${progress === '완료' ? 'bg-blue-600' : 'bg-white border-solid border-[1px] border-gray-300'}`}
      >
        <span
          className={`font-Pretendard text-[16px] font-medium leading-[24px] capitilize text-center ${progress === '완료' ? ' text-white' : 'text-gray-600'}`}
        >
          완료
        </span>
      </button>
    </>
  )
}
