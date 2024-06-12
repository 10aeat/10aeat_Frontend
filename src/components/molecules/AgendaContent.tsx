import Image from 'next/image'
import { useState } from 'react'
import Box, { BoxStyle } from '../atoms/Box'
import TagBadge, { TagBadgeStyle } from '../atoms/TagBadge'
import { useAccessToken } from '../store/AccessTokenStore'

const categoryLabel: { [key in Category]: string } = {
  INSTALL: '설치',
  REPAIR: '보수',
  REPLACE: '교체',
}

export default function AgendaContent({
  articleId,
  category,
  progress,
  isSave,
  title,
  content,
  imageUrls,
  createdAt,
  updatedAt,
  managerName,
  startConstruction,
  endConstruction,
}: REPAIR_ARTICLE_DETAIL) {
  const [stausIsSave, setIsSave] = useState(isSave)

  const formatDate = (date: number[]) => {
    const [year, month, day] = date
    return `${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}`
  }

  const dateLabel = updatedAt === createdAt ? '게시일' : '수정일'
  const formattedUpdatedAt = formatDate(updatedAt)
  const formattedCreatedAt = formatDate(createdAt)
  const formattedStartCon = formatDate(startConstruction)
  const formattedEndCon = formatDate(endConstruction)

  const categoryText = categoryLabel[category as keyof typeof categoryLabel]
  const { accessToken } = useAccessToken()

  const handleSave = async () => {
    try {
      const method = stausIsSave ? 'DELETE' : 'POST'
      const response = await fetch(
        `http://api.10aeat.com/repair/articles/save/${articleId}`,
        {
          method,
          headers: {
            AccessToken: accessToken,
          },
        },
      )

      if (response.ok) {
        setIsSave(!stausIsSave)
      } else {
        console.error('Failed to save or delete the article')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box boxStyle={BoxStyle.BOX_WHITE_CONTENT}>
      <div className="w-full flex items-center justify-between">
        <div className="flex space-x-2">
          <TagBadge tagBadgeStyle={TagBadgeStyle.TAG} progress={progress} />
          <TagBadge tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}>
            {categoryText}
          </TagBadge>
        </div>
        <Image
          src={`${stausIsSave ? '/icons/star_fill.svg' : '/icons/star_linear.svg'}`}
          width={28}
          height={28}
          alt="save"
          onClick={handleSave}
          className="cursor-pointer"
        />
      </div>
      <div className="fontchange flex flex-col text-gray-900 gap-y-3 mt-5 font-Pretendard">
        <div>
          <div className="fontchange text-lg font-bold capitalize">{title}</div>
          <div className="fontchange text-gray-500 text-sm tracking-[-0.266px]">
            {dateLabel}&nbsp;:&nbsp;
            {dateLabel === '게시일'
              ? formattedCreatedAt
              : formattedUpdatedAt}{' '}
            &nbsp;&nbsp;/&nbsp;&nbsp;
            {managerName}
          </div>
        </div>
        {/* <div className="flex items-center gap-x-2">
          <Image
            src="/icons/calendar_minimal.svg"
            alt="calendar"
            width={20}
            height={20}
          />
          <span className="font-bold mt-[2px] whitespace-nowrap">진행기간</span>
          <span className="mt-[2px]">
            {formattedStartCon}&nbsp;-&nbsp;{formattedEndCon}
          </span>
        </div> */}
        <div className="capitalize leading-6">
          {content}
          <div className="flex flex-wrap gap-4 mt-4 relative ">
            {imageUrls.map((url, index) => (
              <div key={url} className="w-full aspect-[5/3] overflow-hidden">
                <Image
                  src={url}
                  alt={`img-${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Box>
  )
}
