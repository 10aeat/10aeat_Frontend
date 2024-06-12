'use client'

import Button, { ButtonStyle } from '@/components/atoms/Button'
import Card, { CardStyle } from '@/components/atoms/Card'
import NavBar from '@/components/atoms/NavBar'
import Pagination from '@/components/atoms/Pagination'
import { useEffect, useState } from 'react'
import { useAccessToken } from '@/components/store/AccessTokenStore'
import { useRouter } from 'next/navigation'
import NoData from '@/components/atoms/NoData'

export default function Home() {
  const { accessToken } = useAccessToken()
  const router = useRouter()

  // OK
  // 유지보수 게시글 요약 조회
  const [repairSummary, setRepairSummary] = useState<REPAIR_SUMMARY>({
    complete: 0,
    completeRedDot: false,
    inProgressAndPending: 0,
    inProgressAndPendingRedDot: false,
    total: 0,
  })

  // 유지보수 게시글 전체 조회
  const [repairList, setRepairList] = useState<REPAIR_LIST>({
    pageSize: 20,
    currentPage: 0,
    totalElements: 0,
    totalPages: 1,
    articles: [],
  })

  const [articleList, setArticleList] = useState<REPAIR_LIST_ARTICLE[]>([])

  // 버튼 조작
  const [selectedStatus, setSelectedStatus] = useState('전체')
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const [categoryCounts, setCategoryCounts] = useState({
    INSTALL: 0,
    REPAIR: 0,
    REPLACE: 0,
  })

  const [currentPage, setCurrentPage] = useState(0)

  // OK
  useEffect(() => {
    const getRepairSummaryData = async () => {
      try {
        const response = await fetch(
          'https://api.10aeat.com/repair/articles/summary',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )

        const data = await response.json()
        setRepairSummary(data.data)
      } catch (error) {
        console.error(error)
      }
    }
    const getRepairListData = async () => {
      try {
        const response = await fetch(
          `https://api.10aeat.com/repair/articles/list`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )

        const data = await response.json()
        setRepairList(data.data)

        const article = data.data.articles
        // 카테고리별 게시글 수 계산
        const counts = { INSTALL: 0, REPAIR: 0, REPLACE: 0 }
        data.data?.articles.forEach((article: REPAIR_LIST_ARTICLE) => {
          counts[article.category] += 1
        })
        setCategoryCounts(counts)
        setArticleList(article)
      } catch (error) {
        console.error(error)
      }
    }

    getRepairListData()
    getRepairSummaryData()
  }, [accessToken])

  useEffect(() => {
    const getRepairListData = async () => {
      try {
        let url = `https://api.10aeat.com/repair/articles/list?page=${currentPage}`

        // 상태가 '전체'가 아닌 경우에만 상태에 따라 쿼리 파라미터 추가
        if (selectedStatus !== '전체') {
          const statusQuery =
            selectedStatus === '진행중/대기'
              ? 'progress=PENDING&progress=INPROGRESS'
              : 'progress=COMPLETE'
          url += `&${statusQuery}`
        }

        // 카테고리가 '전체'가 아닌 경우에만 카테고리에 따라 쿼리 파라미터 추가
        if (selectedCategory !== '전체') {
          const categoryQuery = `category=${selectedCategory}`
          // 상태가 '전체'가 아닌 경우에는 '&'로 쿼리 파라미터 연결
          url += `&${categoryQuery}`
        }

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            AccessToken: accessToken,
          },
        })
        const data = await response.json()
        setRepairList(data.data)

        const article = data.data.articles
        // 카테고리별 게시글 수 계산
        const counts = { INSTALL: 0, REPAIR: 0, REPLACE: 0 }
        data.data?.articles.forEach((article: REPAIR_LIST_ARTICLE) => {
          counts[article.category] += 1
        })
        setCategoryCounts(counts)
        setArticleList(article)
      } catch (error) {
        console.error(error)
      }
    }
    getRepairListData()
  }, [selectedStatus, selectedCategory, currentPage, accessToken])

  // 상태 버튼 클릭 핸들러
  const handleStatusClick = (status: string) => {
    setCurrentPage(0)
    setSelectedStatus(status)
  }

  // 카테고리 버튼 클릭 핸들러
  const handleCategoryClick = (category: string) => {
    setCurrentPage(0)
    setSelectedCategory(category)
  }

  const handleCardClick = (articleId: number, activeIssueId: number | null) => {
    // 해당 카드의 상세 페이지 경로를 생성합니다.
    const detailPath = `/repair/${articleId}/detail?activeIssueId=${activeIssueId}`

    // 생성한 경로로 페이지를 이동합니다.
    router.push(detailPath)
  }

  // 카드 스타일 지정 함수
  function determineCardStyle(article: REPAIR_LIST_ARTICLE): CardStyle {
    const hasImage = article.imageUrl && article.imageUrl !== ''
    const hasPeriod = article.startConstruction && article.endConstruction

    if (hasImage && hasPeriod) {
      return CardStyle.ALL
    }
    if (!hasImage && hasPeriod) {
      return CardStyle.NO_IMG
    }
    if (hasImage && !hasPeriod) {
      return CardStyle.NO_PERIOD
    }
    return CardStyle.ALL_NO
  }
  return (
    <div className="flex flex-col w-full min-h-[812px] items-center bg-gray-100">
      {/* NavBar */}
      <NavBar isTextChange={false} isTitle>
        건물 유지보수 사안
      </NavBar>
      {/* 상태 버튼 */}
      <div className="gap-[14px] relative inline-flex items-start">
        <Button
          buttonStyle={ButtonStyle.FILTER}
          isSelect={selectedStatus === '전체'}
          onClickFunction={() => handleStatusClick('전체')}
          text="전체"
          total={repairSummary?.total}
        />
        <Button
          buttonStyle={ButtonStyle.FILTER}
          isSelect={selectedStatus === '진행중/대기'}
          onClickFunction={() => handleStatusClick('진행중/대기')}
          text="진행중/대기"
          redDot={repairSummary?.inProgressAndPendingRedDot}
          total={repairSummary?.inProgressAndPending}
        />
        <Button
          buttonStyle={ButtonStyle.FILTER}
          isSelect={selectedStatus === '완료'}
          onClickFunction={() => handleStatusClick('완료')}
          text="완료"
          redDot={repairSummary?.completeRedDot}
          total={repairSummary?.complete}
        />
      </div>
      {/* Card 영역 */}
      <div className="gap-[12px] mt-[28px] relative inline-flex flex-col items-start">
        <div className="relative w-fit mt-[-1.00px] font-Pretendard font-bold text-gray-900 text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
          어떤 사항을 확인해보시겠어요?
        </div>
        <div className="inline-flex items-start gap-[12px] relative">
          <Button
            buttonStyle={ButtonStyle.HUG}
            isSelect={selectedCategory === '전체'}
            onClickFunction={() => handleCategoryClick('전체')}
            text="전체"
          />
          <Button
            buttonStyle={ButtonStyle.HUG}
            isSelect={selectedCategory === 'INSTALL'}
            onClickFunction={() => handleCategoryClick('INSTALL')}
            text="설치"
            total={categoryCounts.INSTALL}
          />
          <Button
            buttonStyle={ButtonStyle.HUG}
            isSelect={selectedCategory === 'REPAIR'}
            onClickFunction={() => handleCategoryClick('REPAIR')}
            text="보수"
            total={categoryCounts.REPAIR}
          />
          <Button
            buttonStyle={ButtonStyle.HUG}
            isSelect={selectedCategory === 'REPLACE'}
            onClickFunction={() => handleCategoryClick('REPLACE')}
            text="교체"
            total={categoryCounts.REPLACE}
          />
        </div>
        <div className="inline-flex flex-col justify-center top-[18px] items-start gap-[18px] relative">
          {articleList && articleList.length > 0 ? (
            articleList.map((article: REPAIR_LIST_ARTICLE) => (
              <Card
                id={article.id}
                // 각 기사에 대한 카드 스타일을 결정합니다.
                cardStyle={determineCardStyle(article)}
                isSave={article.isSave}
                // 다른 속성들도 동적으로 전달합니다.
                title={article.title}
                state={
                  // eslint-disable-next-line no-nested-ternary
                  article.progress === 'COMPLETE'
                    ? '완료'
                    : article.progress === 'INPROGRESS'
                      ? '진행중'
                      : '대기'
                }
                name={article.managerName}
                // 이미지 URL이 존재하면 전달하고, 아니면 빈 문자열을 전달합니다.
                img_src={article.imageUrl || ''}
                start={article.startConstruction}
                end={article.endConstruction}
                view={article.viewCount}
                comment={article.commentCount}
                redDot={article.redDot}
                key={article.id} // 각 카드에 고유한 key를 제공합니다.
                onClickFunction={() =>
                  handleCardClick(article.id, article.activeIssueId)
                }
              />
            ))
          ) : (
            <div className="w-[343px]">
              <NoData />
            </div>
          )}
        </div>
        <div className=" w-full  mt-8 !flex justify-center ">
          <Pagination
            totalItems={repairList?.totalElements}
            itemsPerPage={repairList?.pageSize}
            currentPage={currentPage + 1} // currentPage 추가
            onPageChange={setCurrentPage} // 페이지 변경 이벤트 핸들러 추가
          />
        </div>
      </div>
    </div>
  )
}
