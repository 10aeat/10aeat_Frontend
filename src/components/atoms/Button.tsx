/* eslint-disable react/jsx-no-useless-fragment */
import Image from 'next/image'

export enum ButtonStyle {
  TEXT_CHANGE = 'TEXT_CHANGE',
  BASE = 'BASE',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
  BASE_SELECT = 'BASE_SELECT',
  LARGE_SELECT = 'LARGE_SELECT',
  XLARGE_SELECT = 'XLARGE_SELECT',
  READ_MORE = 'READ_MORE',
  FILTER = 'FILTER',
  MONTHLY_NONE = 'MONTHLY_NONE',
  MONTHLY = 'MONTHLY',
  MONTHLY_SELECT = 'MONTHLY_SELECT',
  HUG = 'HUG',
  HUG_BLUE = 'HUG_BLUE',
  PLUS_BUTTON = 'PLUS_BUTTON',
}

interface Props {
  buttonStyle: ButtonStyle
  style?: string
  isSelect?: boolean
  text?: string
  total?: number
  children?: React.ReactNode
  onClickFunction?: () => Promise<void> | void
}

export default function Button({
  buttonStyle,
  style,
  isSelect,
  text,
  total,
  onClickFunction,
  children,
}: Props) {
  const selectButton = () => {
    switch (buttonStyle) {
      case ButtonStyle.TEXT_CHANGE:
        return (
          <button
            type="button"
            className="flex justify-center items-center w-[65px] h-6 p-2 gap-2 rounded-[100px] bg-gray-200 shrink-0 font-Pretendard font-medium text-sm text-gray-700 capitalize cursor-pointer"
            onClick={onClickFunction}
          >
            {children}
          </button>
        )
      case ButtonStyle.BASE:
        return (
          <button
            type="button"
            className={`flex w-20 h-10 p-2.5 justify-center items-center gap-0.5 rounded-lg text-center text-base font-medium font-Pretendard ${style}`}
            onClick={onClickFunction}
          >
            기본
          </button>
        )
      case ButtonStyle.LARGE:
        return (
          <button
            type="button"
            className={`flex w-20 h-10 p-2.5 justify-center items-center gap-0.5 rounded-lg text-center text-lg font-medium font-Pretendard ${style}`}
            onClick={onClickFunction}
          >
            크게
          </button>
        )
      case ButtonStyle.XLARGE:
        return (
          <button
            type="button"
            className={`flex w-20 h-10 p-2.5 justify-center items-center gap-0.5 rounded-lg text-center text-xl font-medium font-Pretendard ${style}`}
            onClick={onClickFunction}
          >
            더크게
          </button>
        )

      case ButtonStyle.READ_MORE:
        return (
          <button
            type="button"
            className="flex w-[88px] h-[24px] justify-between items-center text-gray-600 text-center text-sm font-normal font-Pretendard"
            onClick={onClickFunction}
          >
            자세히보기
            <Image
              src="/icons/arrow_right_small.svg"
              width={24}
              height={24}
              alt="arrow_right_small"
            />
          </button>
        )
      case ButtonStyle.FILTER:
        return (
          <button
            type="button"
            className={
              isSelect
                ? 'flex w-[105px] h-[86px] px-[14px] py-[16px] justify-center flex-col items-center gap-[2px] rounded-[18px] bg-blue-900 text-white text-center font-Pretendard'
                : 'flex w-[105px] h-[86px] px-[14px] py-[16px] justify-center flex-col items-center gap-[2px] rounded-[18px] border bg-gray-50 text-gray-900 border-gray-300 text-center font-Pretendard'
            }
            onClick={onClickFunction}
          >
            <span className="text-base font-medium font-Pretendard">
              {text}
            </span>
            <span className="text-xl font-bold font-Pretendard">{total}개</span>
          </button>
        )
      case ButtonStyle.MONTHLY_NONE:
        return (
          <button
            type="button"
            className="flex w-[45px] h-[40px] p-[8px] justify-center flex-col items-center gap-[8px] shrink-0 rounded-[6px] bg-gray-200 text-gray-400 text-center text-base font-normal font-Pretendard"
            onClick={onClickFunction}
          >
            {children}
          </button>
        )
      case ButtonStyle.MONTHLY:
        return (
          <button
            type="button"
            className={`flex w-[45px] h-[40px] justify-center flex-col items-center shrink-0 rounded-[6px] border bg-white ${isSelect ? 'border-blue-600 text-blue-600' : 'border-gray-400 text-gray-700'} text-center text-base font-normal font-Pretendard`}
            onClick={onClickFunction}
          >
            {children}
          </button>
        )
      case ButtonStyle.HUG:
        return (
          <button
            type="button"
            onClick={onClickFunction}
            className="inline-flex items-start relative"
          >
            <div
              className={`inline-flex items-center gap-[4px] flex-[0_0_auto] px-[20px] py-[12px] overflow-hidden rounded-[16px] justify-center relative ${isSelect === true ? 'border border-solid border-blue-500 bg-blue-50' : 'border border-transparent bg-gray-200'}`}
            >
              <div className="inline-flex items-center flex-[0_0_auto] relative">
                <div className="w-px h-[16px] relative" />
                <div
                  className={`w-fit mt-[-1.00px] tracking-[0] text-[16px] text-center whitespace-nowrap leading-[16px] relative font-Pretendard ${isSelect ? 'font-semibold text-blue-600' : 'font-normal text-gray-700'}`}
                >
                  {/* {text} {total} */}
                  {isSelect ? (
                    <>
                      {text} {total}
                    </>
                  ) : (
                    <>{text}</>
                  )}
                </div>
              </div>
            </div>
          </button>
        )
      // case ButtonStyle.HUG_BLUE:
      //   return (
      //     <button
      //       type="button"
      //       className="flex px-[20px] py-[12px] justify-center items-center gap-[4px] rounded-[16px] bg-blue-50 border border-blue-500 text-blue-600 text-center text-base font-normal font-Pretendard"
      //       onClick={onClickFunction}
      //     >
      //       전체 00
      //     </button>
      //   )
      case ButtonStyle.PLUS_BUTTON:
        return (
          <button
            type="button"
            className="flex p-[14px] justify-center items-center gap-[8px] rounded-[12px] bg-blue-600 text-white text-center text-xl font-semibold font-Pretendard"
            onClick={onClickFunction}
          >
            {/* <p className="w-[24px] h-[24px]">+</p> */}
            <p>{text}</p>
          </button>
        )
      default:
        return null
    }
  }

  return <>{selectButton()}</>
}
