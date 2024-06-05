/* eslint-disable react/button-has-type */
import AdminButton, {
  ButtonStyle,
} from '@/app/admin/_components/atoms/AdminButton'
import NavBar from '@/components/atoms/NavBar'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col w-full items-center bg-white h-[812px]">
      <NavBar isTextChange={false} isTitle />
      <div className="absolute top-[68px] w-[343px] h-[28px] ">
        <div className="inline-flex items-center gap-[10px]">
          <div className="w-[10px] h-[10px] rounded-[5px] bg-gray-300" />
          <div className="w-[10px] h-[10px] rounded-[5px] bg-gray-300" />
          <div className="flex w-[28px] h-[28px] bg-blue-600 rounded-[14px] font-Pretendard font-bold text-white text-[14px] leading-[21px] text-center justify-center items-center">
            3
          </div>
          <div className="font-Pretendard text-[14px] font-normal text-blue-700">
            마지막 단계에요!
          </div>
        </div>
      </div>
      <div className="absolute top-[120px] w-[343px]">
        <div className="font-Pretendard text-[24px] font-bold text-gray-900 leading-[32px] capitalize text-left">
          약관동의
        </div>
        <div className="relative top-[16px] text-Pretendard font-normal text-[16px] text-gray-500 leading-[24px] capitalize">
          아래의 필수 항목에 모두 동의하셔야 <br />
          서비스 이용이 가능해요
        </div>
      </div>
      <div className="absolute flex flex-col w-[343px] top-[264px]">
        <button className="w-[343px] flex p-[16px] justify-between items-center gap-[8px]">
          <div className="font-Pretendard text-[18px] font-medium text-gray-700 leading-[24px] capitalize">
            회원 가입 약관
          </div>
          <Image
            src="/icons/arrow_right_small.svg"
            width={24}
            height={24}
            alt="arrow"
          />
        </button>
        <button className="w-[343px] flex p-[16px] justify-between items-center gap-[8px]">
          <div className="font-Pretendard text-[18px] font-medium text-gray-700 leading-[24px] capitalize">
            회원 이용 약관
          </div>
          <Image
            src="/icons/arrow_right_small.svg"
            width={24}
            height={24}
            alt="arrow"
          />
        </button>
        <button className="w-[343px] flex p-[16px] justify-between items-center gap-[8px]">
          <div className="font-Pretendard text-[18px] font-medium text-gray-700 leading-[24px] capitalize">
            개인 정보 수집 및 이용 동의
          </div>
          <Image
            src="/icons/arrow_right_small.svg"
            width={24}
            height={24}
            alt="arrow"
          />
        </button>
        <button className="w-[343px] flex p-[16px] justify-between items-center gap-[8px]">
          <div className="font-Pretendard text-[18px] font-medium text-gray-700 leading-[24px] capitalize">
            만 14세 이상
          </div>
        </button>
      </div>
      <div className="absolute top-[560px] flex flex-col w-[343px] gap-[16px]">
        <AdminButton
          buttonSize="md"
          buttonStyle={ButtonStyle.PRIMARY}
          isDisabled={false}
        >
          모두 동의 후 가입 완료하기
        </AdminButton>
      </div>
    </div>
  )
}
