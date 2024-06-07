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
    totalElements: 2,
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

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status)
  }

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  const handleCardClick = (articleId: number) => {
    // 해당 카드의 상세 페이지 경로를 생성합니다.
    const detailPath = `/repair/${articleId}/detail`

    // 생성한 경로로 페이지를 이동합니다.
    router.push(detailPath)
  }

  useEffect(() => {
    const getRepairSummaryData = async () => {
      try {
        const getRepairSummaryResponse = await fetch(
          'http://10aeat.com/repair/articles/summary',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )
        const repairArticleData = await getRepairSummaryResponse.json()
        setRepairSummary(repairArticleData.data)
      } catch (error) {
        console.error(error)
      }
    }
    const getRepairListData = async () => {
      try {
        const getRepairSummaryResponse = await fetch(
          'http://10aeat.com/repair/articles/list?progress=INPROGRESS&progress=PENDING&category=REPAIR&page=0&size=5',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )
        const repairArticleData = await getRepairSummaryResponse.json()
        setRepairList(repairArticleData.data)

        const initialRepairList: REPAIR_LIST = {
          pageSize: 5,
          currentPage: 0,
          totalElements: 10,
          totalPages: 2,
          articles: [
            {
              id: 1,
              category: 'INSTALL',
              managerName: '매니저1',
              progress: 'INPROGRESS',
              title: '설치 작업 1',
              startConstruction: '2024-06-01',
              endConstruction: '2024-06-10',
              createdAt: '2024-05-01',
              updatedAt: '2024-06-02',
              commentCount: 3,
              viewCount: 20,
              isSave: true,
              redDot: false,
              imageUrl: 'https://example.com/image1.jpg',
              activeIssueId: null,
            },
            {
              id: 2,
              category: 'REPAIR',
              managerName: '매니저2',
              progress: 'PENDING',
              title: '보수 작업 1',
              startConstruction: '2024-06-03',
              endConstruction: '2024-06-15',
              createdAt: '2024-05-02',
              updatedAt: '2024-06-03',
              commentCount: 2,
              viewCount: 15,
              isSave: false,
              redDot: true,
              imageUrl: 'https://example.com/image2.jpg',
              activeIssueId: null,
            },
            {
              id: 3,
              category: 'REPLACE',
              managerName: '매니저3',
              progress: 'COMPLETE',
              title: '교체 작업 1',
              startConstruction: '2024-06-05',
              endConstruction: '2024-06-20',
              createdAt: '2024-05-03',
              updatedAt: '2024-06-05',
              commentCount: 1,
              viewCount: 25,
              isSave: true,
              redDot: true,
              imageUrl: 'https://example.com/image3.jpg',
              activeIssueId: null,
            },
            {
              id: 4,
              category: 'INSTALL',
              managerName: '매니저4',
              progress: 'PENDING',
              title: '설치 작업 2',
              startConstruction: '2024-06-10',
              endConstruction: '2024-06-20',
              createdAt: '2024-05-04',
              updatedAt: '2024-06-07',
              commentCount: 4,
              viewCount: 30,
              isSave: true,
              redDot: false,
              imageUrl: '', // 이미지 없음
              activeIssueId: null,
            },
            {
              id: 5,
              category: 'REPAIR',
              managerName: '매니저5',
              progress: 'INPROGRESS',
              title: '보수 작업 2',
              startConstruction: '2024-06-15',
              endConstruction: '2024-06-25',
              createdAt: '2024-05-05',
              updatedAt: '2024-06-08',
              commentCount: 5,
              viewCount: 35,
              isSave: false,
              redDot: true,
              imageUrl: '', // 이미지 없음
              activeIssueId: null,
            },
            {
              id: 6,
              category: 'REPLACE',
              managerName: '매니저6',
              progress: 'PENDING',
              title: '교체 작업 2',
              startConstruction: '', // 기간 없음
              endConstruction: '', // 기간 없음
              createdAt: '2024-05-06',
              updatedAt: '2024-06-10',
              commentCount: 6,
              viewCount: 40,
              isSave: true,
              redDot: false,
              imageUrl: 'https://example.com/image6.jpg',
              activeIssueId: null,
            },
            {
              id: 7,
              category: 'INSTALL',
              managerName: '매니저7',
              progress: 'COMPLETE',
              title: '설치 작업 3',
              startConstruction: '2024-06-25',
              endConstruction: '2024-07-05',
              createdAt: '2024-05-07',
              updatedAt: '2024-06-12',
              commentCount: 7,
              viewCount: 45,
              isSave: false,
              redDot: true,
              imageUrl: 'https://example.com/image7.jpg',
              activeIssueId: null,
            },
            {
              id: 8,
              category: 'REPAIR',
              managerName: '매니저8',
              progress: 'PENDING',
              title: '보수 작업 3',
              startConstruction: '2024-06-30',
              endConstruction: '2024-07-10',
              createdAt: '2024-05-08',
              updatedAt: '2024-06-15',
              commentCount: 8,
              viewCount: 50,
              isSave: true,
              redDot: false,
              imageUrl: 'https://example.com/image8.jpg',
              activeIssueId: null,
            },
            {
              id: 9,
              category: 'REPLACE',
              managerName: '매니저9',
              progress: 'COMPLETE',
              title: '교체 작업 3',
              startConstruction: '2024-07-01',
              endConstruction: '2024-07-15',
              createdAt: '2024-05-09',
              updatedAt: '2024-06-18',
              commentCount: 9,
              viewCount: 55,
              isSave: false,
              redDot: true,
              imageUrl: '', // 이미지 없음
              activeIssueId: null,
            },
            {
              id: 10,
              category: 'INSTALL',
              managerName: '매니저10',
              progress: 'INPROGRESS',
              title: '설치 작업 4',
              startConstruction: '', // 이미지, 기간 둘 다 없음
              endConstruction: '', // 이미지, 기간 둘 다 없음
              createdAt: '2024-05-10',
              updatedAt: '2024-06-20',
              commentCount: 10,
              viewCount: 60,
              isSave: true,
              redDot: false,
              imageUrl: '', // 이미지 없음
              activeIssueId: null,
            },
          ],
        }

        // 초기 데이터 설정
        setRepairList(initialRepairList)

        // 카테고리별 게시글 수 계산
        const counts = { INSTALL: 0, REPAIR: 0, REPLACE: 0 }
        initialRepairList.articles.forEach((article: REPAIR_LIST_ARTICLE) => {
          // repairArticleData.data.articles.forEach((article: Article) => {
          counts[article.category] += 1
        })
        setCategoryCounts(counts)
      } catch (error) {
        console.error(error)
      }
    }
    getRepairSummaryData()
    getRepairListData()
  }, [accessToken])
  // console.log(repairSummary)
  // console.log(repairList)

  // 카드 스타일 지정 함수
  function determineCardStyle(article: REPAIR_LIST_ARTICLE): CardStyle {
    const hasImage = article.imageUrl && article.imageUrl !== ''
    const hasPeriod = article.startConstruction && article.endConstruction

    if (hasImage && hasPeriod) {
      return CardStyle.ALL
    } else if (!hasImage && hasPeriod) {
      return CardStyle.NO_IMG
    } else if (hasImage && !hasPeriod) {
      return CardStyle.NO_PERIOD
    } else {
      return CardStyle.ALL_NO
    }
  }

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
          // total={repairSummary.total}
          total={0}

          // total={repairSummary && repairSummary.total}
        />
        <Button
          buttonStyle={ButtonStyle.FILTER}
          isSelect={selectedStatus === '진행중/대기'}
          onClickFunction={() => handleStatusClick('진행중/대기')}
          text="진행중/대기"
          redDot={repairSummary?.inProgressAndPendingRedDot}
          total={repairSummary?.inProgressAndPending}
          // total={10}
        />
        <Button
          buttonStyle={ButtonStyle.FILTER}
          isSelect={selectedStatus === '완료'}
          onClickFunction={() => handleStatusClick('완료')}
          text="완료"
          redDot={repairSummary?.completeRedDot}
          total={repairSummary?.complete}
          // total={100}
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
          {repairList.articles.map((article: REPAIR_LIST_ARTICLE) => (
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
          ))}
        </div>
        <div className=" w-full  mt-8 !flex justify-center ">
          <Pagination totalItems={270} itemsPerPage={20} />
        </div>
      </div>
    </div>
  )
}
