import Box, { BoxStyle } from '../atoms/Box'
import ProgressBar from '../atoms/ProgressBar'
import TagBadge, { TagBadgeStyle } from '../atoms/TagBadge'

export default function ManageCard({
  id,
  title,
  period,
  periodCount,
  allSchedule,
  completedSchedule,
  issueCheck,
}: MANAGE_ARTICLE_LIST) {
  return (
    <>
      <Box
        boxStyle={BoxStyle.BOX_WHITE_CARD}
        style="flex-col gap-y-[30px] justify-end"
      >
        <div className="flex w-full gap-x-2 justify-start items-center">
          <TagBadge tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}>
            {(period == 'YEAR' && `연 ${periodCount}회`) ||
              (period == 'MONTH' && `반기 ${periodCount}회`)}
          </TagBadge>
          <span className="text-gray-900 text-lg font-bold">{title}</span>
        </div>
        <ProgressBar min={completedSchedule} max={allSchedule} />
      </Box>
    </>
  )
}
