'use client'

import { useState } from 'react'
import Card, { CardStyle } from '@/components/atoms/Card'
import NavBar from '@/components/atoms/NavBar'
import TagBadge, { TagBadgeStyle } from '@/components/atoms/TagBadge'
import Image from 'next/image'
import Link from 'next/link'
import ManageCard from '@/components/molecules/ManageCard'

// 첫 번째 데이터 집합의 총 카드 수
const totalCardsSet1 = 12
// 두 번째 데이터 집합의 총 카드 수
const totalCardsSet2 = 10
const cardsPerPage = 3

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFilled, setIsSearchFilled] = useState(false)
  const [currentPageSet1, setCurrentPageSet1] = useState(1)
  const [currentPageSet2, setCurrentPageSet2] = useState(1)

  const handleTagBadgeClick = (tag: string) => {
    setSearchQuery(tag)
  }

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value)
    setIsSearchFilled(true)
  }

  const handleSearchInputClear = () => {
    setSearchQuery('')
    setIsSearchFilled(false)
  }

  const handleLoadMoreSet1 = () => {
    setCurrentPageSet1(currentPageSet1 + 1)
  }

  const handleLoadMoreSet2 = () => {
    setCurrentPageSet2(currentPageSet2 + 1)
  }

  const totalPagesSet1 = Math.ceil(totalCardsSet1 / cardsPerPage)
  const totalPagesSet2 = Math.ceil(totalCardsSet2 / cardsPerPage)

  const visibleCardsSet1 = Array.from(
    { length: currentPageSet1 * cardsPerPage },
    (_, i) => i + 1,
  ).slice(0, totalCardsSet1)

  const visibleCardsSet2 = Array.from(
    { length: currentPageSet2 * cardsPerPage },
    (_, i) => i + 1,
  ).slice(0, totalCardsSet2)

  return (
    <div className="flex flex-col h-full min-h-[812px] w-full items-center bg-gray-100">
      <NavBar isTextChange={false} isTitle>
        검색
      </NavBar>
      <div className="relative w-[345px] h-[90px]">
        <div className="w-[345px] h-[90px]">
          <div className="inline-flex items-start gap-[8px] absolute top-[66px] left-[82px]">
            <TagBadge
              tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}
              onClickFunction={() => handleTagBadgeClick('설치')}
            >
              설치
            </TagBadge>
            <TagBadge
              tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}
              onClickFunction={() => handleTagBadgeClick('보수')}
            >
              보수
            </TagBadge>
            <TagBadge
              tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}
              onClickFunction={() => handleTagBadgeClick('교체')}
            >
              교체
            </TagBadge>
            <TagBadge
              tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}
              onClickFunction={() => handleTagBadgeClick('공사')}
            >
              공사
            </TagBadge>
          </div>
          <div className="absolute top-[64px] font-Pretendard text-[16px] font-semibold leading-[24px] capitalize">
            추천검색어
          </div>
          <div className="absolute w-[343px] h-[50px]">
            <div className="relative w-[345px] h-[52px] border-b border-gray-800">
              <div className="absolute w-[185px] h-[26px] top-[13px] left-[6px]">
                <input
                  className="left-[30px] font-Pretendard font-normal text-gray-400 bg-gray-100 text-[20px] leading-[26px] absolute"
                  placeholder="무엇을 찾으시나요?"
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                <Image
                  src="/icons/search.svg"
                  width={22}
                  height={22}
                  alt="search"
                />
                {isSearchFilled && (
                  <Image
                    onClick={handleSearchInputClear}
                    src="/icons/close_circle.svg"
                    width={24}
                    height={24}
                    alt="close_circle"
                    className="relative left-[308px] bottom-[18px] w-[20px] h-[20px] cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[345px]">
        <Link
          type="button"
          className="block flex mt-[34px] gap-[8px]"
          href={{ pathname: '/repair' }}
        >
          <div className="relative font-Pretendard font-bold text-gray-900 text-[18px] leading-[24px] whitespace-nowrap">
            건물 유지보수 사안
          </div>
          <div className="inline-flex h-[24px] px-[12px] py-[4px] flex-col justify-center items-center rounded-[100px] bg-blue-800">
            <div className="font-Pretendard text-[14px] font-bold leading-[24px] text-blue-50">
              12
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center mt-[20px] gap-[16px]">
        {visibleCardsSet1.map((_, index) => (
          <Card
            key={index}
            cardStyle={CardStyle.ALL}
            isSave={false}
            title={`제목 ${index + 1}`}
            state={''}
            name={''}
            view={0}
            comment={0}
          />
        ))}
        {currentPageSet1 < totalPagesSet1 && (
          <button
            className="flex w-[345px] h-[24px] justify-center gap-[4px]"
            type="button"
            onClick={handleLoadMoreSet1}
          >
            <div className="text-gray-600 text-center font-Pretendard text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
              더보기 {currentPageSet1}/{totalPagesSet1}
            </div>
            <Image
              src="/icons/arrow_down_large.svg"
              width={24}
              height={24}
              alt="arrow_down_large"
            />
          </button>
        )}
      </div>
      <div className="relative w-[345px]">
        <Link
          type="button"
          className="block flex mt-[34px] gap-[8px]"
          href={{ pathname: '/repair' }}
        >
          <div className="relative font-Pretendard font-bold text-gray-900 text-[18px] leading-[24px] whitespace-nowrap">
            법정 시설물 유지관리 점검 현황
          </div>
          <div className="inline-flex h-[24px] px-[12px] py-[4px] flex-col justify-center items-center rounded-[100px] bg-blue-800">
            <div className="font-Pretendard text-[14px] font-bold leading-[24px] text-blue-50">
              10
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center mt-[20px] gap-[16px]">
        {visibleCardsSet2.map((item, index) => (
          <ManageCard
            key={index}
            id={index}
            period={item.period}
            periodCount={index}
            title={`제목 ${index + 1}`}
            allSchedule={0}
            completedSchedule={0}
            issueId={null}
          />
        ))}
        {currentPageSet2 < totalPagesSet2 && (
          <button
            className="flex w-[345px] h-[24px] justify-center gap-[4px]"
            type="button"
            onClick={handleLoadMoreSet2}
          >
            <div className="text-gray-600 text-center font-Pretendard text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
              더보기 {currentPageSet2}/{totalPagesSet2}
            </div>
            <Image
              src="/icons/arrow_down_large.svg"
              width={24}
              height={24}
              alt="arrow_down_large"
            />
          </button>
        )}
      </div>
    </div>
  )
}
