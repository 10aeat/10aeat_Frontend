'use client'

import Details from '@/components/atoms/Details'
import InspectionPlan from '@/components/atoms/InspectionPlan'
import NavBar from '@/components/atoms/NavBar'
import Note from '@/components/atoms/Note'
import TagBadge, { TagBadgeStyle } from '@/components/atoms/TagBadge'
import TrackingProgress2 from '@/components/atoms/TrackingProcess2'

export default function ManageDetail() {
  const data = {
    period: 'YEAR',
    peroidCount: 1,
    title: '승강기 자체점검',
    issue: true,
    progress: 'INPROGRESS',
    lagelBasis: '승강기 안전 관리법 제32조', // 법적근거
    target: '총 10대', // 사용내역/검사 대상
    manager: '승강기 점검 업체', // 점검담당
    note: '비고비고',
    manageSchedule: [
      {
        manageScheduleId: 1,
        isComplete: false,
        scheduleStart: '2024-10-08T11:44:30.327959',
        scheduleEnd: '2024-10-10T11:44:30.327959',
      },
      {
        manageScheduleId: 2,
        isComplete: true,
        scheduleStart: '2024-10-08T11:44:30.327959',
        scheduleEnd: '2024-10-10T11:44:30.327959',
      },
    ],
  }
  return (
    <div className="flex flex-col w-full items-center ">
      <NavBar isTextChange isTitle={false} />
      <div className="inline-flex flex-col items-start px-4 w-full mb-[15px]">
        <div className="font-bold text-lg font-Pretendard mb-[5px] text-[24px] text-left leading-[32px] capitalize">
          {data.title}
        </div>
        <div className="inline-flex flex-col items-start gap-[8px] relative">
          <div className="flex space-x-2">
            <TagBadge tagBadgeStyle={TagBadgeStyle.TAG} progress="INPROGRESS" />
            <TagBadge tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}>
              연12회
            </TagBadge>
          </div>
        </div>
      </div>
      <div className="px-4 mt-8 w-full mb-[15px]">
        <div className="font-bold text-lg font-Pretendard mb-3">진행 현황</div>
        {/* <TrackingProgress2 totalChecks={10} completedChecks={0} status="대기" /> */}
        <TrackingProgress2
          totalChecks={10}
          completedChecks={3}
          status="진행중"
        />
        {/* <TrackingProgress2
          totalChecks={10}
          completedChecks={10}
          status="완료"
        /> */}
      </div>
      <div className="px-4 mt-8 w-full mb-[15px]">
        <div className="font-bold text-lg font-Pretendard mb-3">상세 내역</div>
        <Details />
      </div>
      <div className="px-4 mt-8 w-full mb-[15px]">
        <div className="font-bold text-lg font-Pretendard mb-3">법정 계획</div>
        <InspectionPlan
          legalBasis={data.lagelBasis}
          target={data.target}
          manager={data.manager}
        />
      </div>
      <div className="px-4 mt-8 w-full mb-[100px]">
        <div className="font-bold text-lg font-Pretendard mb-3">비고</div>
        <Note />
      </div>
    </div>
  )
}
