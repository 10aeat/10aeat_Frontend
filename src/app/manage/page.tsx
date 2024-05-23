'use client'

import Button, { ButtonStyle } from '@/components/atoms/Button'
import NavBar from '@/components/atoms/NavBar'
import Pagination from '@/components/atoms/Pagination'
import ManageCard from '@/components/molecules/ManageCard'
import { useState } from 'react'

const exampleData: MANAGE_ARTICLE_LIST[] = [
  {
    id: 1,
    period: 'YEAR',
    periodCount: 1,
    title: '소방시설 작동기능 점검',
    allSchedule: 12,
    completedSchedule: 1, //(all이랑 complete가 동일하면 전체 완료)
    issueCheck: false, // 사용자가 이슈 확인했는지 안했는지
  },
  {
    id: 2,
    period: 'MONTH',
    periodCount: 1,
    title: '승강기 자체 점검',
    allSchedule: 12,
    completedSchedule: 12,
    issueCheck: true,
  },
]

export default function ManageList() {
  const [selectedStatus, setSelectedStatus] = useState('전체')

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status)
  }

  return (
    <>
      <NavBar isTitle={true} isTextChange={false}>
        법정 시설물 유지관리 점검 현황
      </NavBar>

      <div className="flex w-full items-start gap-[14px] px-4">
        <Button
          buttonStyle={ButtonStyle.FILTER}
          isSelect={selectedStatus === '전체'}
          onClickFunction={() => handleStatusClick('전체')}
          text="전체"
          total={22}
        />
        <Button
          buttonStyle={ButtonStyle.FILTER}
          isSelect={selectedStatus === '진행중/대기'}
          onClickFunction={() => handleStatusClick('진행중/대기')}
          text="진행중/대기"
          total={6}
        />
        <Button
          buttonStyle={ButtonStyle.FILTER}
          isSelect={selectedStatus === '완료'}
          onClickFunction={() => handleStatusClick('완료')}
          text="완료"
          total={16}
        />
      </div>

      {/* 카드들 */}
      <div className="flex flex-col items-center mt-4 gap-3">
        {exampleData.map((item, index) => (
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
      <Pagination totalItems={25} />
    </>
  )
}
