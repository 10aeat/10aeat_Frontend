'use client'

import TrackingProgress2 from '@/components/atoms/TrackingProcess2'

export default function ManageDetail() {
  return (
    <div className="flex flex-col w-full items-center">
      <TrackingProgress2 totalChecks={10} completedChecks={0} status="대기" />
      <TrackingProgress2 totalChecks={12} completedChecks={3} status="진행중" />
      <TrackingProgress2 totalChecks={1} completedChecks={1} status="완료" />
    </div>
  )
}
