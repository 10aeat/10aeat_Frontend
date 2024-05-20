'use client'

import Button, { ButtonStyle } from '@/components/atoms/Button'
import Card, { CardStyle } from '@/components/atoms/Card'
import NavBar from '@/components/atoms/NavBar'
import { useState } from 'react'

// 뱃지 넣어야함
export default function Home() {
  const [selectedStatus, setSelectedStatus] = useState('전체')
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status)
  }

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div className="relative w-[375px] bg-gray-100">
      {/* NavBar */}
      <div className="absolute w-[375px] h-[44px] top-[44px] left-0">
        <NavBar isTextChange={false} isTitle={true}>
          건물 유지보수 사안
        </NavBar>
      </div>
      {/* 상태 버튼 */}
      <div className="gap-[14px] absolute top-[108px] left-[16px] inline-flex items-start">
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
      {/* Card 영역 */}
      <div className="gap-[12px] absolute top-[226px] left-[16px] inline-flex flex-col items-start">
        <div className="relative w-fit mt-[-1.00px] font-Pretendard font-bold text-gray-900 text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
          어떤 사항을 확인해보시겠어요?
        </div>
        <div className="inline-flex items-start gap-[12px] relative">
          <Button
            buttonStyle={ButtonStyle.HUG}
            isSelect={selectedCategory === '전체'}
            onClickFunction={() => handleCategoryClick('전체')}
            text="전체"
            total={7}
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
            isSave={true}
            title="서쪽 계단 F타입 부식 부분 보수"
            state="진행중"
            name="김주은"
            view={10}
            comment={2}
          />
          <Card
            cardStyle={CardStyle.ALL_NO}
            isSave={true}
            title="서쪽 계단 F타입 부식 부분 보수"
            state="대기"
            name="김주은"
            view={10}
            comment={2}
          />
          <Card
            cardStyle={CardStyle.ALL}
            isSave={true}
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
            isSave={true}
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
            isSave={true}
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
            isSave={true}
            img_src="https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMHMTT7DiwDF5-BUGJhrN3YemZfwfckwHeaBMM0phs7pRTiaWZoxT4EYBe3YV5lMRziHY32oMVqrSBwqk4jyc1tXbeLgfTYzEDqa8zSUoqbAe70hocphLaXcw2e2ipKms8A7xnqebRf34U6kb-m-KC96kWDnGZxzW0hLInWAUtCr8gpRH~19ZPEEATiOSCd6tSMR3lGsMCUDmq4YF~Z~jjmM9p54s1VdNoWHEN3wurAxZN6SItiDkQRYMYdybFinnmXYeiVkg826ZCnFs-oNsEHGjEbGfCvVX52cDaN2clOXHTSEdvHUYz3hnQ~bJEBPSDKPVLMcrDhcchuahxNV0w__"
            title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
            period="24.04.30 ~24.05.02"
            state="완료"
            name="김주은"
            view={0}
            comment={0}
          />
        </div>
      </div>
      {/* Pagination */}
    </div>
  )
}
