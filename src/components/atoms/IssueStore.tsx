import Image from 'next/image'

export enum IssueStyle {
  ISSUE_TOGGLE = 'ISSUE_TOGGLE',
  ISSUE_ALERT = 'ISSUE_ALERT',
}

interface Props {
  issueStyle: IssueStyle
}

export default function IssueStore({ issueStyle }: Props) {
  const selectIssue = () => {
    switch (issueStyle) {
      case IssueStyle.ISSUE_TOGGLE:
        return (
          <div className="w-[343px] h-[64px] flex shirnk-0 justify-between items-center font-Pretendard rounded-[16px] bg-white px-[16px]">
            <div className="flex">
              <Image
                src="/icons/danger_circle.svg"
                width={32}
                height={32}
                alt="danger_circle"
              />
              이슈 사항 제목 표시
            </div>
            <Image
              src="/icons/arrow_down_large.svg"
              width={24}
              height={24}
              alt="arrow_down_large"
              className="cursor-pointer"
            />
          </div>
        )
      default:
        return null
    }
  }
  return <>{selectIssue()}</>
}
