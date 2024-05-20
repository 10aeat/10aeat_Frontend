import Image from 'next/image'

export enum TooltipStyle {
  COUNT = 'COUNT',
  TEXT_CHANGE = 'TEXT_CHANGE',
}

interface Props {
  tooltipStyle: TooltipStyle
  count?: number
}

export default function Tooltip({ tooltipStyle, count }: Props) {
  const selectTooltip = () => {
    switch (tooltipStyle) {
      case TooltipStyle.COUNT:
        return (
          <div className="inline-flex flex-col items-center">
            <Image src="/icons/polygon3.svg" width={8} height={6} alt="tip" />
            <div className="flex-1 h-[24px] min-w-[38px] px-[4px] items-center justify-center gap-[8px] rounded-[4px] bg-gray-600 font-Pretendard text-sm text-white">
              {count}회
            </div>
          </div>
        )
      case TooltipStyle.TEXT_CHANGE:
        return (
          <div className="inline-flex flex-col items-center">
            <div className="w-full flex justify-end ">
              <Image
                src="/icons/arrow.svg"
                width={16}
                height={8}
                alt="tip"
                className="mr-[20px] shadow-secondary z-10"
              />
            </div>
            <div className="shadow-secondary flex-col shrink-0 h-[146px] w-[304px] px-[4px] items-start justify-center gap-[8px] rounded-[18px] bg-white font-Pretendard">
              <div className="flex-col w-[256px] py-[20px] pl-[20px]">
                <p className="text-base font-semibold leading-6">
                  글자 크기 설정
                </p>
                <span className="text-sm">
                  보기 편한 글자 크기로 변경해보세요!
                </span>
              </div>
              <div className="flex justify-between items-center w-full px-[20px]">
                {/*ButtonStore 만들어지면 변경해야함. 그 후, onClick에 폰트 변경 로직 넣기 */}
                <button
                  type="button"
                  className="flex items-center justify-center w-[80px] h-[40px] p-[10px] gap-[2px] rounded-[8px] bg-gray-300 text-gray-700 text-base"
                >
                  기본
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center w-[80px] h-[40px] p-[10px] gap-[2px] rounded-[8px] bg-gray-100 text-gray-600 text-lg"
                >
                  크게
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center w-[80px] h-[40px] p-[10px] gap-[2px] rounded-[8px] bg-gray-100 text-gray-600 text-xl"
                >
                  더크게
                </button>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }
  return <>{selectTooltip()}</>
}
