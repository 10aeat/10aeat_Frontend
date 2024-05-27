import Button, { ButtonStyle } from './Button'

export default function MonthlyPlan() {
  return (
    <div className="relative w-[343px] h-[185px] top-[36px] bg-white rounded-[18px] shadow-primary">
      <div className="inline-flex items-start absolute top-[16px] left-[16px]">
        <div className="relative w-[94px] h-[23px] font-Pretendard text-[16px] font-semibold leading-[24px] ">
          월별 계획
        </div>
        <div className="inline-flex flex-col items-start gap-[8px] absolute top-[52px] left-[16px]">
          <div className="inline-flex items-start gap-[8px] relative"></div>
        </div>
      </div>
    </div>
  )
}
