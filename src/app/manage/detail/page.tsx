'use client'

import InspectionPlan from '@/components/atoms/InspectionPlan'
import NavBar from '@/components/atoms/NavBar'
import Note from '@/components/atoms/Note'
import TagBadge, { TagBadgeStyle } from '@/components/atoms/TagBadge'
import TrackingProgress2 from '@/components/atoms/TrackingProcess2'

export default function ManageDetail() {
  return (
    <div className="flex flex-col w-full items-center ">
      <NavBar isTextChange={true} isTitle={false} />
      <div className="inline-flex flex-col items-start px-4 w-full mb-[15px]">
        <div className="font-bold text-lg font-Pretendard mb-[5px] text-[24px] text-left leading-[32px] capitalize">
          승강기 자체점검
        </div>
        <div className="inline-flex flex-col items-start gap-[8px] relative ">
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
      </div>
      <div className="px-4 mt-8 w-full mb-[15px]">
        <div className="font-bold text-lg font-Pretendard mb-3">비고</div>
        <InspectionPlan
          legalBasis="소방시설 설치 및 관리에 관한 법률 제22조"
          target="전층 소방시설"
          manager="소방안전관리자 박소방"
        />
      </div>
      <div className="px-4 mt-8 w-full mb-[100px]">
        <div className="font-bold text-lg font-Pretendard mb-3">법정 계획</div>
        <Note />
      </div>
    </div>
  )
}
