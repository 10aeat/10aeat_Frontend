'use client'

import AdminButton, {
  ButtonStyle,
} from '@/app/admin/_components/atoms/AdminButton'
import axios from 'axios'
import NavBar from '@/components/atoms/NavBar'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAccessToken } from '@/components/store/AccessTokenStore'
import { ChangeEvent, useState } from 'react'

export default function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailFilled, setIsEmailFilled] = useState(false)
  const [isPasswordFilled, setIsPasswordFilled] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const { accessToken, setAccessToken } = useAccessToken()

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

  // 비밀번호 입력란 값 변경 핸들러
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    setIsPasswordFilled(!!event.target.value)
    setIsPasswordValid(true) // Reset password validation
  }

  // 비밀번호 입력란 초기화 핸들러
  const handlePasswordClear = () => {
    setPassword('')
    setIsPasswordFilled(false)
  }
  // 비밀번호 보이기/숨기기 핸들러
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  // 로그인 버튼 클릭 핸들러
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10aeat.com/members/login', {
        email,
        password,
      })
      if (response) {
        console.log('로그인 성공!')
        setAccessToken(response.headers.accesstoken)
        router.push('/main')
      } else {
        // 오류 처리
        setIsPasswordValid(false)
      }
    } catch (error) {
      // 네트워크 오류 등을 처리합니다.
      console.error('네트워크 오류:', error)
      setIsPasswordValid(false)
    }
  }

  return (
    <div className="flex flex-col w-full items-center bg-white h-[812px]">
      <NavBar isTextChange={false} isTitle />
      <div className="absolute top-[68px] w-[343px]">
        <div className="font-Pretendard text-[24px] font-bold text-gray-900 leading-[32px] capitalize text-left">
          이메일로 로그인
        </div>
      </div>
      <div className="absolute top-[140px] w-[343px] h-[84px]">
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
      <div className="absolute top-[256px] w-[343px] h-[84px]">
        <div className="font-Pretendard text-[16px] text-gray-900 font-medium leading-[24px] capitalize ">
          비밀번호
        </div>
        <div
          className={`relative top-[12px] flex w-[343px] h-[48px] px-[16px] py-[12px] gap-[8px] rounded-[10px] border-solid border-[1px] ${
            isPasswordValid ? 'border-gray-300' : 'border-red-500'
          } bg-white focus-within:border-blue-600`}
        >
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            className="flex items-center gap-[8px] flex-[1_0_0%] opacity-[0.4] font-Pretendard text-[16px] font-normal leading-[24px] text-gray-700 focus:opacity-100 focus:outline-none"
            placeholder="영문, 숫자, 특수기호 포함 8-16자입니다."
          />
          {isPasswordFilled && (
            <Image
              onClick={handlePasswordClear}
              src="/icons/close_circle.svg"
              width={24}
              height={24}
              alt="close_circle"
              className="w-[24px] h-[24px] cursor-pointer"
            />
          )}
          <Image
            onClick={togglePasswordVisibility}
            src={isPasswordVisible ? '/icons/eye.svg' : '/icons/eye_close.svg'}
            width={24}
            height={24}
            alt={isPasswordVisible ? 'eye' : 'eye_close'}
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </div>
        {!isPasswordValid && (
          <div className="relative top-[14px] font-Pretendard text-red-500 font-normal text-[12px] leading-[18px] self-stretch">
            잘못된 비밀번호입니다.
          </div>
        )}
      </div>
      <div className="absolute top-[388px] flex flex-col w-[343px] gap-[16px]">
        <AdminButton
          buttonSize="md"
          buttonStyle={ButtonStyle.PRIMARY}
          onClickFunction={handleLogin}
          isDisabled={!(email && password && isEmailValid)}
        >
          로그인
        </AdminButton>
      </div>
    </div>
  )
}
