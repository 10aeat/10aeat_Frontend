'use client'

import AdminCard from '@/app/admin/_components/atoms/AdminCard'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Issue, { IssueStyle } from '../atoms/Issue'
import NavBar from '../atoms/NavBar'
import NoBox from '../atoms/NoBox'
import ShareBtn from '../atoms/ShareBtn'
import TrackingProgress from '../atoms/TrackingProgress'
import AgendaContent from '../molecules/AgendaContent'
import { useAccessToken } from '../store/AccessTokenStore'

export default function RepairDetailOrganism({
  repairArticleId,
}: {
  repairArticleId: string | string[]
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [articleData, setArticleData] = useState<REPAIR_ARTICLE_DETAIL>()
  const [issueData, setIssueData] = useState<{
    title: string
    content: string
  } | null>(null)
  const { accessToken } = useAccessToken()

  useEffect(() => {
    const checkForActiveIssue = async () => {
      try {
        const response = await fetch(
          `http://10aeat.com/articles/repair/issues/${repairArticleId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )
        const data = await response.json()
        if (data?.data) {
          const activeIssue = data.data.find((issue: any) => issue.isActive)
          console.log('Active issue:', activeIssue)

          if (activeIssue) {
            setIsVisible(true)
            const issueResponse = await fetch(
              `http://10aeat.com/articles/issue/detail/${activeIssue.id}`,
              {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  AccessToken: accessToken,
                },
              },
            )
            const issueDetail = await issueResponse.json()
            console.log('Issue detail:', issueDetail)
            setIssueData(issueDetail)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }

    const getRepairArticleData = async () => {
      try {
        const getRepairArticleResponse = await fetch(
          `http://10aeat.com/repair/articles/${repairArticleId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )
        const getRepairData = await getRepairArticleResponse.json()
        setArticleData(getRepairData.data)
        console.log(getRepairData)
        console.log('상세 데이터: ', articleData)
      } catch (error) {
        console.error(error)
      }
    }

    checkForActiveIssue()
    getRepairArticleData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repairArticleId, accessToken])

  const handleConfirm = () => {
    setIsVisible(false)
  }

  return (
    <div className="flex flex-col w-full items-center">
      {issueData && (
        <>
          {isVisible && (
            <div
              className={`fixed inset-0 z-10 flex items-center justify-center bg-[rgba(0,0,0,0.72)] ${isVisible ? 'flex' : 'hidden'}`}
            >
              <Issue
                issueStyle={IssueStyle.ISSUE_ALERT}
                title={issueData?.title}
                content={issueData?.title}
                onConfirm={handleConfirm}
              />
            </div>
          )}
          <NavBar isTitle={false} isTextChange />
          <Issue
            issueStyle={IssueStyle.ISSUE_TOGGLE}
            title={issueData?.title}
            content={issueData?.content}
          />
        </>
      )}
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
