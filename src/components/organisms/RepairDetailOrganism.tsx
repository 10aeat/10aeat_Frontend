'use client'

import AdminCard from '@/app/admin/_components/atoms/AdminCard'
import { useState, useEffect } from 'react'
import Issue, { IssueStyle } from '../atoms/Issue'
import NavBar from '../atoms/NavBar'
import NoBox from '../atoms/NoBox'
import ShareBtn from '../atoms/ShareBtn'
import TrackingProgress from '../atoms/TrackingProgress'
import AgendaContent from '../molecules/AgendaContent'

export default function RepairDetailOrganism({
  repairArticleId,
}: {
  repairArticleId: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [articleData, setArticleData] = useState<REPAIR_ARTICLE_DETAIL>()
  const accesstoken =
    'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJyb2xlIjoiVEVOQU5UIiwiaWF0IjoxNzE3NTYyMjg4LCJleHAiOjE3MTc1NjQwODh9.pewYiBmFBUkXHq2TBrSangJx5qkEtQbGgOKAT8i9mPs'

  useEffect(() => {
    const getRepairArticleData = async () => {
      try {
        const getRepairArticleResponse = await fetch(
          `http://10aeat.com/repair/articles/${repairArticleId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accesstoken}`,
            },
          },
        )
        const repairArticleData = await getRepairArticleResponse.json()
        setArticleData(repairArticleData)
        console.log(repairArticleData)
      } catch (error) {
        console.error(error)
      }
    }
    getRepairArticleData()
  }, [repairArticleId])

  const handleConfirm = () => {
    setIsVisible(false)
  }

  return (
    <div className="flex flex-col w-full items-center">
      {/* 이슈 부분 redDot 어떻게 받아와서 issue해줄지 생각하고 api 연결 코드 쓰기 */}
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
      <NavBar isTitle={false} isTextChange />
      <Issue
        issueStyle={IssueStyle.ISSUE_TOGGLE}
        title="이슈 사항 제목"
        content="여기에 내용을 입력하세요."
      />
      {articleData && (
        <>
          <div className="px-4 justify-center">
            <div className="font-bold text-lg font-Pretendard mb-3">
              사안 내용
            </div>
            <AgendaContent
              category={articleData.category}
              progress={articleData.progress}
              isSave={articleData.isSave}
              title={articleData.title}
              content={articleData.content}
              updatedAt={articleData.updatedAt}
              managerName={articleData.managerName}
              managerId={articleData.managerId}
              createdAt={articleData.createdAt}
              imageUrls={articleData.imageUrls}
              startConstruction={articleData.startConstruction}
              endConstruction={articleData.endConstruction}
              company={articleData.company}
              companyWebsite={articleData.companyWebsite}
            />
          </div>
          <div className="px-4 mt-8 mb-[15px]">
            <div className="font-bold text-lg font-Pretendard mb-3">
              진행 현황
            </div>
            <TrackingProgress repairArticleId={repairArticleId} />
          </div>
          <ShareBtn />
          <div className="px-4 mt-8">
            <div className="font-bold text-lg font-Pretendard mb-3">댓글</div>
            <NoBox type="댓글" />
          </div>
          <div className="px-4 mt-8 mb-[100px]">
            <div className="font-bold text-lg font-Pretendard mb-3">담당자</div>
            <AdminCard managerId={articleData.managerId} />
          </div>
        </>
      )}
    </div>
  )
}
