'use client'

import BottomNav from '@/components/atoms/BottomNav'
import Logo from '@/components/atoms/Logo'
import ManageStatus from '@/components/atoms/ManageStatus'
import MonthlyPlan from '@/components/atoms/MonthlyPlan'
import RepairStatus from '@/components/atoms/RepairStatus'
import TagBadge, { TagBadgeStyle } from '@/components/atoms/TagBadge'
import { useAccessToken } from '@/components/store/AccessTokenStore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const { accessToken, setAccessToken } = useAccessToken()

  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  // 유지보수 게시글 요약 조회
  const [repairSummary, setRepairSummary] = useState<REPAIR_SUMMARY>({
    complete: 0,
    completeRedDot: false,
    inProgressAndPending: 0,
    inProgressAndPendingRedDot: false,
    total: 0,
  })

  // 법정관리 게시글 요약 조회
  const [manageSummary, setManageSummary] = useState<MANAGE_SUMMARY>({
    complete: 0,
    inprogress: 0,
    pending: 0,
    hasIssue: [],
  })

  // 법정관리 월별 요약 조회
  const [monthlySummary, setMonthlySummary] = useState([])

  const handleSelectMonth = (month: number) => {
    setSelectedMonth(month)
  }

  const handleTagBadgeClick = (tag: string) => {
    setSearchQuery(tag)
  }

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    const getRepairSummaryData = async () => {
      try {
        const getRepairSummaryResponse = await fetch(
          'http://10aeat.com/repair/articles/summary',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )
        const repairSummaryData = await getRepairSummaryResponse.json()
        setRepairSummary(repairSummaryData.data)
      } catch (error) {
        console.error(error)
      }
    }
    const getManageSummaryData = async () => {
      try {
        const getRepairSummaryResponse = await fetch(
          'http://10aeat.com/manage/articles/summary',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )
        const manageSummaryData = await getRepairSummaryResponse.json()
        setManageSummary(manageSummaryData.data)
      } catch (error) {
        console.error(error)
      }
    }
    const getMonthlySummaryData = async () => {
      try {
        const getMonthlySummaryResponse = await fetch(
          'http://10aeat.com/manage//monthly/summary',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )
        const monthlySummaryData = await getMonthlySummaryResponse.json()
        setMonthlySummary(monthlySummaryData.data)
      } catch (error) {
        console.error(error)
      }
    }

    getRepairSummaryData()
    getManageSummaryData()
    getMonthlySummaryData()
  }, [accessToken])

  return (
    <div className="flex flex-col h-[875px] w-full items-center bg-gray-100 ">
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
            onClick={() => {
              router.push('/alert')
            }}
            className="!absolute !w-[24px] !h-[24px] !top-[13px] !left-[335px]"
          />
        </div>
      </div>
      <div className="relative w-[345px] h-[90px]">
        <div className=" w-[345px] h-[90px]">
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
                  className="left-[30px] font-Pretendard font-normal text-gray-400 bg-gray-100 text-[20px] leading-[26px] absolute "
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
              </div>
              {/* <div className="absolute w-[345px] h-[52px] border-b border-gray-800"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="relative  w-[345px]  h-[140px]">
        <Link
          type="button"
          className="block mt-[34px]"
          // onClick={() => router.push({ pathname: '/repair' })}
          href={{
            pathname: '/repair',
            query: { data: JSON.stringify(repairSummary) },
          }}
        >
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
        </Link>
        <RepairStatus
          total={repairSummary?.total}
          inProgressAndPending={repairSummary?.inProgressAndPending}
          complete={repairSummary?.complete}
          completeRedDot={repairSummary?.completeRedDot}
          inProgressAndPendingRedDot={repairSummary?.inProgressAndPendingRedDot}
        />
      </div>
      <div className="mt-[32px] w-[345px]  h-[140px]">
        <div className="relative mt-[32px]">
          <div className="absolute  font-Pretendard font-bold text-gray-900 text-[18px] leading-[24px] whitespace-nowrap">
            2024 법정 시설물 유지관리 점검 현황
          </div>
        </div>
        <ManageStatus manageSummary={manageSummary} />
        <div className="mt-[16px]" />
        <MonthlyPlan
          onSelectMonth={handleSelectMonth}
          monthlySummary={monthlySummary}
        />
      </div>
      <BottomNav isHome />
    </div>
  )
}
