import Image from 'next/image'

export enum BoxStyle {
  BOX_WHITE_CARD = 'BOX_WHITE_CARD',
  BOX_WHITE_CONTENT = 'BOX_WHITE_CONTENT',
  BOX_GRAY = 'BOX_GRAY',
}

interface Props {
  boxStyle: BoxStyle
  children: React.ReactNode
  style?: string
  issueCheck?: boolean
}

export default function Box({ boxStyle, children, style, issueCheck }: Props) {
  const selectBox = () => {
    switch (boxStyle) {
      case BoxStyle.BOX_WHITE_CARD:
        return (
          <div
            className={`relative flex w-[343px] h-[124px] p-4 items-end content-end gap-x-2.5 gap-y-2 flex-wrap rounded-[18px] bg-white shadow-primary font-Pretendard ${style}`}
          >
            {issueCheck && (
              <Image
                src="/icons/issueCheck.svg"
                width={25}
                height={25}
                alt="issue"
                className="absolute top-[-7px] left-[-3px]"
              />
            )}
            {children}
          </div>
        )
      case BoxStyle.BOX_WHITE_CONTENT:
        return (
          <div
            className={`flex flex-col w-[343px] h-auto px-[18px] py-6 items-start rounded-[18px] bg-white shadow-primary font-Pretendard ${style}`}
          >
            {children}
          </div>
        )
    }
  }
  return <>{selectBox()}</>
}
