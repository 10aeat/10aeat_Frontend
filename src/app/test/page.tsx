'use client'

import DatePicker1 from '@/components/atoms/DatePicker'
import AdminModalOrganism from '@/components/organisms/AdminModalOrganism'

export default function Test() {
  return (
    <>
      <AdminModalOrganism>
        <div className="flex flex-col gap-y-6 items-start">
          <span className="text-gray-400">
            해당 유지보수 사안의 진행 현황에 대해 작성해 주세요. 해당 현황은
            오피스너 서비스를 통해 소유자에게 노출됩니다.
          </span>
          <div className="flex flex-col items-start gap-[8px] self-stretch">
            <span className="text-blue-600 font-semibold">1. 진행 일자</span>
            <div className="flex w-[200px] h-[48px]">
              <DatePicker1 isDisabled={false} />
            </div>
          </div>
          <div>
            <span className="text-blue-600 font-semibold">
              2. 진행 현황 상세 내용
            </span>
            <div className="flex flex-col font-medium text-gray-600">
              <span>제목</span>
              <span>상세 내용</span>
            </div>
          </div>
        </div>
      </AdminModalOrganism>
    </>
  )
}
