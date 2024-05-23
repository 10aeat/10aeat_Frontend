import Tooltip, { TooltipStyle } from './Tooltip'

export default function TrackingProgress2() {
  return (
    <div className="relative w-[343px] h-[160px] top-0 left-0 bg-white rounded-[18px]">
      <div className="inline-flex flex-col items-center absolute top-[16px] left-[98px]">
        <div className="relative font-Pretendard font-semibold text-gray-900 text-[28px] text-center leading-[36px] ">
          33%
        </div>
        <div className="relative text-gray-500 text-center leading-[20px] font-medium capitalize font-Pretendart text-[14px]">
          12회 중에 4회 점검했어요
        </div>
      </div>
      <div className="absolute w-[280px] h-[56px] top-[90px] left-[32px]">
        <div className="absolute w-[280px] h-[26px] top-0 left-0 bg-gray-200 rounded-[100px]">
          <div className="absoulte w-[92px] h-[26px] top-0 left-0 bg-blue-300 rounded-[100px]" />
          <div className="absolute w-[64px] top-[3px] left-[200px] text-[#6d6d6d] text-right leading-[18px] font-Pretendard font-medium text-[14px]">
            총 12회
          </div>
        </div>

        <Tooltip tooltipStyle={TooltipStyle.COUNT} count={10} />
      </div>
    </div>
  )
}
