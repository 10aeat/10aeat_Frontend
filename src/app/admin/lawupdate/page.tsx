/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */

'use client'

import { useEffect, useState } from 'react'
import TextArea from '@/components/atoms/TextArea'
import { useParams } from 'next/navigation'
import { useAccessToken } from '@/components/store/AccessTokenStore'
import NavBar from '../_components/atoms/NavBar'
import AdminTag, { TagStyle } from '../_components/atoms/AdminTag'
import InputDetail from './_component/InputDetail'
import ExecuteScheduleOrganism from '../_components/organisms/ExecuteSchedule'
import IssueHistoryOrganism from '../_components/organisms/IssueHistory'
import AdminButton, { ButtonStyle } from '../_components/atoms/AdminButton'

export default function ItemUpdate() {
  const { manageArticleId } = useParams()
  const { accessToken } = useAccessToken()
  const [selectedManageItems, setSelectedManageItems] = useState<string[]>([])
  const [selectedIssueItems, setSelectedIssueItems] = useState<string[]>([])
  const [issueData, setIssueData] = useState<ISSUE_DATA[]>([])

  const manageColumns = [
    {
      title: '시작일',
      dataIndex: 'startDate',
    },
    {
      title: '종료일',
      dataIndex: 'endDate',
    },
    {
      title: '일정 변경 사유',
      dataIndex: 'title',
    },
    {
      title: '완료 여부',
      dataIndex: 'isDone',
    },
  ]

  // manageData 없는 거 오류 안나게 하려고 위의 코드 복붙
  const manageData = [
    {
      title: '시작일',
      dataIndex: 'startDate',
    },
    {
      title: '종료일',
      dataIndex: 'endDate',
    },
    {
      title: '일정 변경 사유',
      dataIndex: 'title',
    },
    {
      title: '완료 여부',
      dataIndex: 'isDone',
    },
  ]

  const issueColumns = [
    {
      title: '이슈사항',
      dataIndex: 'title',
      render: (text: string, record: ITEM) => (
        <>
          {text}
          {record.isIssue && <AdminTag tagStyle={TagStyle.ISSUE_TAG} />}
        </>
      ),
    },
    {
      title: '게시일자',
      dataIndex: 'issueDate',
    },
  ]

  const fetchManageIssues = async () => {
    try {
      const response = await fetch(
        // `https://api.10aeat.com/issues/check/manage/{manageArticleId}`,
        `https://api.10aeat.com/issues/check/manage/1`,
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
    fetchManageIssues()
  }, [accessToken, manageArticleId, fetchManageIssues])

  return (
    <div className="bg-white overflow-y-auto pb-[45px]">
      <div className="px-6 gap-y-4">
        <NavBar
          title="법정 시설물 유지관리 점검 사항 업데이트"
          star="*필수 입력"
        />
        <div className="grid min-h-[736px] gap-y-[80px] w-full">
          <InputDetail />
          <ExecuteScheduleOrganism
            columns={manageColumns}
            data={manageData}
            noDataText="시행일자를 추가해주세요."
            selectedItems={selectedManageItems}
            setSelectedItems={setSelectedManageItems}
          />
          {manageData.length > 0 && (
            <IssueHistoryOrganism
              columns={issueColumns}
              issueData={issueData}
              noDataText="법정 시설물 유지관리 점검 사항과 관련한 이슈 사항이 있다면 작성해 주세요."
              selectedItems={selectedIssueItems}
              setSelectedItems={setSelectedIssueItems}
              articleId={0}
              accessToken={accessToken}
            />
          )}
          <div className="font-Pretendard flex gap-x-[50px] items-center">
            비고
            <TextArea
              placeholder="내용을 입력하세요."
              width="480px"
              text="16px"
              onChange={(e) => e.target.value}
            />
          </div>
          <div className="flex justify-end">
            <AdminButton buttonStyle={ButtonStyle.PRIMARY} buttonSize="md">
              등록하기
            </AdminButton>
          </div>
        </div>
      </div>
    </div>
  )
}
