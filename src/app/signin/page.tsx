'use client'
import AdminButton, {
  ButtonStyle,
} from '@/app/admin/_components/atoms/AdminButton'
import NavBar from '@/components/atoms/NavBar'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

export default function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailFilled, setIsEmailFilled] = useState(false)
  const [isPasswordFilled, setIsPasswordFilled] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isEmailFocused, setIsEmailFocused] = useState(false)
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isLoginFailed, setIsLoginFailed] = useState(false)

  // 이메일 유효성 검사 함수
  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  // 이메일 입력란 값 변경 핸들러
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setIsEmailFilled(!!event.target.value)
    setIsEmailValid(true) // 사용자가 입력을 변경할 때마다 이메일 유효성 상태를 초기화합니다.
  }

  // 비밀번호 입력란 값 변경 핸들러
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    setIsPasswordFilled(!!event.target.value)
    setIsLoginFailed(false) // 사용자가 입력을 변경할 때마다 로그인 실패 상태를 초기화합니다.
  }

  // 이메일 입력란 초기화 핸들러
  const handleEmailClear = () => {
    setEmail('')
    setIsEmailFilled(false)
    setIsEmailValid(true)
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
    // 로그인 실패 상태 초기화
    setIsLoginFailed(false)

    // 이메일 유효성 검사
    const emailIsValid = validateEmail(email)
    setIsEmailValid(emailIsValid)

    // 이메일이 유효하지 않으면 로그인 요청을 보내지 않음
    if (!emailIsValid) {
      return
    }

    try {
      const response = await fetch('http://10aeat.com/members/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      if (response.ok) {
        // 성공적으로 요청을 보냈다면 이후의 작업을 수행합니다.
        console.log('로그인 성공!')
        console.log(response)
        alert('로그인 성공')
      } else {
        // 오류 처리
        console.error('로그인 실패:', response.statusText)
        setIsLoginFailed(true)
      }
    } catch (error) {
      // 네트워크 오류 등을 처리합니다.
      console.error('네트워크 오류:', error)
      setIsLoginFailed(true)
    }
  }

  // 이메일 입력란 포커스 아웃 핸들러
  const handleEmailBlur = () => {
    setIsEmailFocused(false)
    setIsEmailValid(validateEmail(email))
  }

  // 비밀번호 입력란 포커스 아웃 핸들러
  const handlePasswordBlur = () => {
    setIsPasswordFocused(false)
  }

  return (
    <div className="flex flex-col w-full items-center bg-white h-[812px]">
      <NavBar isTextChange={false} isTitle={true}></NavBar>
      <div className="absolute top-[68px] w-[343px]">
        <div className="font-Pretendard text-[24px] font-bold text-gray-900 leading-[32px] capitalize text-left">
          이메일로 로그인
        </div>
      </div>

      <div className="absolute top-[140px] w-[343px] h-[84px]">
        <div className="font-Pretendard text-[16px] text-gray-900 font-medium leading-[24px] capitalize">
          이메일
        </div>
        <div
          className={`relative top-[12px] flex w-[343px] h-[48px] px-[16px] py-[12px] gap-[8px] rounded-[10px] border-solid border-[1px] ${
            isEmailValid ? 'border-gray-300' : 'border-red-500'
          } bg-white ${isEmailFocused && isEmailValid ? 'focus-within:border-blue-600' : ''}`}
        >
          <input
            onChange={handleEmailChange}
            value={email}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={handleEmailBlur}
            className="flex items-center gap-[8px] flex-[1_0_0%] opacity-[0.4] font-Pretendard text-[16px] font-normal leading-[24px] text-gray-700 focus:opacity-100 focus:outline-none"
            placeholder="이메일 주소를 입력해주세요."
          />
          {isEmailFilled && isEmailFocused && (
            <Image
              onClick={handleEmailClear}
              src={
                isEmailValid ? '/icons/close_circle.svg' : '/icons/danger.svg'
              }
              width={24}
              height={24}
              alt={isEmailValid ? 'close_circle' : 'danger'}
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
        <div className="font-Pretendard text-[16px] text-gray-900 font-medium leading-[24px] capitalize">
          비밀번호
        </div>
        <div
          className={`relative top-[12px] flex w-[343px] h-[48px] px-[16px] py-[12px] gap-[8px] rounded-[10px] border-solid border-[1px] ${
            isLoginFailed ? 'border-red-500' : 'border-gray-300'
          } bg-white ${isPasswordFocused && !isLoginFailed ? 'focus-within:border-blue-600' : ''}`}
        >
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={handlePasswordBlur}
            className="flex items-center gap-[8px] flex-[1_0_0%] opacity-[0.4] font-Pretendard text-[16px] font-normal leading-[24px] text-gray-700 focus:opacity-100 focus:outline-none"
            placeholder="영문, 숫자, 특수기호 포함 8-16자입니다."
          />

          {isPasswordFilled && isPasswordFocused && (
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
        {isLoginFailed && (
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
          isDisabled={email && password && isEmailValid ? false : true}
        >
          로그인
        </AdminButton>
      </div>
    </div>
  )
}
