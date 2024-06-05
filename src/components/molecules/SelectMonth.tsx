/* eslint-disable react/no-array-index-key */
import Image from 'next/image'
import { useState } from 'react'
import Button, { ButtonStyle } from '../atoms/Button'

interface Props {
  onSelectMonth: (month: number) => void
}

export default function SelectMonth({ onSelectMonth }: Props) {
  const months = Array.from({ length: 12 }, (_, i) => `${i + 1}월`)
  const firstRowMonths = months.slice(0, 6)
  const secondRowMonths = months.slice(6, 12)
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)

  const handleMonthClick = (index: number) => {
    const month = index + 1
    if (selectedMonth === month) {
      setSelectedMonth(null)
      onSelectMonth(0) // 선택 해제 시 onSelectMonth에 0을 전달
    } else {
      setSelectedMonth(month)
      onSelectMonth(month)
    }
  }

  return (
    // TODO 'FILTERING'
    // 월별로 필터링하려면 백엔드에서 어떤 식으로 데이터 주는 지 알아야하는데 아직 제대로 갈피 안잡힌 거 같아서 보류..
    // 만약, 월 자체를 주시면 월로 필터링해서 없는 월은 disabled 효과 주면 될 것 같음
    <div className="flex w-full justify-center">
      <div className="flex flex-col justify-center">
        <span className="font-Pretendard font-semibold capitalize text-gray-900">
          월별 계획
        </span>

        <div className="flex flex-col my-2">
          <div className="flex flex-wrap gap-2">
            {firstRowMonths.map((month, index) => (
              <Button
                key={index}
                buttonStyle={ButtonStyle.MONTHLY}
                style="flex-1 m-0"
                isSelect={selectedMonth === index + 1}
                onClickFunction={() => handleMonthClick(index)}
              >
                {month}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap mt-2 gap-2">
            {secondRowMonths.map((month, index) => (
              <Button
                key={index}
                buttonStyle={ButtonStyle.MONTHLY}
                style="flex-1 m-0"
                isSelect={selectedMonth === index + 7}
                onClickFunction={() => handleMonthClick(index + 6)}
              >
                {month}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex gap-2 font-Pretendard text-gray-600 text-sm">
          <div className="flex gap-1">
            <Image
              src="/icons/hasSchedule.svg"
              width={16}
              height={16}
              alt="hasSchedule"
            />
            <span>일정 있음</span>
          </div>
          <div className="flex gap-1">
            <Image
              src="/icons/noSchedule.svg"
              width={16}
              height={16}
              alt="noSchedule"
            />
            <span>일정 없음</span>
          </div>
        </div>
      </div>
    </div>
  )
}
