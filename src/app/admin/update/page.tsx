'use client'

import Dropdown from '@/components/atoms/Dropdown'
import NavBar from '../_components/NavBar'
import TableHead from '../_components/TableHead'
import Table from '../_components/Table'
import AdminButton, { ButtonStyle } from '@/components/atoms/AdminButton'
import { useState } from 'react'

interface Item {
  date: string
  title: string
  content?: string
}

export default function ItemUpdate() {
  const [selectedProgressItems, setSelectedProgressItems] = useState<string[]>(
    [],
  )
  const [selectedIssueItems, setSelectedIssueItems] = useState<string[]>([])

  const progressData: Item[] = [
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

  const issueData: Item[] = [
    {
      date: '24.08.11',
      title: '이슈는 제목이 공백 포함 30자 글자 제한입니다.',
    },
    {
      date: '24.07.11',
      title: '이슈 이슈',
    },
  ]

  const issueColumns = [
    {
      title: '이슈사항',
      dataIndex: 'title',
    },
    {
      title: '게시일자',
      dataIndex: 'date',
    },
  ]

  return (
    <div className="bg-white overflow-y-auto">
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
            <div>
              <TableHead
                imgSrc={'/icons/checklist_minimalistic.svg'}
                title={'사안 진행 현황'}
                btnText={'진행 현황 추가'}
              />
              <Table
                columns={progressColumns}
                data={progressData}
                selectedItems={selectedProgressItems}
                setSelectedItems={setSelectedProgressItems}
              />
            </div>
            <div>
              <TableHead
                imgSrc={'/icons/volume.svg'}
                title={'이슈 공지 히스토리'}
                warn={'*유지 보수 관련 이슈를 등록하면 소유주에게 공지됩니다.'}
                btnText={'이슈 등록하기'}
              />
              <Table
                columns={issueColumns}
                data={issueData}
                selectedItems={selectedIssueItems}
                setSelectedItems={setSelectedIssueItems}
              />
            </div>
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
