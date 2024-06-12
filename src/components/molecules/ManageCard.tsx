import Image from 'next/image'
import Box, { BoxStyle } from '../atoms/Box'
import ProgressBar from '../atoms/ProgressBar'
import TagBadge, { TagBadgeStyle } from '../atoms/TagBadge'

const periodLabels: { [key in Period]: string } = {
  WEEK: '1주',
  MONTH: '1개월',
  HALF_YEAR: '6개월',
  YEAR: '연',
  TWO_YEAR: '2년',
  THREE_YEAR: '3년',
  FOUR_YEAR: '4년',
  FIVE_YEAR: '5년',
  ETC: '기타',
}

export default function ManageCard({
  id,
  title,
  period,
  periodCount,
  allSchedule,
  completedSchedule,
  issueId,
}: MANAGE_ARTICLE_LIST_CARD) {
  const periodText = (period: Period, count: number): string => {
    const baseText = periodLabels[period] || '기간 정보 없음'
    return period === 'ETC' ? baseText : `${baseText} ${count}회`
  }

  return (
    <Box
      boxStyle={BoxStyle.BOX_WHITE_CARD}
      style="flex-col gap-y-[30px] justify-end"
      issueId={issueId}
    >
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-x-2 items-center">
          <TagBadge tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}>
            {periodText(period, periodCount)}
          </TagBadge>
          <span className="text-gray-900 text-lg font-bold">{title}</span>
        </div>
        <Image
          src="/icons/arrow_right_large.svg"
          alt="arrrow"
          width={24}
          height={24}
        />
      </div>
      <ProgressBar min={completedSchedule} max={allSchedule} />
    </Box>
  )
}
