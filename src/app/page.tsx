'use client'

import BottomNav from '@/components/atoms/BottomNav'
import Logo from '@/components/atoms/Logo'
import ManageStatus from '@/components/atoms/ManageStatus'
import MonthlyPlan from '@/components/atoms/MonthlyPlan'
import RepairStatus from '@/components/atoms/RepairStatus'
import TagBadge, { TagBadgeStyle } from '@/components/atoms/TagBadge'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)
  const handleSelectMonth = (month: number) => {
    setSelectedMonth(month)
  }

  // GET /repair/articles/summary 유지보수 사안 요약
  const repairStatus = {
    all: 18,
    inprogressAndpending: 2,
    complete: 2,
  }
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
            <div className="relative w-[345px] h-[52px] border-b border-gray-800">
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
              {/* <div className="absolute w-[345px] h-[52px] border-b border-gray-800"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="relative  w-[345px]  h-[140px]">
        <div className=" mt-[34px]">
          <div className="absolute  font-Pretendard font-bold text-gray-900 text-[18px] leading-[24px] whitespace-nowrap">
            2024 건물 유지보수 사안
          </div>
          <Image
            src="/icons/arrow_right_large.svg"
            width={24}
            height={24}
            alt="arrow_right_large"
            className="!absolute !w-[24px] !h-[24px] !left-[187px]"
          />
        </div>
        <RepairStatus
          all={repairStatus.all}
          inprogressAndpending={repairStatus.inprogressAndpending}
          complete={repairStatus.complete}
        />
      </div>
      <div className="mt-[32px] w-[345px]  h-[140px]">
        <div className="relative mt-[32px]">
          <div className="absolute  font-Pretendard font-bold text-gray-900 text-[18px] leading-[24px] whitespace-nowrap">
            2024 법정 시설물 유지관리 점검 현황
          </div>
        </div>
        <ManageStatus />
        <div className="mt-[16px]" />
        <MonthlyPlan onSelectMonth={handleSelectMonth} />
      </div>
      <BottomNav />
    </div>
  )
}
