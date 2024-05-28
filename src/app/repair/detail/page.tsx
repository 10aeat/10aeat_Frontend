'use client'

import AdminCard from '@/components/atoms/AdminCard'
import Issue, { IssueStyle } from '@/components/atoms/Issue'
import NavBar from '@/components/atoms/NavBar'
import NoBox from '@/components/atoms/NoBox'
import ShareBtn from '@/components/atoms/ShareBtn'
import TrackingProgress from '@/components/atoms/TrackingProgress'
import AgendaContent from '@/components/molecules/AgendaContent'
import { useSaveStore } from '@/components/store/SaveStore'
import { useState, useEffect } from 'react'

interface RepairDetailProps {
  issueCheck: boolean
}

export default function RepairDetail({ issueCheck }: RepairDetailProps) {
  const { isSave } = useSaveStore()
  issueCheck = true
  const [isVisible, setIsVisible] = useState(issueCheck)

  useEffect(() => {
    setIsVisible(issueCheck)
  }, [issueCheck])

  const handleConfirm = () => {
    setIsVisible(false)
  }

  return (
    <div className="flex flex-col w-full items-center ">
      {isVisible && (
        <div
          className={`fixed inset-0 z-10 flex items-center justify-center bg-[rgba(0,0,0,0.72)] ${isVisible ? 'flex' : 'hidden'}`}
        >
          <Issue
            issueStyle={IssueStyle.ISSUE_ALERT}
            title="이슈 사항 제목"
            content="여기에 내용을 입력하세요."
            onConfirm={handleConfirm}
          />
        </div>
      )}
      <NavBar isTitle={false} isTextChange={true} />
      <Issue
        issueStyle={IssueStyle.ISSUE_TOGGLE}
        title="이슈 사항 제목"
        content="여기에 내용을 입력하세요."
      />
      <div className="px-4 w-full">
        <div className="font-bold text-lg font-Pretendard mb-3">사안 내용</div>
        <AgendaContent
          category="설치"
          progress="INPROGRESS"
          isSave={isSave}
          title="2층 우수관 하자 발생 조치"
          content="금년 겨울 혹한기에 실내보온이 약해서 추위로 환경의 질이 떨어진 점과
            철도소음으로 일부 입주사들이 불편사항을 호소하였습니다. 추위와
            소음문제는 단일창으로 설계된 건물의 구조적 문제와 역세권에 위치한
            문제에서 파생하였고, 해결방안으로 이중창문을 설치하는 것이 유일한
            대안이라고 판단하였습니다. 한 호실당 설치 비용은 250만원으로
            예상됩니다. 5.6 삼성중공업에 설치요구 공문을 발송하였습니다."
          updatedAt="2024.05.06"
          adminName="김주은"
        />
      </div>
      <div className="px-4 mt-8 w-full mb-[15px]">
        <div className="font-bold text-lg font-Pretendard mb-3">진행 현황</div>
        <TrackingProgress />
      </div>
      <ShareBtn />
      <div className="px-4 w-full mt-8">
        <div className="font-bold text-lg font-Pretendard mb-3">댓글</div>
        <NoBox type="댓글" />
      </div>
      <div className="px-4 w-full mt-8 mb-[100px]">
        <div className="font-bold text-lg font-Pretendard mb-3">담당자</div>
        <AdminCard name="김주은" mail="abc@abc.com" phone="01012345678" />
      </div>
    </div>
  )
}
