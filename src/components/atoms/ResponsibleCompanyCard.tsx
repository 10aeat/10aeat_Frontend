/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */

interface Props {
  name: string
  site: string
}

// 댓글 or 진행 내용 없을 때 카드
export default function ResponsibleCompanyCard({ name, site }: Props) {
  const rCCard = () => {
    return (
      <button className="flex w-[343px] h-[110px] items-center gap-[159px] px-[20px] py-[20px] relative bg-white rounded-[16px] shadow-[0_4px_30px_0px_rgba(75,85,9,0.04)]">
        <div className="flex max-w-[303px] items-center gap-[159px] relative flex-1 grow">
          <div className="flex flex-col w-[98px] items-start gap-[2px] relative">
            <div className="mt-[-1.00px] text-sm font-normal font-Pretendard relative w-fit whitespace-nowrap">
              담당업체
            </div>
            <div className="relative w-fit font-Pretendard font-bold text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
              {name}
            </div>
          </div>
          <div className="flex flex-col items-center gap-[4px] px-[12px] py-0 relative flex-1 grow">
            <img
              src="/icons/global.svg"
              alt="global"
              className="!relative !w-[24px] !h-[24px] !ml-[-1.00px] !mr[-1.00px]"
            />
            <div className="ml-[-13.50px] mr-[-13.50px] text-sm text-medium font-Pretendard whitespace-nowrap">
              웹사이트
            </div>
          </div>
        </div>
      </button>
    )
  }
  return <>{rCCard()}</>
}
