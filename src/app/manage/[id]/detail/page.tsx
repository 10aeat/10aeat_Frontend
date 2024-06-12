'use client'

import Details from '@/components/atoms/Details'
import InspectionPlan from '@/components/atoms/InspectionPlan'
import NavBar from '@/components/atoms/NavBar'
import Note from '@/components/atoms/Note'
import TagBadge, { TagBadgeStyle } from '@/components/atoms/TagBadge'
import TrackingProgress2 from '@/components/atoms/TrackingProcess2'
import { useAccessToken } from '@/components/store/AccessTokenStore'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ManageDetail() {
  const { id } = useParams()
  const { accessToken, setAccessToken } = useAccessToken()

  const [manageArticle, setManageArticle] = useState<MANAGE_LIST_ARTICLE>({
    period: '',
    periodCount: 0,
    title: '',
    issueId: 0,
    progress: '',
    legalBasis: '',
    target: '',
    responsibility: '',
    note: '',
    manageSchedule: [],
  })

  const periodMap: { [key: string]: string } = {
    WEEK: '주간',
    MONTH: '월간',
    HALF_YEAR: '반기',
    YEAR: '연',
    TWO_YEAR: '2년',
    THREE_YEAR: '3년',
    FOUR_YEAR: '4년',
    FIVE_YEAR: '5년',
    ETC: '기타',
  }

  useEffect(() => {
    const getManageArticleData = async () => {
      try {
        const getManageArticleResponse = await fetch(
          `http://api.10aeat.com/manage/articles/${id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )
        const manageArticleData = await getManageArticleResponse.json()
        setManageArticle(manageArticleData.data)
        console.log(manageArticleData)
      } catch (error) {
        console.error(error)
      }
    }
    getManageArticleData()
  }, [accessToken, id])

  return (
    <div className="flex flex-col w-full items-center justify-center bg-gray-100">
      <NavBar isTextChange isTitle={false} />
      <div className="inline-flex flex-col items-start px-4 w-[375px] mb-[15px]">
        <div className="justify-center font-bold text-lg font-Pretendard mb-[5px] text-[24px] text-left leading-[32px] capitalize">
          {manageArticle?.title}
        </div>
        <div className="inline-flex flex-col items-start gap-[8px] relative">
          <div className="flex space-x-2">
            <TagBadge
              tagBadgeStyle={TagBadgeStyle.TAG}
              progress={manageArticle?.progress}
            />
            <TagBadge tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}>
              {periodMap[manageArticle?.period]} {manageArticle?.periodCount}회
            </TagBadge>
          </div>
        </div>
      </div>
      <div className="justify-center px-4 mt-8 w-[375px] mb-[15px]">
        <div className="font-bold text-lg font-Pretendard mb-3">진행 현황</div>
        {/* <TrackingProgress2 totalChecks={10} completedChecks={0} status="대기" /> */}
        <TrackingProgress2
          totalChecks={2}
          completedChecks={0}
          status="진행중"
        />
        {/* <TrackingProgress2
          totalChecks={10}
          completedChecks={10}
          status="완료"
        /> */}
      </div>
      <div className="px-4 mt-8 w-[375px] mb-[15px]">
        <div className="font-bold text-lg font-Pretendard mb-3">상세 내역</div>
        <Details manageSchedule={manageArticle?.manageSchedule} />
      </div>
      <div className="px-4 mt-8 w-[375px] mb-[15px]">
        <div className="font-bold text-lg font-Pretendard mb-3">법정 계획</div>
        <InspectionPlan
          legalBasis={manageArticle?.legalBasis}
          target={manageArticle?.target}
          manager={manageArticle?.responsibility}
        />
      </div>
      <div className="px-4 mt-8 w-[375px] mb-[100px]">
        <div className="font-bold text-lg font-Pretendard mb-3">비고</div>
        <Note />
      </div>
    </div>
  )
}
