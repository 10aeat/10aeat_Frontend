'use client'

import Image from 'next/image'
import NavBar from '@/components/atoms/NavBar'
import TextArea from '@/components/atoms/TextArea'
import { useState } from 'react'

export default function AddOffice() {
  const [dong, setDong] = useState('')
  const [ho, setHo] = useState('')

  return (
    <div className="flex flex-col w-[375px] h-[812px] bg-gray-100 font-Pretendard">
      <NavBar isTextChange={false} isTitle>
        호실 추가
      </NavBar>
      <div className="flex flex-col pt-[40px] px-[32px] gap-[40px] text-[18px] font-bold leading-[24px]">
        <div className="flex items-end gap-[8px]">
          <div>
            소유하고 있는 호실의
            <br />
            동,호수를 입력해주세요.
          </div>
          <Image
            src="/icons/building.svg"
            alt="building"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col gap-[8px] text-[16px] text-gray-700 font-medium leading-[24px]">
          <div className="flex items-start gap-[4px]">
            <Image src="/icons/check.svg" alt="check" width={24} height={24} />
            <div>
              같은 건물 내에 소유하고 있는 호실을
              <br />
              추가할 수 있습니다.
            </div>
          </div>
          <div className="flex items-start gap-[4px]">
            <Image src="/icons/check.svg" alt="check" width={24} height={24} />
            <div>다른 건물 내의 호실은 추가할 수 없습니다.</div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-[16px] items-center">
            <TextArea
              width="168px"
              placeholder=""
              value={dong}
              onChange={(e) => setDong(e.target.value)}
            />{' '}
            동
          </div>
          <div className="flex gap-[16px] items-center">
            <TextArea
              width="168px"
              placeholder=""
              value={ho}
              onChange={(e) => setHo(e.target.value)}
            />{' '}
            호
          </div>
        </div>
      </div>
      <button
        type="submit"
        className={
          dong.trim() === '' || ho.trim() === ''
            ? 'flex justify-center mt-auto mb-[68px] mx-auto w-[343px] p-[14px] rounded-[12px] bg-blue-600 opacity-40 text-[20px] font-semibold leading-[20px] text-white'
            : 'flex justify-center mt-auto mb-[68px] mx-auto w-[343px] p-[14px] rounded-[12px] bg-blue-600 text-[20px] font-semibold leading-[20px] text-white'
        }
        disabled={dong.trim() === '' || ho.trim() === ''}
      >
        추가하기
      </button>
    </div>
  )
}
