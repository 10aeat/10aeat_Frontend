'use client'

import NavBar from '../_components/atoms/NavBar'
import { useState } from 'react'
import AdminTag, { TagStyle } from '../_components/atoms/AdminTag'
import InputDetail from './_component/InputDetail'
import ExecuteScheduleOrganism from '../_components/organisms/ExecuteSchedule'
import IssueHistoryOrganism from '../_components/organisms/IssueHistory'
import AdminButton, { ButtonStyle } from '../_components/atoms/AdminButton'
import TextArea from '@/components/atoms/TextArea'

export default function ItemUpdate() {
  const [selectedManageItems, setSelectedManageItems] = useState<string[]>([])
  const [selectedIssueItems, setSelectedIssueItems] = useState<string[]>([])

  const manageData: ITEM[] = [
    // {
    //   startDate: '24.05.23',
    //   endDate: '24.05.24',
    //   title: '이슈는 제목이 공백 포함 30자 글자 제한입니다.',
    //   isDone: true,
    // },
    // {
    //   startDate: '24.05.25',
    //   endDate: '24.05.26',
    //   title: '이슈는 제목이 공백 포함 30자 글자 제한',
    //   isDone: true,
    // },
  ]

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

  const issueData: ITEM[] = [
    {
      issueDate: '24.08.11',
      title: '이슈는 제목이 공백 포함 30자 글자 제한입니다.',
      isIssue: true,
      issueSort: '일반',
    },
    {
      issueDate: '24.07.11',
      title: '이슈 이슈',
      isIssue: false,
      issueSort: '일정 변경',
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
      title: '이슈 종류',
      dataIndex: 'issueSort',
      render: (text: string, record: ITEM) => (
        <>
          {record.issueSort && (
            <AdminTag tagStyle={TagStyle.TAG_SORT} tagName={text} />
          )}
        </>
      ),
    },
    {
      title: '게시일자',
      dataIndex: 'issueDate',
    },
  ]

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
              data={issueData}
              noDataText="법정 시설물 유지관리 점검 사항과 관련한 이슈 사항이 있다면 작성해 주세요."
              selectedItems={selectedIssueItems}
              setSelectedItems={setSelectedIssueItems}
            />
          )}
          <div className="font-Pretendard flex gap-x-[50px] items-center">
            비고
            <TextArea
              placeholder="내용을 입력하세요."
              width="480px"
              text="16px"
            />
          </div>
          <div className="flex justify-end">
            <AdminButton buttonStyle={ButtonStyle.PRIMARY} buttonSize={'md'}>
              등록하기
            </AdminButton>
          </div>
        </div>
      </div>
    </div>
  )
}
