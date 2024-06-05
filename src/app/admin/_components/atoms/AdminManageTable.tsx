/* eslint-disable jsx-a11y/control-has-associated-label */
// import Image from 'next/image'
// import AdminButton, { ButtonStyle } from './AdminButton'

// export default function AdminManageTable() {
//   return (
//     <>
//       <table className="flex items-start content-start flex-wrap w-[1000px]">
//         <thead className="flex w-[1000px] border-b-[1px] border-solid border-gray-400 bg-gray-100 whitespace-nowrap">
//           <tr className="flex w-full h-[56px]">
//             <th className="flex min-w-[111px] px-[16px] py-[28px] items-center gap-[16px] self-stretch">
//               <Image
//                 src={`/icons/checkbox.svg`}
//                 width={24}
//                 height={24}
//                 alt="checkbox"
//                 className="w-[24px] h-[24px]"
//               />
//               <div className="font-Pretendard text-[16px] font-medium leading-[24px] capitalize text-gray-900 whitespace-nowrap">
//                 주기
//               </div>
//             </th>
//             <th className="flex w-[264px] flex-col items-start">
//               <div className="flex justify-center items-center gap-[12px] flex-[1_0_0%]">
//                 <div className="flex h-[48px] flex-col justify-center flex-[1_0_0%] overflow-hidden text-gray-900 text-ellipsis whitespace-nowrap font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
//                   점검항목
//                 </div>
//               </div>
//             </th>
//             <th className="flex w-[88px] max-w-[120px] flex-col items-start">
//               <div className="flex h-[56px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
//                 <div className="text-gray-900 text-center font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
//                   점검일
//                 </div>
//               </div>
//             </th>
//             <th className="flex w-[88px] max-w-[120px] flex-col items-start">
//               <div className="flex h-[56px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
//                 <div className="text-gray-900 text-center font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
//                   진행상태
//                 </div>
//               </div>
//             </th>
//             <th className="flex w-[64px] max-w-[120px] flex-col items-start">
//               <div className="flex h-[56px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
//                 <div className="text-gray-900 text-center font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
//                   진행률
//                 </div>
//               </div>
//             </th>
//             <th className="flex flex-col items-start flex-[1_0_0%]">
//               <div className="flex h-[56px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch"></div>
//             </th>
//             <th className="flex w-[64px] max-w-[120px] flex-col items-start">
//               <div className="flex h-[56px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
//                 <div className="text-gray-900 text-center font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
//                   회차
//                 </div>
//               </div>
//             </th>
//             <th className="flex max-w-[120px] flex-col items-start">
//               <div className="flex h-[56px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
//                 <div className="text-gray-900 text-center font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
//                   사항/현황
//                 </div>
//               </div>
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white w-[1000px]">
//           <tr className="flex w-[1000px] h-[104px] border-b-[1px] border-solid border-gray-300">
//             <td className="flex min-w-[111px] px-[16px] py-[28px] items-center gap-[12px] self-stretch">
//               <Image
//                 src={`/icons/checkbox.svg`}
//                 width={24}
//                 height={24}
//                 alt="checkbox"
//                 className="w-[24px] h-[24px]"
//               />
//               <div className="font-Pretendard text-[16px] font-normal leading-[24px] capitalize text-gray-900 whitespace-nowrap">
//                 연N회
//               </div>
//             </td>
//             <td className="flex min-w-[264px] px-[12px] py-[28px] items-center gap-[12px] self-stretch">
//               <div
//                 className=" overflow-hidden text-gray-900 text-ellipsis font-Pretendard text-[16px] font-normal leading-[24px] capitalize"
//                 style={{
//                   display: '-webkit-box',
//                   WebkitBoxOrient: 'vertical',
//                   WebkitLineClamp: 2,
//                   overflow: 'hidden',
//                 }}
//               >
//                 점검 사안 타이틀
//               </div>
//             </td>
//             <td className="flex min-w-[86px] px-[16px] py-[12px] justify-center items-center gap-[12px] self-stretch">
//               <div className="font-Pretendard text-[16px] font-normal leading-[24px] capitalize text-gray-900 whitespace-nowrap">
//                 D-1
//               </div>
//             </td>
//             <td className="flex min-w-[86px] px-[16px] py-[12px] justify-center items-center gap-[12px] self-stretch">
//               <div className="font-Pretendard text-[16px] font-normal leading-[24px] capitalize text-gray-900 whitespace-nowrap">
//                 진행중
//               </div>
//             </td>
//             <td className="flex min-w-[62px] px-[16px] py-[12px] justify-center items-center gap-[12px] self-stretch">
//               <div className="font-Pretendard text-[16px] font-normal leading-[24px] capitalize text-gray-900 whitespace-nowrap">
//                 N%
//               </div>
//             </td>
//             <td className="flex min-w-[208px] px-[16px] py-[12px] justify-center items-center gap-[12px] self-stretch">
//               <div className="font-Pretendard text-[16px] font-normal leading-[24px] capitalize text-gray-900 whitespace-nowrap"></div>
//             </td>
//             <td className="flex min-w-[62px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
//               <div className="font-Pretendard text-[16px] font-normal leading-[24px] capitalize text-gray-900 whitespace-nowrap">
//                 <span className="font-bold">3</span> / 6
//               </div>
//             </td>
//             <td className="flex min-w-[108px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch whitespace-nowrap">
//               <AdminButton
//                 buttonSize="sm"
//                 buttonStyle={ButtonStyle.ACCENT}
//                 isDisabled={false}
//               >
//                 업데이트
//               </AdminButton>
//             </td>
//           </tr>
//           <div className="flex w-[1000px] h-[80px] flex-col justify-center overflow-hidden text-gray-900 text-center text-ellipsis whitespace-nowrap font-Prentendard text-[16px] font-medium leading-[24px] capitalize">
//             법정 시설물 유지관리 점검 사항을 등록해주세요.
//           </div>
//         </tbody>
//       </table>
//     </>
//   )
// }

'use client'

import React, { useState } from 'react'
import AdminButton, { ButtonStyle } from './AdminButton'
import StatusBar from './StatusBar'

interface ManageDataItem {
  id: number
  frequency: string
  item: string
  checkDate: string
  status: string
  progress: string
  round: string
}

const manageData: ManageDataItem[] = [
  {
    id: 1,
    frequency: '연N회',
    item: '점검 사안 타이틀',
    checkDate: 'D-1',
    status: '진행중',
    progress: 'N%',
    round: '3 / 6',
  },
  {
    id: 2,
    frequency: '연N회',
    item: '점검 사안 타이틀',
    checkDate: 'D-1',
    status: '진행중',
    progress: 'N%',
    round: '3 / 6',
  },
  // Add more data as needed
]

export default function AdminManageTable() {
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedItems([])
    } else {
      setSelectedItems(manageData.map((item) => item.id))
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
    selectedItems.length === manageData.length && manageData.length > 0

  return (
    <table className="flex items-start content-start flex-wrap w-[1000px]">
      <thead className="flex w-[1000px] border-b-[1px] border-solid border-gray-400 bg-gray-100 whitespace-nowrap">
        <tr className="flex w-full h-[56px]">
          <th className="flex min-w-[111px] px-[16px] py-[28px] items-center gap-[16px] self-stretch">
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
              주기
            </div>
          </th>
          <th className="flex w-[264px] flex-col items-start">
            <div className="flex justify-center items-center gap-[12px] flex-[1_0_0%]">
              <div className="flex h-[48px] flex-col justify-center flex-[1_0_0%] overflow-hidden text-gray-900 text-ellipsis whitespace-nowrap font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                점검항목
              </div>
            </div>
          </th>
          <th className="flex w-[88px] max-w-[120px] flex-col items-start">
            <div className="flex h-[56px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
              <div className="text-gray-900 text-center font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                점검일
              </div>
            </div>
          </th>
          <th className="flex w-[88px] max-w-[120px] flex-col items-start">
            <div className="flex h-[56px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
              <div className="text-gray-900 text-center font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                진행상태
              </div>
            </div>
          </th>
          <th className="flex w-[64px] max-w-[120px] flex-col items-start">
            <div className="flex h-[56px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
              <div className="text-gray-900 text-center font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                진행률
              </div>
            </div>
          </th>
          <th className="flex flex-col items-start flex-[1_0_0%]">
            <div className="flex h-[56px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch" />
          </th>
          <th className="flex w-[64px] max-w-[120px] flex-col items-start">
            <div className="flex h-[56px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
              <div className="text-gray-900 text-center font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                회차
              </div>
            </div>
          </th>
          <th className="flex max-w-[120px] flex-col items-start">
            <div className="flex h-[56px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
              <div className="text-gray-900 text-center font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                사항/현황
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white w-[1000px]">
        {manageData.map((item) => (
          <tr
            key={item.id}
            className="flex w-[1000px] h-[104px] border-b-[1px] border-solid border-gray-300"
          >
            <td className="flex min-w-[111px] px-[16px] py-[28px] items-center gap-[12px] self-stretch">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
                style={{
                  borderRadius: 18,
                  width: 24,
                  height: 16,
                }}
              />
              <div className="font-Pretendard text-[16px] font-normal leading-[24px] capitalize text-gray-900 whitespace-nowrap">
                {item.frequency}
              </div>
            </td>
            <td className="flex min-w-[264px] px-[12px] py-[28px] items-center gap-[12px] self-stretch">
              <div
                className=" overflow-hidden text-gray-900 text-ellipsis font-Pretendard text-[16px] font-normal leading-[24px] capitalize"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  overflow: 'hidden',
                }}
              >
                {item.item}
              </div>
            </td>
            <td className="flex min-w-[86px] px-[16px] py-[12px] justify-center items-center gap-[12px] self-stretch">
              <div className="font-Pretendard text-[16px] font-normal leading-[24px] capitalize text-gray-900 whitespace-nowrap">
                {item.checkDate}
              </div>
            </td>
            <td className="flex min-w-[86px] px-[16px] py-[12px] justify-center items-center gap-[12px] self-stretch">
              <div className="font-Pretendard text-[16px] font-normal leading-[24px] capitalize text-gray-900 whitespace-nowrap">
                {item.status}
              </div>
            </td>
            <td className="flex min-w-[62px] px-[16px] py-[12px] justify-center items-center gap-[12px] self-stretch">
              <div className="font-Pretendard text-[16px] font-normal leading-[24px] capitalize text-gray-900 whitespace-nowrap">
                {item.progress}
              </div>
            </td>
            <td className="flex min-w-[208px] px-[16px] py-[12px] justify-center items-center gap-[12px] self-stretch">
              <div className="font-Pretendard text-[16px] font-normal leading-[24px] capitalize text-gray-900 whitespace-nowrap">
                <StatusBar completedChecks={4} totalChecks={6} />
              </div>
            </td>
            <td className="flex min-w-[62px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
              <div className="font-Pretendard text-[16px] font-normal leading-[24px] capitalize text-gray-900 whitespace-nowrap">
                {/* <span className="font-bold">{item.round}</span> */}
                <span className="font-bold">3</span> / 6
              </div>
            </td>
            <td className="flex min-w-[108px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch whitespace-nowrap">
              <AdminButton
                buttonSize="sm"
                buttonStyle={ButtonStyle.ACCENT}
                isDisabled={false}
              >
                업데이트
              </AdminButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
