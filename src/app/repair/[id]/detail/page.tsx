import RepairDetailOrganism from '@/components/organisms/RepairDetailOrganism'

export default function RepairDetail({ params }: { params: { id: number } }) {
  const { id: articleId } = params

  return (
    <main className="flex flex-col items-center justify-center">
      <RepairDetailOrganism repairArticleId={articleId} />
    </main>
  )
}
