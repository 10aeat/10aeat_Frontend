'use client'

import Button, { ButtonStyle } from '@/components/atoms/Button'
import Card, { CardStyle } from '@/components/atoms/Card'
import NavBar from '@/components/atoms/NavBar'
import Pagination from '@/components/atoms/Pagination'
import { useEffect, useState } from 'react'
import { useAccessToken } from '@/components/store/AccessTokenStore'

// 뱃지 넣어야함
export default function Home() {
  // 유지보수 게시글 요약 조회
  const [repairSummary, setRepairSummary] = useState([])
  const { accessToken } = useAccessToken()
  // 유지보수 게시글 전체 조회
  const [repairList, setRepairList] = useState([])

  console.log(accessToken)
  useEffect(() => {
    const getRepairSummaryData = async () => {
      try {
        const getRepairSummaryResponse = await fetch(
          'http://10aeat.com/repair/articles/summary',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: `Bearer ${accessToken}`,
            },
          },
        )
        const repairArticleData = await getRepairSummaryResponse.json()
        setRepairSummary(repairArticleData)
        console.log(repairArticleData)
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
              // Authorization: `Bearer ${accesstoken}`,
            },
          },
        )
        const repairArticleData = await getRepairSummaryResponse.json()
        setRepairList(repairArticleData)
        console.log(repairArticleData)
      } catch (error) {
        console.error(error)
      }
    }
    getRepairSummaryData()
  }, [])
  // GET /repair/articles/summary 유지보수 사안 요약
  const repairStatus = {
    all: 18,
    inprogressAndpending: 2,
    complete: 2,
  }
  // GET /repair/articles/list 유지보수 게시글 전체조회
  const repairArticle = [
    {
      id: 1,
      category: 'INSTALL', // 보수 종류
      managerName: '김관리', // 관리자 이름
      progress: 'INPROGRESS', // 진행 상황
      title: '2층 우수관 하자발생 조치',
      startConstruction: '2024-11-08T11:44:30.327959', // 공사 시작
      endConstruction: '2024-12-08T11:44:30.327959', // 공사 종료
      commentCount: 5, // 댓글 개수
      viewCount: 150, // 조회수
      isSave: false, // 사용자가 해당 게시글을 저장했는지 여부(별 표시)
      issueCheck: false, // 사용자가 이슈를 확인했는지(사용자가 이슈를 확인하면 true로 변환)
      isNewArticle: true, // 게시글 작성 시점으로부터 24시간이 지났는지 여부
      imageUrl: '이미지 url',
    },
    {
      id: 2,
      category: 'REPLACE',
      managerName: '김관리',
      progress: 'COMPLETE',
      title: '이중창문 설치 진행',
      startConstruction: '2024-11-08T11:44:30.327959',
      endConstruction: '2024-12-08T11:44:30.327959',
      commentCount: 2,
      viewCount: 40,
      isSave: true,
      issueCheck: false,
      isNewArticle: true,
      imageUrl: '이미지 url',
    },
  ]
  const [selectedStatus, setSelectedStatus] = useState('전체')
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status)
  }

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    // <div className="absolute w-[375px] bg-gray-100 pb-[80px]">
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
          total={repairStatus.all}
        />
        <Button
          buttonStyle={ButtonStyle.FILTER}
          isSelect={selectedStatus === '진행중/대기'}
          onClickFunction={() => handleStatusClick('진행중/대기')}
          text="진행중/대기"
          total={repairStatus.inprogressAndpending}
        />
        <Button
          buttonStyle={ButtonStyle.FILTER}
          isSelect={selectedStatus === '완료'}
          onClickFunction={() => handleStatusClick('완료')}
          text="완료"
          total={repairStatus.complete}
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
            total={7}
          />
          <Button
            buttonStyle={ButtonStyle.HUG}
            isSelect={selectedCategory === '보수'}
            onClickFunction={() => handleCategoryClick('보수')}
            text="보수"
            total={7}
          />
          <Button
            buttonStyle={ButtonStyle.HUG}
            isSelect={selectedCategory === '교체'}
            onClickFunction={() => handleCategoryClick('교체')}
            text="교체"
            total={7}
          />
        </div>
        <div className="inline-flex flex-col top-[18px] items-start gap-[18px] relative">
          <Card
            cardStyle={CardStyle.ALL_NO}
            isSave
            title="서쪽 계단 F타입 부식 부분 보수"
            state="진행중"
            name="김주은"
            view={10}
            comment={2}
          />
          <Card
            cardStyle={CardStyle.ALL_NO}
            isSave
            title="서쪽 계단 F타입 부식 부분 보수"
            state="대기"
            name="김주은"
            view={10}
            comment={2}
          />
          <Card
            cardStyle={CardStyle.ALL}
            isSave
            img_src="https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMHMTT7DiwDF5-BUGJhrN3YemZfwfckwHeaBMM0phs7pRTiaWZoxT4EYBe3YV5lMRziHY32oMVqrSBwqk4jyc1tXbeLgfTYzEDqa8zSUoqbAe70hocphLaXcw2e2ipKms8A7xnqebRf34U6kb-m-KC96kWDnGZxzW0hLInWAUtCr8gpRH~19ZPEEATiOSCd6tSMR3lGsMCUDmq4YF~Z~jjmM9p54s1VdNoWHEN3wurAxZN6SItiDkQRYMYdybFinnmXYeiVkg826ZCnFs-oNsEHGjEbGfCvVX52cDaN2clOXHTSEdvHUYz3hnQ~bJEBPSDKPVLMcrDhcchuahxNV0w__"
            title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
            period="24.04.30 ~24.05.02"
            state="진행중"
            name="김주은"
            view={0}
            comment={0}
          />
          <Card
            cardStyle={CardStyle.ALL}
            isSave
            img_src="https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMHMTT7DiwDF5-BUGJhrN3YemZfwfckwHeaBMM0phs7pRTiaWZoxT4EYBe3YV5lMRziHY32oMVqrSBwqk4jyc1tXbeLgfTYzEDqa8zSUoqbAe70hocphLaXcw2e2ipKms8A7xnqebRf34U6kb-m-KC96kWDnGZxzW0hLInWAUtCr8gpRH~19ZPEEATiOSCd6tSMR3lGsMCUDmq4YF~Z~jjmM9p54s1VdNoWHEN3wurAxZN6SItiDkQRYMYdybFinnmXYeiVkg826ZCnFs-oNsEHGjEbGfCvVX52cDaN2clOXHTSEdvHUYz3hnQ~bJEBPSDKPVLMcrDhcchuahxNV0w__"
            title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
            period="24.04.30 ~24.05.02"
            state="진행중"
            name="김주은"
            view={0}
            comment={0}
          />
          <Card
            cardStyle={CardStyle.NO_IMG}
            isSave
            img_src=""
            title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
            period="24.04.30 ~24.05.02"
            state="진행중"
            name="김주은"
            view={0}
            comment={0}
          />
          <Card
            cardStyle={CardStyle.NO_PERIOD}
            isSave={false}
            img_src="https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMHMTT7DiwDF5-BUGJhrN3YemZfwfckwHeaBMM0phs7pRTiaWZoxT4EYBe3YV5lMRziHY32oMVqrSBwqk4jyc1tXbeLgfTYzEDqa8zSUoqbAe70hocphLaXcw2e2ipKms8A7xnqebRf34U6kb-m-KC96kWDnGZxzW0hLInWAUtCr8gpRH~19ZPEEATiOSCd6tSMR3lGsMCUDmq4YF~Z~jjmM9p54s1VdNoWHEN3wurAxZN6SItiDkQRYMYdybFinnmXYeiVkg826ZCnFs-oNsEHGjEbGfCvVX52cDaN2clOXHTSEdvHUYz3hnQ~bJEBPSDKPVLMcrDhcchuahxNV0w__"
            title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
            period="24.04.30 ~24.05.02"
            state="대기"
            name="김주은"
            view={0}
            comment={0}
          />
          <Card
            cardStyle={CardStyle.ALL_NO}
            isSave
            img_src="https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMHMTT7DiwDF5-BUGJhrN3YemZfwfckwHeaBMM0phs7pRTiaWZoxT4EYBe3YV5lMRziHY32oMVqrSBwqk4jyc1tXbeLgfTYzEDqa8zSUoqbAe70hocphLaXcw2e2ipKms8A7xnqebRf34U6kb-m-KC96kWDnGZxzW0hLInWAUtCr8gpRH~19ZPEEATiOSCd6tSMR3lGsMCUDmq4YF~Z~jjmM9p54s1VdNoWHEN3wurAxZN6SItiDkQRYMYdybFinnmXYeiVkg826ZCnFs-oNsEHGjEbGfCvVX52cDaN2clOXHTSEdvHUYz3hnQ~bJEBPSDKPVLMcrDhcchuahxNV0w__"
            title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
            period="24.04.30 ~24.05.02"
            state="완료"
            name="김주은"
            view={0}
            comment={0}
          />
        </div>
        <div className=" w-full  mt-8 !flex justify-center ">
          <Pagination totalItems={270} itemsPerPage={20} />
        </div>
      </div>
      {/* Pagination */}
    </div>
  )
}
