/* eslint-disable no-nested-ternary */
import Tooltip, { TooltipStyle } from './Tooltip'

interface Props {
  totalChecks: number
  completedChecks: number
  status: string
}

export default function TrackingProgress2({
  totalChecks = 2,
  completedChecks = 0,
  status,
}: Props) {
  const progressPercentage = (completedChecks / totalChecks) * 100
  const progressBarWidth = 280
  const progressFilledWidth = (progressPercentage / 100) * progressBarWidth
  const tooltipPosition = progressFilledWidth - 20 // Adjust based on tooltip size and positioning

  const progressBarColor =
    progressPercentage === 100 ? 'bg-blue-600' : 'bg-blue-300'
  const totalChecksTextColor =
    progressPercentage === 100 ? 'text-white' : 'text-[#6d6d6d]'
  const statusText =
    status === '대기'
      ? '아직 점검일이 다가오지 않았어요.'
      : progressPercentage === 100
        ? '점검이 완료되었어요.'
        : `${totalChecks}회 중에 ${completedChecks}회 점검했어요`

  return (
    <div className="relative w-[343px] h-[160px] top-0 left-0 bg-white rounded-[18px]">
      <div className="inline-flex flex-col items-center absolute top-[16px] left-[50%] transform -translate-x-1/2">
        <div
          className="relative font-Pretendard font-semibold text-gray-900 text-[28px] text-center leading-[36px]"
          style={{ visibility: status === '대기' ? 'hidden' : 'visible' }}
        >
          {progressPercentage.toFixed(0)}%
        </div>
        <div className="fontchange relative w-[280px] text-gray-500 text-center leading-[20px] font-medium capitalize font-Pretendard text-[14px]">
          {statusText}
        </div>
      </div>
      <div className="absolute w-[280px] h-[56px] top-[90px] left-[32px]">
        <div className="absolute w-full h-[26px] top-0 left-0 bg-gray-200 rounded-[100px]">
          <div
            className={`absolute h-full top-0 left-0 ${progressBarColor} rounded-[100px]`}
            style={{ width: `${progressFilledWidth}px` }}
          >
            {status === 'INPROGRESS' && (
              <div
                className="pt-[16px]"
                style={{ paddingLeft: `${tooltipPosition}px` }}
              >
                <Tooltip
                  tooltipStyle={TooltipStyle.COUNT}
                  count={completedChecks}
                />
              </div>
            )}
          </div>
          <div
            className={`absolute w-[64px] top-[5px] right-[15px] ${totalChecksTextColor} text-right leading-[18px] font-Pretendard font-medium text-[14px]`}
          >
            총 {totalChecks}회
          </div>
        </div>
      </div>
    </div>
  )
}
