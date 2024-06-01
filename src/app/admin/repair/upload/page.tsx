'use client'

import Dropdown from '@/components/atoms/Dropdown'
import TextArea from '@/components/atoms/TextArea'
import TextEditor from '@/components/atoms/TextEditor'
import CalenderSelect from '@/components/atoms/CalendarSelect'
import Image from 'next/image'
import { useState } from 'react'
import DatePicker1 from '@/components/atoms/DatePicker'

export default function RepairUpload() {
  return (
    <div className="font-Pretendard bg-white">
      <div className="flex items-center py-[24px] mx-[24px] my-[16px] border-b border-gray-300">
        <Image
          src="/icons/arrow_left_large.svg"
          width={24}
          height={24}
          alt="arrow_left_large"
        />
        <div className="text-[20px] font-bold leading-[28px] text-gray-900 capitalize pl-[4px]">
          건물 유지보수 사안 등록
        </div>
        <div className="text-[14px] font-normal leading-[20px] text-blue-600 capitalize pl-[20px]">
          *필수입력
        </div>
      </div>
      <div className="flex items-center gap-[52px]">
        <div className="flex items-center mx-[24px] py-[8px]">
          <div className="flex w-[100px] ml-[16px] mr-[8px] text-[16px] leading-[24px] font-semibold capitalize">
            <div className="text-gray-900">유지보수 구분&nbsp;</div>
            <div className="text-blue-600">*</div>
          </div>
          <div className="flex gap-[12px]">
            <Dropdown isDisabled={false} size="md" />
            <Dropdown isDisabled={false} size="md" />
          </div>
        </div>
        <CalenderSelect />
      </div>
      <div className="flex items-center mx-[24px] py-[8px]">
        <div className="flex w-[100px] ml-[16px] mr-[8px] text-[16px] leading-[24px] font-semibold capitalize">
          <div className="text-gray-900">안건 제목&nbsp;</div>
          <div className="text-blue-600">*</div>
        </div>
        <div>
          <TextArea
            text=""
            count={0}
            placeholder="제목을 입력해주세요."
            width="840px"
          />
        </div>
      </div>
      <div className="flex items-center mx-[24px] py-[8px]">
        <div className="flex w-[100px] ml-[16px] mr-[8px] text-[16px] leading-[24px] font-semibold capitalize">
          <div className="text-gray-900">안건 내용&nbsp;</div>
          <div className="text-blue-600">*</div>
        </div>
        <div>
          <TextEditor placeholder="내용을 입력해주세요." />
        </div>
      </div>
      <div className="flex w-[600px] items-start mx-[24px] py-[8px]">
        <div className="w-[100px] ml-[16px] mr-[8px] text-[16px] leading-[24px] font-semibold capitalize">
          <div className="text-gray-900">담당 업체&nbsp;</div>
        </div>
        <div className="grid gap-[16px] text-[14px] font-medium leading-[14px]">
          <TextArea
            count={0}
            placeholder="업체명을 작성해주세요."
            width="178px"
            text="14px"
          />
          <TextArea
            count={0}
            placeholder="해당 업체의 웹사이트 링크를 첨부해주세요."
            width="292px"
            text="14px"
          />
        </div>
      </div>
      <div className="flex w-[1024px] justify-end p-[24px]">
        <button className="flex p-[14px] rounded-[12px] bg-blue-600 text-[20px] font-semibold leading-[20px] text-white">
          등록하기
        </button>
      </div>
    </div>
  )
}
