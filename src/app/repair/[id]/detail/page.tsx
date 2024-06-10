import RepairDetailOrganism from '@/components/organisms/RepairDetailOrganism'
import { useParams } from 'next/navigation'

export default function RepairDetail() {
  return (
    <main className="flex flex-col items-center justify-center">
      <RepairDetailOrganism />
    </main>
  )
}
