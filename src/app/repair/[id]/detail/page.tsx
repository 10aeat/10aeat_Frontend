'use client'

import RepairDetailOrganism from '@/components/organisms/RepairDetailOrganism'
import { useParams } from 'next/navigation'

export default function RepairDetail() {
  const { id } = useParams()

  return (
    <main className="flex flex-col items-center justify-center">
      <RepairDetailOrganism repairArticleId={id} />
    </main>
  )
}
