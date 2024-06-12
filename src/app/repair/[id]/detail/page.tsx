'use client'

import RepairDetailOrganism from '@/components/organisms/RepairDetailOrganism'
import { useParams, useSearchParams } from 'next/navigation'

export default function RepairDetail() {
  const { id } = useParams()
  const searchParams = useSearchParams() // 쿼리 파라미터를 가져옴

  const issueId = searchParams.get('activeIssueId') // 쿼리 파라미터에서 'activeIssueId'를 가져옴
  return (
    <main className="flex flex-col items-center justify-center">
      <RepairDetailOrganism repairArticleId={id} issueId={issueId} />
    </main>
  )
}
