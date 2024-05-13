import '../../styles/boxStyle.scss'

export enum BoxStyle {
  TAG = 'TAG',
  BADGE = 'BADGE',
}

interface Props {
  boxStyle: BoxStyle
  children?: string
  style?: string
  dotStyle?: string
}

export default function BoxStore({
  boxStyle,
  children,
  style,
  dotStyle,
}: Props) {
  const selectBox = () => {
    switch (boxStyle) {
      case BoxStyle.TAG:
        return (
          <div
            className={`tag flex border-solid border-[1px] font-Pretendard font-medium leading-5 ${style}`}
          >
            <div className={`w-2 h-2 rounded-lg ${dotStyle}`} />
            {children}
          </div>
        )
      case BoxStyle.BADGE:
        return (
          <div className="badge w-[58px] h-[28px] flex shrink-0 justify-center items-center text-blue-500 rounded-[30px] font-Pretendard font-semibold leading-5">
            NEW
          </div>
        )
      default:
        return null
    }
  }

  return <>{selectBox()}</>
}
