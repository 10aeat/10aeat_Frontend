import Image from 'next/image'
import Box, { BoxStyle } from '../atoms/Box'
import TagBadge, { TagBadgeStyle } from '../atoms/TagBadge'
import { useSaveStore } from '../store/SaveStore'

export default function AgendaContent({
  category,
  progress,
  isSave,
  title,
  content,
  updatedAt,
  managerName,
  startConstruction,
  endConstruction,
}: REPAIR_ARTICLE_DETAIL) {
  const { setIsSave } = useSaveStore()

  return (
    <Box boxStyle={BoxStyle.BOX_WHITE_CONTENT}>
      <div className="w-full flex items-center justify-between">
        <div className="flex space-x-2">
          <TagBadge tagBadgeStyle={TagBadgeStyle.TAG} progress={progress} />
          <TagBadge tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}>
            {category}
          </TagBadge>
        </div>
        <Image
          src={`${isSave ? '/icons/star_fill.svg' : '/icons/star_linear.svg'}`}
          width={28}
          height={28}
          alt="save"
          onClick={() => setIsSave(!isSave)}
          className="cursor-pointer"
        />
      </div>
      <div className="fontchange flex flex-col text-gray-900 gap-y-3 mt-5 font-Pretendard">
        <div>
          <div className="fontchange text-lg font-bold capitalize">{title}</div>
          <div className="fontchange text-gray-500 text-sm tracking-[-0.266px]">
            수정일: {updatedAt} / {managerName}
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <Image
            src="/icons/calendar_minimal.svg"
            alt="calendar"
            width={20}
            height={20}
          />
          <span className="font-bold mt-[2px]">진행기간</span>
          <span className="mt-[2px]">
            {startConstruction} - {endConstruction}
          </span>
        </div>
        <div className="capitlaize leading-6">{content}</div>
      </div>
    </Box>
  )
}
