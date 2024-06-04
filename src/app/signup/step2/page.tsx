import AdminButton, {
  ButtonStyle,
} from '@/app/admin/_components/atoms/AdminButton'
import NavBar from '@/components/atoms/NavBar'
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col w-full items-center bg-white h-[812px]">
      <NavBar isTextChange={false} isTitle={true}></NavBar>
      <div className="absolute top-[68px] w-[343px] h-[28px] ">
        <div className="inline-flex items-center gap-[10px]">
          <div className="w-[10px] h-[10px] rounded-[5px] bg-gray-300"></div>
          <div className="flex w-[28px] h-[28px] bg-blue-600 rounded-[14px] font-Pretendard font-bold text-white text-[14px] leading-[21px] text-center justify-center items-center">
            2
          </div>
          <div className="w-[10px] h-[10px] rounded-[5px] bg-gray-300"></div>
        </div>
      </div>
      <div className="absolute top-[120px] w-[343px]">
        <div className="font-Pretendard text-[24px] font-bold text-gray-900 leading-[32px] capitalize text-left">
          소유하신 대표 호실은 <br />
          <span className="text-blue-600">B동 110호 </span>입니다.
        </div>
      </div>

      <div className="absolute top-[224px] w-[343px] h-[84px]">
        <div className="font-Pretendard text-[16px] text-gray-900 font-medium leading-[24px] capitalize ">
          이름
        </div>
        <div
          className={`relative top-[12px] flex w-[343px] h-[48px] px-[16px] py-[12px] gap-[8px] rounded-[10px] border-solid border-[1px] border-gray-300 bg-white`}
        >
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
      <div className="absolute top-[340px] w-[343px] h-[84px]">
        <div className="font-Pretendard text-[16px] text-gray-900 font-medium leading-[24px] capitalize ">
          이메일
        </div>
        <div
          className={`relative top-[12px] flex w-[343px] h-[48px] px-[16px] py-[12px] gap-[8px] rounded-[10px] border-solid border-[1px] border-gray-300 bg-white`}
        >
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
      <div className="absolute top-[456px] w-[343px] h-[84px]">
        <div className="font-Pretendard text-[16px] text-gray-900 font-medium leading-[24px] capitalize ">
          비밀번호
        </div>
        <div
          className={`relative top-[12px] flex w-[343px] h-[48px] px-[16px] py-[12px] gap-[8px] rounded-[10px] border-solid border-[1px] border-gray-300 bg-white`}
        >
          <input
            type="password"
            className="flex items-center gap-[8px] flex-[1_0_0%] opacity-[0.4] font-Pretendard text-[16px] font-normal leading-[24px] text-gray-700"
            placeholder="영문, 숫자, 특수기호 포함 8-16자입니다."
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
        <div
          className={`relative top-[20px] flex w-[343px] h-[48px] px-[16px] py-[12px] gap-[8px] rounded-[10px] border-solid border-[1px] border-gray-300 bg-white`}
        >
          <input
            type="password"
            className="flex items-center gap-[8px] flex-[1_0_0%] opacity-[0.4] font-Pretendard text-[16px] font-normal leading-[24px] text-gray-700"
            placeholder="한번 더 입력해주세요."
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
      <div className="absolute top-[646px] flex flex-col w-[343px] gap-[16px]">
        <AdminButton
          buttonSize="md"
          buttonStyle={ButtonStyle.PRIMARY}
          isDisabled={true}
        >
          다음
        </AdminButton>
      </div>
    </div>
  )
}
