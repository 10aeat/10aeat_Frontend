'use client'

import Dropdown from '@/components/atoms/Dropdown'
import NavBar from '../_components/NavBar'
import TableHead from '../_components/TableHead'
import Table from '../_components/Table'
import AdminButton, { ButtonStyle } from '@/components/atoms/AdminButton'
import { useState } from 'react'
import AdminTag, { TagStyle } from '../_components/AdminTag'
import InputDetail from './_component/InputDetail'
interface Item {
  issueDate?: string
  startDate?: string
  endDate?: string
  title: string
  issueSort?: string
  isDone?: boolean
  isIssue?: boolean
}

export default function ItemUpdate() {
  const [selectedIssueItems, setSelectedIssueItems] = useState<string[]>([])

  const manageData: Item[] = [
    {
      startDate: '24.05.23',
      endDate: '24.05.24',
      title: '이슈는 제목이 공백 포함 30자 글자 제한입니다.',
      isDone: true,
    },
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

  const issueData: Item[] = [
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
      render: (text: string, record: any) => (
        <>
          {text}
          {record.isIssue && <AdminTag tagStyle={TagStyle.ISSUE_TAG} />}
        </>
      ),
    },
    {
      title: '이슈 종류',
      dataIndex: 'issueSort',
      render: (text: string, record: any) => (
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
    <div className="bg-white overflow-y-auto">
      <div className="px-6 gap-y-4">
        <NavBar
          title="법정 시설물 유지관리 점검 사항 업데이트"
          star="*필수 입력"
        />
        <div className="grid min-h-[736px] gap-y-[80px] w-full">
          <InputDetail />

          <div>
            <TableHead
              imgSrc={'/icons/calendar-dark.svg'}
              title={'시행 일정'}
              star={'*'}
              btnText={'점검 일정 추가'}
            />
            <Table
              columns={manageColumns}
              data={manageData}
              noDataText="시행일자를 추가해주세요."
              selectedItems={selectedIssueItems}
              setSelectedItems={setSelectedIssueItems}
            />
          </div>
          <div>
            <TableHead
              imgSrc={'/icons/volume.svg'}
              title={'이슈 공지 히스토리'}
              warn={'*점검 관련 이슈를 등록하면 소유주에게 공지됩니다.'}
              btnText={'이슈 등록하기'}
            />
            <Table
              columns={issueColumns}
              data={issueData}
              noDataText="법정 시설물 유지관리 점검 사항과 관련한 이슈 사항이 있다면 작성해 주세요."
              selectedItems={selectedIssueItems}
              setSelectedItems={setSelectedIssueItems}
            />
          </div>
          <div className="font-Pretendard">
            비고<div></div>
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
