interface Props {
  totalChecks: number
  completedChecks: number
  barWidth?: number
}

export default function StatusBar({
  totalChecks = 12,
  completedChecks = 4,
}: Props) {
  const progressPercentage = (completedChecks / totalChecks) * 100
  const progressBarWidth = 185
  const progressFilledWidth = (progressPercentage / 100) * progressBarWidth

  const progressBarColor =
    progressPercentage === 100 ? 'bg-blue-600' : 'bg-blue-300'

  return (
    <div className="relative flex min-w-[201px] h-[104px] px-[8px] py-[12px] items-center gap-[12px] self-stretch">
      <div className=" w-full h-[10px] top-0 left-0 bg-gray-200 rounded-[100px]">
        <div
          className={`h-[10px] top-0 left-0 ${progressBarColor} rounded-[100px]`}
          style={{ width: `${progressFilledWidth}px` }}
        ></div>
      </div>
    </div>
  )
}
