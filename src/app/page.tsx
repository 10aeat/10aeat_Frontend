'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AdminButton, { ButtonStyle } from './admin/_components/atoms/AdminButton'

export default function Page() {
  const router = useRouter()

  return (
    <div className="flex flex-col w-full items-center bg-white h-[812px]">
      <div className="absolute flex w-[193px] h-[56px] top-[193px] justify-center items-center gap-[4px]">
        <Image
          src="/icons/logo1.svg"
          width={39.599}
          height={33.652}
          alt="logo"
        />
        <Image src="/icons/logo2.svg" width={34.667} height={39} alt="logo" />
        <Image
          src="/icons/logo3.svg"
          width={39.599}
          height={33.191}
          alt="logo"
        />
        <Image src="/icons/logo4.svg" width={32.316} height={39} alt="logo" />
      </div>
      <div className="absolute top-[258px] font-Pretendard font-normal text-[16px] text-blue-600 leading-[23.333px] capitalize">
        편리한 오피스 생활의 시작
      </div>
      <div className="absolute top-[446px] flex flex-col w-[343px] p-[14px] gap-[16px]">
        <AdminButton
          buttonSize="md"
          buttonStyle={ButtonStyle.PRIMARY}
          onClickFunction={() => router.push('/signin')}
        >
          로그인
        </AdminButton>
        <AdminButton
          buttonSize="md"
          buttonStyle={ButtonStyle.ACCENT}
          onClickFunction={() => router.push('/signup/step1')}
        >
          <Image
            src="/icons/letter_blue.svg"
            width={24}
            height={24}
            alt="letter"
          />
          이메일로 회원가입
        </AdminButton>
      </div>
    </div>
  )
}
