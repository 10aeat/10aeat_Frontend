'use client'

import InspectionPlan from '@/components/atoms/InspectionPlan'
import TrackingProgress2 from '@/components/atoms/TrackingProcess2'

export default function ManageDetail() {
  return (
    <div className="flex flex-col w-full items-center">
      <TrackingProgress2 totalChecks={10} completedChecks={0} status="대기" />
      <TrackingProgress2 totalChecks={12} completedChecks={3} status="진행중" />
      <TrackingProgress2 totalChecks={1} completedChecks={1} status="완료" />
      <InspectionPlan
        legalBasis="소방시설 설치 및 관리에 관한 법률 제22조"
        target="전층 소방시설"
        manager="소방안전관리자 박소방"
      />
    </div>
  )
}
