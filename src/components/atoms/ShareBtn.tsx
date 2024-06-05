/* eslint-disable react/button-has-type */

'use client'

import Image from 'next/image'

export default function ShareBtn() {
  return (
    <button className="flex w-[343px] h-[52px] items-center justify-center border border-solid border-gray-300 bg-gray-50 rounded-[16px] content-end gap-x-[10px] gap-y-2 flex-wrap shrink-0 shadow-primary">
      <div className="flex items-center justify-center font-Pretendard font-medium w-full h-full">
        <Image
          src="/icons/arrow_forward.svg"
          width={32}
          height={32}
          alt="arrow_forward"
          className="mr-[8px] w-[24px] h-[24px]"
        />
        <div className="text-center">
          같은 건물 소유자에서&nbsp;
          <span className="font-bold font-Pretendard">사안 공유하기</span>
        </div>
      </div>
    </button>
  )
}
