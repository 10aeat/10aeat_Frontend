import Image from 'next/image'
import '../../styles/noBoxStyle.scss'

interface Props {
  type: string
}

export default function NoBox({ type }: Props) {
  const noBox = () => {
    return (
      <div className="no-card justify-center font-Pretendard">
        <div className="flex h-[48px] flex-col items-center gap-2">
          {type === '댓글' ? (
            <>
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/chat_line.svg"
                  width={20}
                  height={20}
                  alt="chat_line"
                  className="w-[20px] h-[20px] text-gray-900"
                />
                <div className="body1_sb"> 아직 댓글이 없습니다</div>
              </div>
              <div className="flex">
                <div className="body3_m text-gray-500">
                  이 카드를 눌러 댓글을 남겨보세요!
                </div>
              </div>
            </>
          ) : type === '진행 내용' ? (
            <>
              <div className="flex items-center gap-1">
                <Image
                  src="/icons/notification_lines_remove.svg"
                  width={20}
                  height={20}
                  alt="notification_lines_remove"
                  className="w-[20px] h-[20px] text-gray-900"
                />
                <div className="body1_sb"> 아직 진행 내용이 없습니다</div>
              </div>
              <div className="flex">
                <div className="body3_m text-gray-500">
                  이 카드를 눌러 진행 내용을 남겨보세요!
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    )
  }
  return <>{noBox()}</>
}
