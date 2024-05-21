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
import styled from 'styled-components'

interface OverlayProps {
  show: boolean
}

// 배경 오버레이 스타일
const Overlay = styled.div<OverlayProps>`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.72);
  z-index: 10;
  justify-content: center;
  align-items: center;
`

interface RepairDetailProps {
  issueCheck: boolean
}

export default function RepairDetail({ issueCheck }: RepairDetailProps) {
  const { isSave } = useSaveStore()
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
        <Overlay show={isVisible}>
          <Issue
            issueStyle={IssueStyle.ISSUE_ALERT}
            title="이슈 사항 제목"
            content="여기에 내용을 입력하세요."
            onConfirm={handleConfirm}
          />
        </Overlay>
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
