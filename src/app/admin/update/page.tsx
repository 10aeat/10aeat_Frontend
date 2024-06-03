'use client'

import Dropdown from '@/components/atoms/Dropdown'
import NavBar from '../_components/atoms/NavBar'
import TableHead from '../_components/atoms/TableHead'
import Table from '../_components/atoms/Table'
import AdminButton, { ButtonStyle } from '@/components/atoms/AdminButton'
import { useState } from 'react'
import AdminTag, { TagStyle } from '../_components/atoms/AdminTag'
import IssueHistoryOrganism from '../_components/organisms/IssueHistory'
import ProgressScheduleOrganism from '../_components/organisms/ProgressSchedule'

export default function ItemUpdate() {
  const [selectedProgressItems, setSelectedProgressItems] = useState<string[]>(
    [],
  )
  const [selectedIssueItems, setSelectedIssueItems] = useState<string[]>([])

  const progressData: ITEM[] = [
    {
      date: '24.08.11',
      title: '제목은 공백 포함 20자 글자 수 제한',
      content: '진행사항 내용은 공백 포함 40글자 수 제한입니다',
    },
    {
      date: '24.07.11',
      title: '제목은 공백 포함 20자 글자 수 제한',
      content: '진행사항 내용은 공백 포함 40글자 수 제한입니다',
    },
  ]

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

  const issueData: ITEM[] = [
    {
      date: '24.08.11',
      title: '이슈는 제목이 공백 포함 30자 글자 제한입니다.',
      isIssue: true,
    },
    {
      date: '24.07.11',
      title: '이슈 이슈',
      isIssue: false,
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
      dataIndex: 'date',
    },
  ]

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
              size={'md'}
            />
          </div>
          <div className="grid gap-y-[72px]">
            <ProgressScheduleOrganism
              columns={progressColumns}
              data={progressData}
              noDataText="유지보수 사안이 어디까지 진행되었는지 작성해 주세요."
              selectedItems={selectedProgressItems}
              setSelectedItems={setSelectedProgressItems}
            />
            <IssueHistoryOrganism
              columns={issueColumns}
              data={issueData}
              noDataText="유지보수 사안과 관련한 이슈 사항이 있다면 작성해 주세요."
              selectedItems={selectedIssueItems}
              setSelectedItems={setSelectedIssueItems}
            />
          </div>
          <div className="flex justify-end">
            <AdminButton buttonStyle={ButtonStyle.PRIMARY} buttonSize={'md'}>
              업데이트하기
            </AdminButton>
          </div>
        </div>
      </div>
    </div>
  )
}
