'use client'

import Button, { ButtonStyle } from '@/components/atoms/Button'
import ChangeYear from '@/components/atoms/ChangeYear'
import NavBar from '@/components/atoms/NavBar'
import NoData from '@/components/atoms/NoData'
import Pagination from '@/components/atoms/Pagination'
import ManageCard from '@/components/molecules/ManageCard'
import { useEffect, useState } from 'react'

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

export default function ManageList() {
  const [selectedStatus, setSelectedStatus] = useState('전체')
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [articleList, setArticleList] = useState<MANAGE_ARTICLE_LIST[]>()
  const accesstoken =
    'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJyb2xlIjoiVEVOQU5UIiwiaWF0IjoxNzE3NTYyMjg4LCJleHAiOjE3MTc1NjQwODh9.pewYiBmFBUkXHq2TBrSangJx5qkEtQbGgOKAT8i9mPs'

  useEffect(() => {
    const getManageArticlesList = async () => {
      try {
        let url = `http://10aeat.com/manage/articles/list?`
        if (selectedStatus !== '전체') {
          const progress =
            selectedStatus === '진행중/대기' ? 'INPROGRESS' : 'COMPLETE'
          url += `&progress=${progress}`
        }
        const manageArticleResponse = await fetch(
          // `http://10aeat.com/manage/articles/list`,
          url,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accesstoken}`,
            },
          },
        )
        const manageArticlesList = await manageArticleResponse.json()
        setArticleList(manageArticlesList)
        console.log(manageArticlesList)
      } catch (error) {
        console.error(error)
      }
    }
    getManageArticlesList()
  }, [])

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status)
  }

  const handlePreviousYear = () => {
    setSelectedYear((prevYear) => prevYear - 1)
  }

  const handleNextYear = () => {
    setSelectedYear((prevYear) => prevYear + 1)
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <NavBar isTitle isTextChange={false}>
        법정 시설물 유지관리 점검 현황
      </NavBar>

      {/* 연도 선택 */}
      <ChangeYear
        selectedYear={selectedYear}
        onPreviousYear={handlePreviousYear}
        onNextYear={handleNextYear}
      />

      {/* 전체 필터링 */}
      <div className="flex items-start gap-[14px] px-4 mb-4">
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

      {articleList && articleList.length > 0 ? (
        <div className="flex flex-col items-center gap-3 min-h-[400px]">
          {articleList.map((item, index) => (
            <ManageCard
              key={item.id}
              id={item.id}
              period={item.period}
              periodCount={item.periodCount}
              title={item.title}
              allSchedule={item.allSchedule}
              completedSchedule={item.completedSchedule}
              issueId={item.issueId}
            />
          ))}
        </div>
      ) : (
        <NoData />
      )}
      {articleList && (
        <Pagination totalItems={articleList.length} itemsPerPage={0} />
      )}
    </main>
  )
}
