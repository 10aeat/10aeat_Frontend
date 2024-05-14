'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import ButtonStore, { ButtonStyle } from './ButtonStore'

interface Props {
  children: React.ReactNode
}

export default function NavBar({ children }: Props) {
  const router = useRouter()

  return (
    <div className="flex items-center justify-between w-[375px] h-11 font-Pretendard font-bold text-gray-900 text-lg capitalize px-[16px]">
      <div className="flex justify-start flex-1">
        <Image
          src="/icons/arrow_left_large_gray900.svg"
          width={24}
          height={24}
          alt="arrow_left_large_gray900"
          className="cursor-pointer"
          onClick={() => router.back()}
        />
      </div>
      <div className="flex-1 text-center">{children}</div>
      <div className="flex justify-end flex-1">
        <ButtonStore buttonStyle={ButtonStyle.TEXT_CHANGE}>
          글자크기
        </ButtonStore>
      </div>
    </div>
  )
}
