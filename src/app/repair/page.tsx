'use client'

import Button, { ButtonStyle } from '@/components/atoms/Button'
import Card, { CardStyle } from '@/components/atoms/Card'
import NavBar from '@/components/atoms/NavBar'
import Pagination from '@/components/atoms/Pagination'
import { useEffect, useState } from 'react'
import { useAccessToken } from '@/components/store/AccessTokenStore'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { accessToken, setAccessToken } = useAccessToken()
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
          'http://10aeat.com/repair/articles/summary',
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

    getRepairSummaryData()
  }, [accessToken])

  useEffect(() => {
    const getRepairListData = async () => {
      try {
        const response = await fetch(`http://10aeat.com/repair/articles/list`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            AccessToken: accessToken,
          },
        })
        const data = await response.json()
        setRepairList(data.data)

        // 카테고리별 게시글 수 계산
        const counts = { INSTALL: 0, REPAIR: 0, REPLACE: 0 }
        data.data.articles.forEach((article: REPAIR_LIST_ARTICLE) => {
          counts[article.category] += 1
        })
        setCategoryCounts(counts)
      } catch (error) {
        console.error(error)
      }
    }

    getRepairListData()
  }, [accessToken])

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

  // // 페이지네이션 핸들러
  // const handlePageChange = (page: number) => {
  //   setRepairList((prev) => ({ ...prev, currentPage: page }))
  // }
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // 페이지 변경에 필요한 다른 동작을 수행합니다.
    // 예: 해당 페이지의 데이터를 가져오는 등의 비동기 작업 수행 가능
  }

  const handleCardClick = (articleId: number) => {
    // 해당 카드의 상세 페이지 경로를 생성합니다.
    const detailPath = `/repair/${articleId}/detail`

    // 생성한 경로로 페이지를 이동합니다.
    router.push(detailPath)
  }

  // console.log(repairSummary)
  // console.log(repairList)

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
  console.log(currentPage)

  return (
    <div className="flex flex-col w-full items-center ">
      {/* NavBar */}
      <NavBar isTextChange={false} isTitle>
        건물 유지보수 사안
      </NavBar>
      {/* 상태 버튼 */}
      <div className="gap-[14px] relative left-[16px] inline-flex items-start">
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
      <div className="gap-[12px] top-[28px] relative left-[16px] inline-flex flex-col items-start">
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
            isSelect={selectedCategory === '설치'}
            onClickFunction={() => handleCategoryClick('설치')}
            text="설치"
            total={categoryCounts.INSTALL}
          />
          <Button
            buttonStyle={ButtonStyle.HUG}
            isSelect={selectedCategory === '보수'}
            onClickFunction={() => handleCategoryClick('보수')}
            text="보수"
            total={categoryCounts.REPAIR}
          />
          <Button
            buttonStyle={ButtonStyle.HUG}
            isSelect={selectedCategory === '교체'}
            onClickFunction={() => handleCategoryClick('교체')}
            text="교체"
            total={categoryCounts.REPLACE}
          />
        </div>
        <div className="inline-flex flex-col top-[18px] items-start gap-[18px] relative">
          {/* {filteredArticles?.map((article: REPAIR_LIST_ARTICLE) => (
            <Card
              // 각 기사에 대한 카드 스타일을 결정합니다.
              cardStyle={determineCardStyle(article)}
              isSave={article.isSave}
              // 다른 속성들도 동적으로 전달합니다.
              title={article.title}
              state={article.progress === 'COMPLETE' ? '완료' : '진행중'}
              name={article.managerName}
              // 이미지 URL이 존재하면 전달하고, 아니면 빈 문자열을 전달합니다.
              img_src={article.imageUrl || ''}
              // 기간 정보를 포맷팅하여 전달합니다.
              period={`${article.startConstruction} ~ ${article.endConstruction}`}
              view={article.viewCount}
              comment={article.commentCount}
              key={article.id} // 각 카드에 고유한 key를 제공합니다.
              onClickFunction={() => handleCardClick(article.id)}
            />
          ))} */}
        </div>
        <div className=" w-full  mt-8 !flex justify-center ">
          <Pagination
            totalItems={repairList?.totalElements}
            itemsPerPage={repairList?.pageSize}
          />
        </div>
      </div>
    </div>
  )
}
