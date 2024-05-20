'use client'

import Image from 'next/image'
// import '../../styles/shareStyle.scss'

export default function ShareBtn() {
  return (
    <button className="flex w-[343px] h-[52px] p-[16px] items-end justify-center bg-white rounded-[18px] content-end gap-x-[10px] gap-y-[8px] flex-wrap shrink-0">
      <div className="flex  items-center ">
        <Image
          src="/icons/arrow_forward.svg"
          width={32}
          height={32}
          alt="arrow_forward"
          className="mr-[8px] w-[24px] h-[24px]"
        />
        <div className="share-content font-Pretendard leading-6 text-center text-sm">
          같은 건물 소유자에서
          <span className="font-bold font-Pretendard"> 사안 공유하기</span>
        </div>
      </div>
    </button>
  )
}
