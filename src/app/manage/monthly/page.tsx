'use client'

import ChangeYear from '@/components/atoms/ChangeYear'
import NavBar from '@/components/atoms/NavBar'
import NoData from '@/components/atoms/NoData'
import Pagination from '@/components/atoms/Pagination'
import ManageCard from '@/components/molecules/ManageCard'
import SelectMonth from '@/components/molecules/SelectMonth'
import { useState } from 'react'

const exampleData: MANAGE_ARTICLE_LIST[] = [
  // {
  //   id: 1,
  //   period: 'YEAR',
  //   periodCount: 1,
  //   title: '소방시설 작동기능 점검',
  //   allSchedule: 12,
  //   completedSchedule: 1, //(all이랑 complete가 동일하면 전체 완료)
  //   issueCheck: false, // 사용자가 이슈 확인했는지 안했는지
  // },
  // {
  //   id: 2,
  //   period: 'MONTH',
  //   periodCount: 1,
  //   title: '승강기 자체 점검',
  //   allSchedule: 12,
  //   completedSchedule: 12,
  //   issueCheck: true,
  // },
]

export default function ManageMonthly() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)

  const handlePreviousYear = () => {
    setSelectedYear((prevYear) => prevYear - 1)
  }

  const handleNextYear = () => {
    setSelectedYear((prevYear) => prevYear + 1)
  }

  const handleSelectMonth = (month: number) => {
    setSelectedMonth(month)
  }

  // 선택된 월에 따라 데이터를 필터링하는 로직
  const filteredData = exampleData.filter((item) => {
    // TODO: item 데이터 내에서 월을 비교하는 로직을 구현해야 합니다.
    // 예시: return item.month === selectedMonth;
  })

  return (
    <>
      <NavBar isTitle={true} isTextChange={false}>
        법정 시설물 유지관리 점검 현황
      </NavBar>

      {/* 연도 선택 */}
      <ChangeYear
        selectedYear={selectedYear}
        onPreviousYear={handlePreviousYear}
        onNextYear={handleNextYear}
      />

      {/* 월별 필터링 */}
      <SelectMonth onSelectMonth={handleSelectMonth} />

      {/* 카드들 */}
      {filteredData.length > 0 ? (
        <div className="flex flex-col items-center gap-3 min-h-[400px]">
          {filteredData.map((item, index) => (
            <ManageCard
              key={index}
              id={item.id}
              period={item.period}
              periodCount={item.periodCount}
              title={item.title}
              allSchedule={item.allSchedule}
              completedSchedule={item.completedSchedule}
              issueCheck={item.issueCheck}
            />
          ))}
        </div>
      ) : (
        <NoData />
      )}

      <Pagination totalItems={filteredData.length} itemsPerPage={0} />
    </>
  )
}
