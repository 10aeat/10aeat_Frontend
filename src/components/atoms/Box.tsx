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
  issueId?: number | null
}

export default function Box({ boxStyle, children, style, issueId }: Props) {
  // eslint-disable-next-line consistent-return
  const selectBox = () => {
    // eslint-disable-next-line default-case
    switch (boxStyle) {
      case BoxStyle.BOX_WHITE_CARD:
        return (
          <div
            className={`relative flex w-[343px] h-[124px] p-4 items-end content-end gap-x-2.5 gap-y-2 flex-wrap rounded-[18px] bg-white shadow-primary font-Pretendard ${style}`}
          >
            {issueId && (
              <Image
                src="/icons/issueCheck.svg"
                width={20}
                height={20}
                alt="issue"
                className="absolute top-[0px] left-[0px]"
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
