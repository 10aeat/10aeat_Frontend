/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
import Image from 'next/image'

interface Props {
  type: string
}

// 댓글 or 진행 내용 없을 때 카드
export default function NoBox({ type }: Props) {
  const noBox = () => {
    return (
      <button className="w-[343px] h-[110px] bg-white rounded-[18px] shadow-primary">
        <div className="flex flex-col w-[206px] h-[48px] items-center gap-[4px] relative left-[68px]">
          {type === '댓글' ? (
            <>
              <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
                <Image
                  src="/icons/chat_line.svg"
                  width={20}
                  height={20}
                  alt="chat_line"
                  className="!relative w-[20px] h-[20px]"
                />
                <div className="fontchange relative w-fit mt-[-1.00px] font-Pretendard font-bold text-gray-900 text-[18px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
                  아직 댓글이 없습니다
                </div>
              </div>
              <p className="fontchange relative w-fit font-Pretendard font-normal text-gray-500 text-[14px] tracking-[-0.28px] leading-[20px] whitespace-nowrap">
                이 카드를 눌러 댓글을 남겨보세요!
              </p>
            </>
          ) : type === '진행 내용' ? (
            <>
              <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
                <Image
                  src="/icons/lines_remove.svg"
                  width={20}
                  height={20}
                  alt="lines_remove"
                  className="!relative w-[20px] h-[20px]"
                />
                <div className="relative w-fit mt-[-1.00px] font-Pretendard font-bold text-gray-900 text-[18px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
                  아직 진행 내용이 없습니다
                </div>
              </div>
              <p className="relative w-fit font-Pretendard font-normal text-gray-500 text-[14px] tracking-[-0.28px] leading-[20px] whitespace-nowrap">
                이 카드를 눌러 진행 내용을 남겨보세요!
              </p>
            </>
          ) : null}
        </div>
      </button>
    )
  }
  return <>{noBox()}</>
}
