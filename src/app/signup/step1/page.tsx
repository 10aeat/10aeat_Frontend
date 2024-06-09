'use client'

import AdminButton, {
  ButtonStyle,
} from '@/app/admin/_components/atoms/AdminButton'
import NavBar from '@/components/atoms/NavBar'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

export default function Page() {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [isEmailFilled, setIsEmailFilled] = useState(false)
  const [isCodeFilled, setIsCodeFilled] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isCodeValid, setIsCodeValid] = useState(true)

  const router = useRouter()

  // 이메일 유효성 검사 함수
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  // 이메일 입력란 값 변경 핸들러
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setIsEmailFilled(!!event.target.value)
    setIsEmailValid(validateEmail(event.target.value))
  }

  // 이메일 입력란 초기화 핸들러
  const handleEmailClear = () => {
    setEmail('')
    setIsEmailFilled(false)
    setIsEmailValid(true)
  }

  return (
    <div className="flex flex-col w-full items-center bg-white h-[812px]">
      <NavBar isTextChange={false} isTitle />
      <div className="absolute top-[68px] w-[343px] h-[28px] ">
        <div className="inline-flex items-center gap-[10px]">
          <div className="flex w-[28px] h-[28px] bg-blue-600 rounded-[14px] font-Pretendard font-bold text-white text-[14px] leading-[21px] text-center justify-center items-center">
            1
          </div>
          <div className="w-[10px] h-[10px] rounded-[5px] bg-gray-300" />
          <div className="w-[10px] h-[10px] rounded-[5px] bg-gray-300" />
        </div>
      </div>
      <div className="absolute top-[120px] w-[343px]">
        <div className="font-Pretendard text-[24px] font-bold text-gray-900 leading-[32px] capitalize text-left">
          이메일 계정 인증
        </div>
      </div>

      <div className="absolute top-[192px] w-[343px] h-[84px]">
        <div className="font-Pretendard text-[16px] text-gray-900 font-medium leading-[24px] capitalize ">
          이메일
        </div>
        <div
          className={`relative top-[12px] flex w-[343px] h-[48px] px-[16px] py-[12px] gap-[8px] rounded-[10px] border-solid border-[1px] ${
            isEmailValid ? 'border-gray-300' : 'border-red-500'
          } bg-white ${isEmailValid ? 'focus-within:border-blue-600' : ''}`}
        >
          <input
            onChange={handleEmailChange}
            value={email}
            className="flex items-center gap-[8px] flex-[1_0_0%] opacity-[0.4] font-Pretendard text-[16px] font-normal leading-[24px] text-gray-700 focus:opacity-100 focus:outline-none"
            placeholder="이메일 주소를 입력해주세요."
          />
          {isEmailFilled && (
            <Image
              onClick={handleEmailClear}
              src={
                isEmailValid ? `/icons/close_circle.svg` : '/icons/danger.svg'
              }
              width={24}
              height={24}
              alt="close_circle"
              className="w-[24px] h-[24px] cursor-pointer"
            />
          )}
        </div>
        {!isEmailValid && (
          <div className="relative top-[14px] font-Pretendard text-red-500 font-normal text-[12px] leading-[18px] self-stretch">
            잘못된 유형의 이메일 주소입니다.
          </div>
        )}
      </div>
      <div className="absolute top-[308px] w-[343px] h-[84px]">
        <div className="font-Pretendard text-[16px] text-gray-900 font-medium leading-[24px] capitalize ">
          인증코드
        </div>
        <div className="relative top-[12px] flex w-[343px] h-[48px] px-[16px] py-[12px] gap-[8px] rounded-[10px] border-b-[1px] border-solid border-gray-300 bg-white">
          <input
            className="flex items-center gap-[8px] flex-[1_0_0%] opacity-[0.4] font-Pretendard text-[16px] font-normal leading-[24px] text-gray-700"
            placeholder="코드 8자리를 입력해 주세요."
          />
          {/* <Image
          src="/icons/eye.svg"
          width={24}
          height={24}
          alt="eye"
          className="w-[24px] h-[24px]"
        />
        <Image
          src="/icons/eye_close.svg"
          width={24}
          height={24}
          alt="eye_close"
          className="w-[24px] h-[24px]"
        /> */}
        </div>
      </div>
      <div className="absolute top-[440px] flex flex-col w-[343px] gap-[16px]">
        <AdminButton
          buttonSize="md"
          buttonStyle={ButtonStyle.PRIMARY}
          isDisabled
        >
          인증하기
        </AdminButton>
      </div>
    </div>
  )
}
