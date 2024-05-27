'use client'

import Logo from '@/components/atoms/Logo'
import TagBadge, { TagBadgeStyle } from '@/components/atoms/TagBadge'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center bg-gray-100">
      <div className="relative w-[375px] h-[50px]">
        <div className="flex w-[97px] h-[28.462px] justify-center items-center gap-[2.205px] ">
          <div className="relative flex w-[97px] h-[28px] !top-[11px] left-[13px] justify-center items-center gap-[2.205px] ">
            <Logo />
          </div>
          <Image
            src="/icons/bell.svg"
            width={24}
            height={24}
            alt="bell"
            className="!absolute !w-[24px] !h-[24px] !top-[13px] !left-[335px]"
          />
        </div>
      </div>
      <div className="relative w-[345px] h-[90px]">
        <div className="fixed w-[345px] h-[90px]">
          <div className="inline-flex items-start gap-[8px] absolute top-[66px] left-[82px]">
            <TagBadge tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}>설치</TagBadge>
            <TagBadge tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}>보수</TagBadge>
            <TagBadge tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}>교체</TagBadge>
            <TagBadge tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}>공사</TagBadge>
          </div>
          <div className="absolute top-[64px] font-Pretendard text-[16px] font-semibold leading-[24px] capitalize">
            추천검색어
          </div>
          <div className="absolute w-[343px] h-[50px]">
            <div className="relative w-[345px] h-[52px]">
              <div className="absolute w-[185px] h-[26px] top-[13px] left-[6px]">
                <input
                  className="left-[30px] font-Pretendard font-normal text-gray-400 bg-gray-100 text-[20px] leading-[26px] absolute "
                  placeholder="무엇을 찾으시나요?"
                  type="text"
                />
                <Image
                  src="/icons/search.svg"
                  width={22}
                  height={22}
                  alt="search"
                />
              </div>
              <div className="absolute w-[345px] h-[52px] border-b border-gray-800"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
