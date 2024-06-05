/* eslint-disable jsx-a11y/control-has-associated-label */
import Image from 'next/image'
import IconPhone from '@/components/icons/phone'
import IconMessages from '@/components/icons/message'
import IconProfile from '@/components/icons/profile'

export default function ManagerProfile(props: any) {
  const { clickModal } = props

  return (
    <div className="transition-transform duration-300  justify-center w-[375px] h-[736px] pt-[24px] shrink-0 rounded-t-[24px] bg-white font-Pretendard">
      <div className="inline-flex items-start gap-[264px] w-[375px] h-[24px] px-[20px] shrink-0 bg-white">
        <div className="w-[47px] h-[24px] align-text-top text-gray-900 text-[18px] leading-6 font-bold">
          담당자
        </div>
        <button type="button" onClick={clickModal}>
          <Image src="/icons/close.svg" width={24} height={24} alt="close" />
        </button>
      </div>
      <div className="flex mx-[auto] mt-[66px] w-[72px] h-[72px] rounded-full shrink-0 shadow-profile">
        <IconProfile />
      </div>
      <div className="flex justify-center items-center gap-[11px] mt-[24px] text-gray-900 text-2xl">
        <div className="font-medium">관리자</div>
        <div className="w-[1px] h-[24px] bg-[#BCBCBC]" />
        <div className="font-bold">김주은</div>
      </div>
      <div className="flex mt-[8px] justify-center  text-[18px] leading-[24px] font-medium">
        점심시간 13:00 ~ 14:00
      </div>
      <div className="grid mt-[24px] mx-[auto] justify-center w-[311px] h-[222px] shrink-0 rounded-[24px] gap-[8px] px-[32px] py-[24px] bg-gray-100 shadow-primary text-base ">
        <div className="flex gap-[8px]">
          <div className="font-bold">소속</div>
          <div className="font-medium">비즈플라자 관리업체</div>
        </div>
        <div>
          <div className="font-bold">관리실 위치</div>
          <div className="font-medium">서울특별시 구로구 디지털로 300</div>
          <div className="font-medium">지밸리 비즈 플라자 1층 관리사무실</div>
        </div>
        <div className="flex gap-[8px]">
          <div className="font-bold">E-mail</div>
          <div className="font-medium">master@officener.com</div>
          <button
            type="button"
            className="text-[14px] font-normal text-[#216FD6]"
          >
            복사
          </button>
        </div>
        <div className="flex gap-[8px]">
          <div className="font-bold">전화번호</div>
          <div className="font-medium">010 . 0234 . 5678</div>
          <button
            type="button"
            className="text-[14px] font-normal text-[#216FD6]"
          >
            복사
          </button>
        </div>
      </div>
      <div className="flex pt-[48px] justify-center gap-[10px] text-base font-medium">
        <button
          type="button"
          className="flex items-center justify-center gap-[4px] w-[166px] h-[52px] rounded-[16px] shrink-0 bg-white border border-blue-500 text-blue-700"
        >
          <IconMessages color="#1D4ED8" width="20" height="20" /> 메일보내기
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-[4px] w-[166px] h-[52px] rounded-[16px] shrink-0 bg-blue-700 text-white"
        >
          <div color="#FFFFFF" className="w-[20px] h-[20px]" />
          전화걸기
        </button>
      </div>
    </div>
  )
}
