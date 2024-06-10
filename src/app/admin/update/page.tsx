/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import Dropdown from '@/components/atoms/Dropdown'
import { useEffect, useState } from 'react'
import { useAccessToken } from '@/components/store/AccessTokenStore'
import NavBar from '../_components/atoms/NavBar'
import AdminTag, { TagStyle } from '../_components/atoms/AdminTag'
import IssueHistoryOrganism from '../_components/organisms/IssueHistory'
import ProgressScheduleOrganism from '../_components/organisms/ProgressSchedule'
import AdminButton, { ButtonStyle } from '../_components/atoms/AdminButton'

export default function ItemUpdate(repairArticleId: number) {
  const { accessToken } = useAccessToken()
  const [selectedProgressItems, setSelectedProgressItems] = useState<string[]>(
    [],
  )
  const [selectedIssueItems, setSelectedIssueItems] = useState<string[]>([])
  const [progressData, setProgressData] = useState<MANAGER_REPAIR_PROGRESS[]>(
    [],
  )
  const [issueData, setIssueData] = useState<ISSUE_DATA[]>([])

  const progressColumns = [
    {
      title: '진행 일자',
      dataIndex: 'date',
    },
    {
      title: '진행 사항 제목',
      dataIndex: 'title',
    },
    {
      title: '진행 사항 내용',
      dataIndex: 'content',
    },
  ]

  const issueColumns = [
    {
      title: '이슈사항',
      dataIndex: 'title',
      render: (text: string) => (
        <>
          {text}
          <AdminTag tagStyle={TagStyle.ISSUE_TAG} />
        </>
      ),
    },
    {
      title: '게시일자',
      dataIndex: 'date',
    },
  ]

  const fetchRepairArticles = async () => {
    try {
      const response = await fetch(
        // `http://10aeat.com/repair/articles/progress/${repairArticleId}`,
        `http://10aeat.com/repair/articles/progress/1`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            AccessToken: accessToken,
          },
        },
      )

      const result = await response.json()
      setProgressData(result.data) // 받아온 데이터를 state에 저장
      console.log(result.data)
    } catch (error) {
      console.error('ERROR:', error)
    }
  }

  const fetchRepairIssues = async () => {
    try {
      const response = await fetch(
        // `http://10aeat.com/issues/check/repair/${repairArticleId}`,
        `http://10aeat.com/issues/check/repair/1`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            AccessToken: accessToken,
          },
        },
      )

      const result = await response.json()
      setIssueData(result.data) // 받아온 데이터를 state에 저장
      console.log(result.data)
    } catch (error) {
      console.error('ERROR:', error)
    }
  }

  useEffect(() => {
    fetchRepairArticles()
    fetchRepairIssues()
  }, [repairArticleId, accessToken, fetchRepairArticles, fetchRepairIssues])

  return (
    <div className="bg-white overflow-y-auto pb-[45px]">
      <div className="px-6 gap-y-4">
        <NavBar title="진행 현황 / 이슈 사항 업데이트" />
        <div className="grid min-h-[736px] gap-y-[80px] w-full">
          <div className="flex gap-x-[50px] h-[48px]">
            <span className="flex font-Pretendard items-center font-medium capitalize tracking-[-0.32px]">
              진행상태
            </span>
            <Dropdown
              options={['대기', '진행중', '완료']}
              isDisabled={false}
              size="md"
            />
          </div>
          <div className="grid gap-y-[72px]">
            <ProgressScheduleOrganism
              columns={progressColumns}
              noDataText="유지보수 사안이 어디까지 진행되었는지 작성해 주세요."
              progressData={progressData}
              selectedItems={selectedProgressItems}
              setSelectedItems={setSelectedProgressItems}
              repairArticleId={1}
              accessToken={accessToken}
            />
            {progressData.length > 0 && (
              <IssueHistoryOrganism
                columns={issueColumns}
                noDataText="유지보수 사안과 관련한 이슈 사항이 있다면 작성해 주세요."
                issueData={issueData}
                selectedItems={selectedIssueItems}
                setSelectedItems={setSelectedIssueItems}
                articleId={1}
                accessToken={accessToken}
              />
            )}
          </div>
          <div className="flex justify-end">
            <AdminButton buttonStyle={ButtonStyle.PRIMARY} buttonSize="md">
              업데이트하기
            </AdminButton>
          </div>
        </div>
      </div>
    </div>
  )
}
