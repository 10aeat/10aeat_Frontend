'use client'

import React, { useState } from 'react'
import TableDropdown from '@/components/atoms/TableDropdown'
import Image from 'next/image'
import AdminButton, { ButtonStyle } from './AdminButton'

interface Props {
  repairList: REPAIR_LIST
  articleList: REPAIR_LIST_ARTICLE[]
}

export default function AdminListTable({ repairList, articleList }: Props) {
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const categoryMap: { [key: string]: string } = {
    INSTALL: '설치',
    REPAIR: '보수',
    REPLACE: '교체',
  }
  const statusMap: { [key: string]: string } = {
    PENDING: '대기',
    INPROGRESS: '진행중',
    COMPLETE: '완료',
  }
  console.log(articleList)
  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedItems([])
    } else {
      setSelectedItems(articleList?.map((item) => item.id))
    }
    setSelectAll(!selectAll)
  }

  const handleCheckboxChange = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  const isAllSelected =
    selectedItems.length === articleList.length && articleList.length > 0
  return (
    <>
      <div className="w-[1000px] justify-between relative flex py-[12px] mt-[24px] items-center gap-[695px]">
        <span className="font-Pretendard text-[18px] font-semibold leading-[24px] text-gray-900 whitespace-nowrap">
          총{' '}
          <span className="text-[#2463EB]">{repairList?.totalElements}개</span>
          의 게시물이 조회되었습니다.
        </span>
        <div className="flex ml-[-10px] justify-end items-start gap-[4px] whitespace-nowrap">
          <AdminButton
            buttonSize="md"
            isDisabled={!(selectedItems.length > 0)}
            buttonStyle={ButtonStyle.WARNING}
          >
            삭제
          </AdminButton>
        </div>
      </div>
      <div className="mt-[-12px]">
        <table className="flex items-start content-start flex-wrap w-[1000px]">
          <thead className="flex w-[1000px] border-b-[1px] border-solid border-gray-400 bg-gray-100 whitespace-nowrap">
            <tr className="flex w-full h-[56px]">
              <th className="inline-flex px-[16px] py-[28px] items-center gap-[16px]">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleSelectAllChange}
                  style={{
                    borderRadius: 18,
                    width: 24,
                    height: 16,
                  }}
                />
                <div className="font-Pretendard text-[16px] font-medium leading-[24px] capitalize text-gray-900 whitespace-nowrap">
                  유형
                </div>
              </th>
              <th className="flex w-[408px] flex-col items-start">
                <div className="flex justify-center items-center gap-[12px] flex-[1_0_0%]">
                  <div className="flex h-[48px] flex-col justify-center flex-[1_0_0%] overflow-hidden text-gray-900 text-ellipsis whitespace-nowrap font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                    사안내용
                  </div>
                </div>
              </th>
              <th className="inline-flex px-[16px] py-[12px] items-center gap-[12px]">
                <div className="flex justify-center items-center gap-[4px] flex-[1_0_0%]">
                  <div className="flex h-[24px] flex-col justify-center flex-[1_0_0%] text-gray-900 font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                    진행상태
                  </div>
                </div>
              </th>
              <th className="inline-flex px-0 py-[12px] justify-center items-center gap-[12px]">
                <div className="flex h-[24px] flex-col justify-center flex-[1_0_0%] text-gray-900 font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                  진행현황/이슈
                </div>
              </th>
              <th className="inline-flex px-[24px] py-[12px] justify-center items-center gap-[12px]">
                <span className="float text-center text-gray-900 font-Pretendard text-[16px] font-medium leading-[24px] capitalize ">
                  기간유무
                </span>
              </th>
              <th className="inline-flex px-0 py-[12px] items-center gap-[12px]">
                <div className="flex justify-center items-center gap-[4px] flex-[1_0_0%]">
                  <span className="text-center text-gray-900 font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                    게시일/수정일
                  </span>
                </div>
              </th>
              <th className="inline-flex pl-[24px] py-[12px] justify-center items-center gap-[12px]">
                <div className="flex w-[42px] h-[24px] flex-col justify-center text-center text-gray-900 font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                  조회수
                </div>
              </th>
              <th className="inline-flex px-[24px] py-[12px] justify-center items-center gap-[12px]">
                <div className="flex w-[42px] h-[24px] flex-col justify-center text-center text-gray-900 font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                  댓글
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white w-[1000px]">
            {articleList?.map((item) => (
              <tr
                key={item.id}
                className="flex w-[1000px] h-[104px] border-b-[1px] border-solid border-gray-300"
              >
                <td className="flex min-w-[96px] px-[16px] py-[28px] items-center gap-[16px]">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                    style={{
                      borderRadius: 18,
                      minWidth: 24,
                      height: 16,
                    }}
                  />
                  <div className="font-Pretendard text-[16px] font-normal leading-[24px] capitalize text-gray-900 whitespace-nowrap">
                    {categoryMap[item.category]}
                  </div>
                </td>
                <td className="flex max-w-[375px] px-[28px] py-[12px] justify-center items-center gap-[12px]">
                  <div className="flex justify-center items-center gap-[12px] flex-[1_0_0%]">
                    <Image
                      // src={item.imageUrl}
                      src=""
                      width={48}
                      height={48}
                      alt="image"
                      className="w-[48px] h-[48px] rounded-[8px]"
                    />
                    <div
                      style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                      }}
                      className="min-w-[300px] overflow-hidden text-ellipsis font-Pretendard text-gray-900 text-[16px] font-normal leading-[24px] capitalize"
                    >
                      {item.title}
                    </div>
                  </div>
                </td>
                <td className="flex max-w-[88px] px-[16px] py-[12px] whitespace-nowrap items-center gap-[12px] self-stretch">
                  {/* <div className="flex justify-center items-center gap-[4px] flex-[1_0_0%]">
                <div className="flex w-[42px] h-[24px] flex-col justify-center font-Pretendard text-center text-gray-600 text-[16px] font-semibold leading-[24px] capitalize">
                  {item.status}
                </div>
                <Image
                  src="/icons/arrow_down_small.svg"
                  width={24}
                  height={24}
                  alt="arrow_down"
                  className="w-[24px] h-[24px]"
                />
              </div> */}
                  <TableDropdown
                    isDisabled={false}
                    placeholder={statusMap[item?.progress]}
                    options={['대기', '진행중', '완료']}
                  />
                </td>
                <td className="flex min-w-[88px] py-[12px] justify-center whitespace-nowrap items-center gap-[12px] self-stretch">
                  <AdminButton
                    buttonSize="sm"
                    buttonStyle={ButtonStyle.ACCENT}
                    isDisabled={false}
                  >
                    업데이트
                  </AdminButton>
                </td>
                <td className="flex px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
                  <div className="flex w-[42px] h-[24px] flex-col justify-center text-center font-Pretendard text-gray-900 text-[16px] font-medium leading-[24px] capitalize">
                    {/* {item.period} */}
                  </div>
                </td>
                <td className="flex min-w-[88px] px-[12px] py-[12px] justify-center whitespace-nowrap items-center gap-[12px] self-stretch">
                  <div className="flex w-[42px] h-[24px] flex-col justify-center text-center font-Pretendard text-gray-900 text-[16px] font-medium leading-[24px] capitalize">
                    {/* {item.date} */}
                  </div>
                </td>
                <td className="flex min-w-[88px] pl-[36px] py-[12px] justify-center whitespace-nowrap items-center gap-[12px] self-stretch">
                  <div className="flex w-[42px] h-[24px] flex-col justify-center text-center font-Pretendard text-gray-900 text-[16px] font-medium leading-[24px] capitalize">
                    {item.viewCount}
                  </div>
                </td>
                <td className="flex px-[24px] py-[12px] justify-center whitespace-nowrap items-center gap-[12px] self-stretch">
                  <div className="flex w-[42px] h-[24px] flex-col justify-center text-center font-Pretendard text-gray-900 text-[16px] font-medium leading-[24px] capitalize">
                    {item.commentCount}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
