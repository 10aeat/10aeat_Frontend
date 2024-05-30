'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Props {
  title: string
}

export default function NavBar({ title }: Props) {
  const router = useRouter()
  return (
    <div className="font-Pretendard w-full pt-6 pb-2 items-center">
      <div className="flex pb-4">
        <div className="flex justify-start">
          <Image
            src="/icons/arrow_left_large_gray900.svg"
            width={24}
            height={24}
            alt="arrow_left_large_gray900"
            className="cursor-pointer z-10"
            onClick={() => router.back()}
          />
        </div>
        <div className="text-2xl font-bold capitalize text-gray-900">
          {title}
        </div>
      </div>
    </div>
  )
}
