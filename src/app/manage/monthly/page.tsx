'use client'

import ChangeYear from '@/components/atoms/ChangeYear'
import NavBar from '@/components/atoms/NavBar'
import NoData from '@/components/atoms/NoData'
import Pagination from '@/components/atoms/Pagination'
import ManageCard from '@/components/molecules/ManageCard'
import SelectMonth from '@/components/molecules/SelectMonth'
import { useAccessToken } from '@/components/store/AccessTokenStore'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ManageMonthly() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)
  const [articleList, setArticleList] = useState<MANAGE_LIST>()
  const [articleListCard, setArticleListCard] =
    useState<MANAGE_ARTICLE_LIST_CARD[]>()
  const [articleSummary, setArticleSummary] =
    useState<MANAGE_ARTICLE_MONTHLY_SUMMARY[]>()
  const [currentPage, setCurrentPage] = useState(0)
  const { accessToken } = useAccessToken()

  useEffect(() => {
    const getMonthlySummary = async () => {
      try {
        let url = `http://api.10aeat.com/manage/articles/monthly/summary`
        const params = []

        if (selectedYear !== new Date().getFullYear()) {
          params.push(`year=${selectedYear}`)
        }
        if (params.length > 0) {
          url += `?${params.join('&')}`
        }

        const summaryResponse = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            AccessToken: accessToken,
          },
        })
        if (!summaryResponse.ok) {
          throw new Error(`HTTP error! status: ${summaryResponse.status}`)
        }
        const monthlySummary = await summaryResponse.json()
        setArticleSummary(monthlySummary.data)
      } catch (error) {
        console.log(error)
      }
    }

    const getManageArticlesMonthly = async () => {
      try {
        let url = `http://api.10aeat.com/manage/articles/monthly/list?page=${currentPage}&`
        const params = []

        if (selectedYear !== new Date().getFullYear()) {
          params.push(`year=${selectedYear}`)
        }
        if (selectedMonth !== null) {
          params.push(`month=${selectedMonth}`)
        }
        if (params.length > 0) {
          url += `${params.join('&')}`
        }

        const manageArticleResponse = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            AccessToken: accessToken,
          },
        })
        if (!manageArticleResponse.ok) {
          throw new Error(`ERROR! status: ${manageArticleResponse.status}`)
        }
        const manageArticlesList = await manageArticleResponse.json()
        setArticleList(manageArticlesList.data)
        setArticleListCard(manageArticlesList.data.articles)
      } catch (error) {
        console.log(error)
      }
    }
    getMonthlySummary()
    getManageArticlesMonthly()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear, selectedMonth, accessToken, currentPage])

  const handlePreviousYear = () => {
    setCurrentPage(0)
    setSelectedYear((prevYear) => prevYear - 1)
  }

  const handleNextYear = () => {
    setCurrentPage(0)
    setSelectedYear((prevYear) => prevYear + 1)
  }

  const handleSelectMonth = (month: number) => {
    setCurrentPage(0)
    setSelectedMonth(month)
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <NavBar isTitle isTextChange={false}>
        법정 시설물 유지관리 점검 현황
      </NavBar>

      <ChangeYear
        selectedYear={selectedYear}
        onPreviousYear={handlePreviousYear}
        onNextYear={handleNextYear}
      />

      <SelectMonth onSelectMonth={handleSelectMonth} data={articleSummary} />

      {articleListCard && articleListCard.length > 0 ? (
        <div className="flex flex-col items-center gap-3 min-h-[400px] mt-4">
          {articleListCard.map((item) => (
            <Link href={`/manage/${item.id}/detail`} key={item.id}>
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
      {articleList && (
        <Pagination
          totalItems={articleList.totalElements}
          itemsPerPage={articleList.pageSize}
          currentPage={currentPage + 1}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  )
}
