import Image from 'next/image'

interface Props {
  isReply?: boolean
  reply?: string
  date?: string
}

export default function Alert({ isReply, reply, date }: Props) {
  const title = isReply
    ? '내 댓글에 답글이 달렸어요.'
    : '저장한 글에 댓글이 달렸어요'
  return (
    <div className="flex w-[343px] py-[18px] items-start gap-[16px]">
      <Image
        src={isReply ? `/icons/group_reply.svg` : `/icons/group_star.svg`}
        width={46}
        height={46}
        alt="image"
      />
      <div className="flex flex-col items-start gap-[2px]">
        <div className="flex flex-col items-start">
          <div className="font-Pretendard text-gray-900 font-medium text-[16px] leading-[24px] capitalize">
            [파이프 공사...] {title}
          </div>
          <div className="font-Pretendard text-gray-700 font-normal text-[16px] leading-[24px] capitalize">
            감사합니다🙇‍♀️
          </div>
        </div>
        <div className="font-Pretendard text-gray-600 font-normal text-[14px] leading-[20px] capitalize">
          1초 전
        </div>
      </div>
    </div>
  )
}
