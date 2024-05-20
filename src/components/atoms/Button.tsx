import Image from 'next/image'

export enum ButtonStyle {
  TEXT_CHANGE = 'TEXT_CHANGE',
  BASE = 'BASE',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
  BASE_SELECT = 'BASE_SELECT',
  LARGE_SELECT = 'LARGE_SELECT',
  XLARGE_SELECT = 'XLARGE_SELECT',
  FONT_SIZE = 'FONT_SIZE',
  READ_MORE = 'READ_MORE',
  FILTER_SELECT = 'FILTER_SELECT',
  FILTER = 'FILTER',
  MONTLY_NONE = 'MONTLY_NONE',
  MONTLY = 'MONTLY',
  MONTLY_SELECT = 'MONTLY_SELECT',
  SAVE = 'SAVE',
  SAVE_SELECT = 'SAVE_SELECT',
  HUG = 'HUG',
  HUG_BLUE = 'HUG_BLUE',
  PLUS_BUTTON = 'PLUS_BUTTON'
}

interface Props {
  buttonStyle: ButtonStyle
  children?: React.ReactNode
  onClickFunction?: () => Promise<void> | void
}

export default function Button({
  buttonStyle,
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
            className="flex w-20 h-10 p-2.5 justify-center items-center gap-0.5 rounded-lg bg-gray-100 text-gray-600 text-center text-base font-medium font-Pretendard"
            onClick={onClickFunction}
          >
            기본
          </button>
        )
        case ButtonStyle.LARGE:
        return (
          <button
            type="button"
            className="flex w-20 h-10 p-2.5 justify-center items-center gap-0.5 rounded-lg bg-gray-100 text-gray-600 text-center text-lg font-medium font-Pretendard"
            onClick={onClickFunction}
          >
            크게
          </button>
        )
        case ButtonStyle.XLARGE:
        return (
          <button
            type="button"
            className="flex w-20 h-10 p-2.5 justify-center items-center gap-0.5 rounded-lg bg-gray-100 text-gray-600 text-center text-xl font-medium font-Pretendard"
            onClick={onClickFunction}
          >
            더크게
          </button>
        )
        case ButtonStyle.BASE_SELECT:
        return (
          <button
            type="button"
            className="flex w-20 h-10 p-2.5 justify-center items-center gap-0.5 rounded-lg bg-gray-300 text-gray-700 text-center text-base font-medium font-Pretendard"
            onClick={onClickFunction}
          >
            기본
          </button>
        )
        case ButtonStyle.LARGE_SELECT:
        return (
          <button
            type="button"
            className="flex w-20 h-10 p-2.5 justify-center items-center gap-0.5 rounded-lg bg-gray-300 text-gray-700 text-center text-lg font-medium font-Pretendard"
            onClick={onClickFunction}
          >
            크게
          </button>
        )
        case ButtonStyle.XLARGE_SELECT:
        return (
          <button
            type="button"
            className="flex w-20 h-10 p-2.5 justify-center items-center gap-0.5 rounded-lg bg-gray-300 text-gray-700 text-center text-xl font-medium font-Pretendard"
            onClick={onClickFunction}
          >
            더크게
          </button>
        )
        case ButtonStyle.FONT_SIZE:
        return (
          <button
            type="button"
            className="flex h-[24px] p-[8px] justify-center items-center gap-[8px] rounded-[100px] bg-gray-200 text-gray-700 text-center text-sm font-normal font-Pretendard"
            onClick={onClickFunction}
          >
            글자크기
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
        case ButtonStyle.FILTER_SELECT:
        return (
          <button
            type="button"
            className="flex w-[105px] h-[86px] px-[14px] py-[16px] justify-center flex-col items-center gap-[2px] rounded-[18px] bg-blue-900 text-white text-center font-Pretendard"
            onClick={onClickFunction}
          >
            <p className="text-base font-medium ">종류</p>
            <p className="text-xl font-bold ">N개</p>
          </button>
        )
        case ButtonStyle.FILTER:
        return (
          <button
            type="button"
            className="flex w-[105px] h-[86px] px-[14px] py-[16px] justify-center flex-col items-center gap-[2px] rounded-[18px] border bg-gray-50 text-gray-900 border-gray-300 text-center font-Pretendard"
            onClick={onClickFunction}
          >
            <p className="text-base font-medium ">종류</p>
            <p className="text-xl font-bold ">N개</p>
          </button>
        )
        case ButtonStyle.MONTLY_NONE:
        return (
          <button
            type="button"
            className="flex w-[45px] h-[40px] p-[8px] justify-center flex-col items-center gap-[8px] shrink-0 rounded-[6px] bg-gray-200 text-gray-400 text-center text-base font-normal font-Pretendard"
            onClick={onClickFunction}
          >
            Btn
          </button>
        )
        case ButtonStyle.MONTLY:
        return (
          <button
            type="button"
            className="flex w-[45px] h-[40px] p-[8px] justify-center flex-col items-center gap-[8px] shrink-0 rounded-[6px] border bg-white border-gray-400 text-gray-700 text-center text-base font-normal font-Pretendard"
            onClick={onClickFunction}
          >
            Btn
          </button>
        )
        case ButtonStyle.MONTLY_SELECT:
        return (
          <button
            type="button"
            className="flex w-[45px] h-[40px] p-[8px] justify-center flex-col items-center gap-[8px] shrink-0 rounded-[6px] border bg-white border-blue-600 text-blue-600 text-center text-base font-normal font-Pretendard"
            onClick={onClickFunction}
          >
            Btn
          </button>
        )
        case ButtonStyle.SAVE:
        return (
          <button
            type="button"            
            onClick={onClickFunction}
          >
            <Image
              src="/icons/star_linear.svg" 
             width={24}
              height={24}
              alt="star_linear"
            />
          </button>
        )
        case ButtonStyle.SAVE_SELECT:
        return (
          <button
            type="button"         
            onClick={onClickFunction}
          >
            <Image
              src="/icons/star_fill_blue.svg" 
             width={24}
              height={24}
              alt="star_fill_blue"
            />
          </button>
        )
        case ButtonStyle.HUG:
        return (
          <button
            type="button"
            className="flex px-[20px] py-[12px] justify-center items-center gap-[4px] rounded-[16px] bg-gray-200 text-gray-700 text-center text-base font-normal font-Pretendard"
            onClick={onClickFunction}
          >
            전체
          </button>
        )       
        case ButtonStyle.HUG_BLUE:
        return (
          <button
            type="button"
            className="flex px-[20px] py-[12px] justify-center items-center gap-[4px] rounded-[16px] bg-blue-50 border border-blue-500 text-blue-600 text-center text-base font-normal font-Pretendard"
            onClick={onClickFunction}
          >
            전체 00
          </button>
        )
        case ButtonStyle.PLUS_BUTTON:
        return (
          <button
            type="button"
            className="flex p-[14px] justify-center items-center gap-[8px] rounded-[12px] bg-blue-600 text-white text-center text-xl font-semibold font-Pretendard"
            onClick={onClickFunction}
          >
            <p className="w-[24px] h-[24px]">+</p>
            <p>버튼</p>
          </button>
        )
      default:
        return null
    }
  }

  return <>{selectButton()}</>
}
