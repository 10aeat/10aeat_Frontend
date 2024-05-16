'use client'

import Image from 'next/image'
import '../../styles/shareStyle.scss'

export default function ShareBtn() {
  return (
    <button className="box w-[343px] h-[52px] justify-center">
      <div className="flex  items-center">
        <Image
          src="/icons/arrow_forward.svg"
          width={32}
          height={32}
          alt="arrow_forward"
          className="mr-[8px] w-[24px] h-[24px]"
        />
        <div className="content">
          같은 건물 소유자에서
          <span className="bold"> 사안 공유하기</span>
        </div>
      </div>
    </button>
  )
}
