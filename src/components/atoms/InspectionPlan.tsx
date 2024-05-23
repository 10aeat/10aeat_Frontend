interface Props {
  legalBasis: string
  target: string
  manager: string
}
export default function InspectionPlan({ legalBasis, target, manager }: Props) {
  return (
    <div className="flex flex-col w-[343px] items-start gap-[16px] p-[16px] relative bg-white rounded-[18px]">
      <div className=" flex flex-col items-start relative">
        <div className="font-Pretendard font-medium text-gray-600 text-[14px] leading-[20px] relative w-fit whitespace-nowrap">
          법적 근거
        </div>
        <p className="font-Pretendard font-semibold text-gray-900 text-[16px] leading-[24px] relative w-fit whitespace-nowrap">
          {legalBasis}
        </p>
      </div>
      <div className="flex flex-col items-start relative">
        <div className="font-Pretendard font-medium text-gray-600 text-[14px] leading-[20px] relative w-fit whitespace-nowrap">
          사용내역/점검 대상
        </div>
        <p className="font-Pretendard font-semibold text-gray-900 text-[16px] leading-[24px] relative w-fit whitespace-nowrap">
          {target}
        </p>
      </div>
      <div className="flex flex-col items-start relative">
        <div className="font-Pretendard font-medium text-gray-600 text-[14px] leading-[20px] relative w-fit whitespace-nowrap">
          담당자/업체
        </div>
        <p className="font-Pretendard font-semibold text-gray-900 text-[16px] leading-[24px] relative w-fit whitespace-nowrap">
          {manager}
        </p>
      </div>
    </div>
  )
}
