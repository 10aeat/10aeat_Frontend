'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Dropdown from '@/components/atoms/Dropdown'
import AdminButton, { ButtonStyle } from './AdminButton'
import TableDropdown from '@/components/atoms/TableDropdown'

interface DataItem {
  id: number
  type: string
  content: string
  status: string
  period: string
  date: string
  views: number
  comments: number
  imageUrl: string
}

const data: DataItem[] = [
  {
    id: 1,
    type: '설치',
    content: '2층 우수관 하자발생 조치 두줄 이되면이렇게 내려갑니다...',
    status: '진행중',
    period: '유',
    date: '24.05.06',
    views: 10,
    comments: 5,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cWDjUDJ7g-r2NbjIt9GsWB479fOJ5zT9oTIC3OeTfQi2G9F-UuMwaQxHgMZAL35-fjUki4BLtau6NKGhopGQHfjW1cIoTbOt6LgHNELrV03T7BdqeCcDiW41gU1XJVv33RqtIijYLaXTpHfmmEfQgkqoOKDdkExSkIqfxQqXRq3kfy4JYKZd2-jc2UtvfXQRPFo4eghaNT9SMZTXv-AF7wMpzrvNPzcpMg9qdRqoipjBkw6Zbtu8PIi7cgov2U2s20KUxx1RpkOTK7DMeosoQYGfQs7L-nYIOuiYc7tbYTUeMP2~MSBeU5tn-8DDoEUm-r057CBazp7j5ndpa3wOJw__',
  },
  {
    id: 2,
    type: '설치',
    content: '2층 우수관 하자발생 조치 두줄 이되면이렇게 내려갑니다...',
    status: '진행중',
    period: '유',
    date: '24.05.06',
    views: 10,
    comments: 5,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cWDjUDJ7g-r2NbjIt9GsWB479fOJ5zT9oTIC3OeTfQi2G9F-UuMwaQxHgMZAL35-fjUki4BLtau6NKGhopGQHfjW1cIoTbOt6LgHNELrV03T7BdqeCcDiW41gU1XJVv33RqtIijYLaXTpHfmmEfQgkqoOKDdkExSkIqfxQqXRq3kfy4JYKZd2-jc2UtvfXQRPFo4eghaNT9SMZTXv-AF7wMpzrvNPzcpMg9qdRqoipjBkw6Zbtu8PIi7cgov2U2s20KUxx1RpkOTK7DMeosoQYGfQs7L-nYIOuiYc7tbYTUeMP2~MSBeU5tn-8DDoEUm-r057CBazp7j5ndpa3wOJw__',
  },
  // Add more data as needed
]

export default function AdminListTable() {
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedItems([])
    } else {
      setSelectedItems(data.map((item) => item.id))
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

  const isAllSelected = selectedItems.length === data.length && data.length > 0

  return (
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
        {data.map((item) => (
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
                {item.type}
              </div>
            </td>
            <td className="flex max-w-[387px] px-[28px] py-[12px] justify-center items-center gap-[12px]">
              <div className="flex justify-center items-center gap-[12px] flex-[1_0_0%]">
                <img
                  src={item.imageUrl}
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
                  className="min-w-[320px] overflow-hidden text-ellipsis font-Pretendard text-gray-900 text-[16px] font-normal leading-[24px] capitalize"
                >
                  {item.content}
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
              <TableDropdown isDisabled={false} placeholder={item.status} />
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
            <td className="flex min-w-[104px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
              <div className="flex w-[42px] h-[24px] flex-col justify-center text-center font-Pretendard text-gray-900 text-[16px] font-medium leading-[24px] capitalize">
                {item.period}
              </div>
            </td>
            <td className="flex min-w-[88px] px-[16px] py-[12px] justify-center whitespace-nowrap items-center gap-[12px] self-stretch">
              <div className="flex w-[42px] h-[24px] flex-col justify-center text-center font-Pretendard text-gray-900 text-[16px] font-medium leading-[24px] capitalize">
                {item.date}
              </div>
            </td>
            <td className="flex min-w-[88px] px-[24px] py-[12px] justify-center whitespace-nowrap items-center gap-[12px] self-stretch">
              <div className="flex w-[42px] h-[24px] flex-col justify-center text-center font-Pretendard text-gray-900 text-[16px] font-medium leading-[24px] capitalize">
                {item.views}
              </div>
            </td>
            <td className="flex min-w-[88px] px-[24px] py-[12px] justify-center whitespace-nowrap items-center gap-[12px] self-stretch">
              <div className="flex w-[42px] h-[24px] flex-col justify-center text-center font-Pretendard text-gray-900 text-[16px] font-medium leading-[24px] capitalize">
                {item.comments}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
