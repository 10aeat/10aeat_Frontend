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
  const [articleList, setArticleList] = useState<MANAGE_LIST>()
  const [articleListCard, setArticleListCard] =
    useState<MANAGE_ARTICLE_LIST_CARD[]>()
  const [articleSummary, setArticleSummary] = useState<ARTICLE_SUMMARY>()
  const [currentPage, setCurrentPage] = useState(0)
  const { accessToken } = useAccessToken()

  useEffect(() => {
    const getManageArticlesSummary = async () => {
      try {
        let url = `https://api.10aeat.com/manage/articles/summary`
        const params = []
        if (selectedYear !== new Date().getFullYear()) {
          params.push(`year=${selectedYear}`)
        }
        if (params.length > 0) {
          url += `?${params}`
        }

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            AccessToken: accessToken,
          },
        })
        const getSummaryData = await response.json()
        setArticleSummary(getSummaryData.data)
        console.log(articleSummary)
      } catch (error) {
        console.log(error)
      }
    }
    getManageArticlesSummary()

    const getManageArticlesList = async () => {
      try {
        let url = `https://api.10aeat.com/manage/articles/list?page=${currentPage}`
        const params = []
        if (selectedYear !== new Date().getFullYear()) {
          params.push(`year=${selectedYear}`)
        }
        if (selectedStatus !== '전체') {
          const progress = selectedStatus === '진행중/대기' ? 'false' : 'true'
          params.push(`complete=${progress}`)
        }
        if (params.length > 0) {
          url += `&${params.join('&')}`
        }

        const manageArticleResponse = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            AccessToken: accessToken,
          },
        })
        console.log(url)
        const manageArticlesList = await manageArticleResponse.json()
        setArticleList(manageArticlesList.data)
        setArticleListCard(manageArticlesList.data.articles)
        console.log(manageArticlesList)
        console.log(manageArticlesList.data)
        console.log(manageArticlesList.data.articles)
      } catch (error) {
        console.error(error)
      }
    }
    getManageArticlesList()
  }, [selectedYear, accessToken, selectedStatus, currentPage])

  const getTotalInProgressAndPending = () => {
    return (articleSummary?.inprogress || 0) + (articleSummary?.pending || 0)
  }
  const getTotalAll = () => {
    return (
      (articleSummary?.inprogress || 0) +
      (articleSummary?.pending || 0) +
      (articleSummary?.complete || 0)
    )
  }

  const handleStatusClick = (status: string) => {
    setCurrentPage(0)
    setSelectedStatus(status)
  }

  const handlePreviousYear = () => {
    setCurrentPage(0)
    setSelectedYear((prevYear) => prevYear - 1)
  }

  const handleNextYear = () => {
    setCurrentPage(0)
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
          total={getTotalAll()}
        />
        <Button
          buttonStyle={ButtonStyle.FILTER}
          isSelect={selectedStatus === '진행중/대기'}
          onClickFunction={() => handleStatusClick('진행중/대기')}
          text="진행중/대기"
          total={getTotalInProgressAndPending()}
          redDot={
            articleSummary?.hasIssue &&
            articleSummary.hasIssue.length > 0 &&
            selectedStatus === '진행중/대기'
          }
        />
        <Button
          buttonStyle={ButtonStyle.FILTER}
          isSelect={selectedStatus === '완료'}
          onClickFunction={() => handleStatusClick('완료')}
          text="완료"
          total={articleSummary?.complete || 0}
          redDot={
            articleSummary?.hasIssue &&
            articleSummary.hasIssue.length > 0 &&
            selectedStatus === '완료'
          }
        />
      </div>
      {articleListCard && articleListCard.length > 0 ? (
        <div className="flex flex-col items-center gap-3 min-h-[400px]">
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
    </main>
  )
}
