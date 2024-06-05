import AdminButton, {
  ButtonStyle,
} from '@/app/admin/_components/atoms/AdminButton'
import NavBar from '@/components/atoms/NavBar'
import React from 'react'

export default function page() {
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
        <div className="relative top-[12px] flex w-[343px] h-[48px] px-[16px] py-[12px] gap-[8px] rounded-[10px] border-solid border-[1px] border-gray-300 bg-white">
          <input
            className="flex items-center gap-[8px] flex-[1_0_0%] opacity-[0.4] font-Pretendard text-[16px] font-normal leading-[24px] text-gray-700"
            placeholder="이메일 주소를 입력해주세요."
          />
          {/* <Image
          src="/icons/close_circle.svg"
          width={24}
          height={24}
          alt="close_circle"
          className="w-[24px] h-[24px]"
        /> */}
          {/* <Image
          src="/icons/danger.svg"
          width={24}
          height={24}
          alt="danger"
          className="w-[24px] h-[24px]"
        /> */}
        </div>
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
