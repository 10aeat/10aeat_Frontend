'use client'

import Button, { ButtonStyle } from '@/components/atoms/Button'
import ChangeYear from '@/components/atoms/ChangeYear'
import NavBar from '@/components/atoms/NavBar'
import NoData from '@/components/atoms/NoData'
import Pagination from '@/components/atoms/Pagination'
import ManageCard from '@/components/molecules/ManageCard'
import { useAccessToken } from '@/components/store/AccessTokenStore'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ManageList() {
  const [selectedStatus, setSelectedStatus] = useState('전체')
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [articleList, setArticleList] = useState<MANAGE_ARTICLE_LIST[]>()
  const [articleSummary, setArticleSummary] = useState<ARTICLE_SUMMARY>()
  const { accessToken } = useAccessToken()

  useEffect(() => {
    const getManageArticlesSummary = async () => {
      try {
        const response = await fetch(
          'http://10aeat.com/manage/articles/summary',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )
        const getSummaryData = await response.json()
        setArticleSummary(getSummaryData.data)
      } catch (error) {
        console.log(error)
      }
    }
    const getManageArticlesList = async () => {
      try {
        let url = `http://10aeat.com/manage/articles/list?`
        const params = []
        if (selectedYear !== new Date().getFullYear()) {
          params.push(`year=${selectedYear}`)
        }
        if (selectedStatus !== '전체') {
          const progress = selectedStatus === '진행중/대기' ? 'false' : 'true'
          params.push(`complete=${progress}`)
        }
        if (params.length > 0) {
          url += params.join('&')
        }

        const manageArticleResponse = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            AccessToken: accessToken,
          },
        })
        const manageArticlesList = await manageArticleResponse.json()
        setArticleList(manageArticlesList.data)
        console.log(manageArticlesList)
      } catch (error) {
        console.error(error)
      }
    }
    getManageArticlesSummary()
    getManageArticlesList()
  }, [selectedYear, accessToken, selectedStatus])

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
    <main className="flex flex-col items-center justify-center bg-gray-100 ">
      <NavBar isTitle isTextChange={false}>
        법정 시설물 유지관리 점검 현황
      </NavBar>

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
          {articleList.map((item) => (
            <Link href={`${item.id}`} key={item.id}>
              <ManageCard
                id={item.id}
                period={item.period}
                periodCount={item.periodCount}
                title={item.title}
                allSchedule={item.allSchedule}
                completedSchedule={item.completedSchedule}
                issueId={item.issueId}
              />
            </Link>
          ))}
        </div>
      ) : (
        <NoData />
      )}
      {/* {articleList && (
        <Pagination
          totalItems={articleList.length}
          itemsPerPage={20}
          currentPage={0}
          onPageChange={}
        />
      )} */}
    </main>
  )
}
