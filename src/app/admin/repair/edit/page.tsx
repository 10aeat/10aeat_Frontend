'use client'

import Dropdown from '@/components/atoms/Dropdown'
import TextArea from '@/components/atoms/TextArea'
import TextEditor from '@/components/atoms/TextEditor'
import Image from 'next/image'
import { useState } from 'react'
import DatePicker1 from '@/components/atoms/DatePicker'

export default function RepairEdit() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [repairCompany, setRepairCompany] = useState('')
  const [repairCompanyWebsite, setRepairCompanyWebsite] = useState('')
  const [constructionStart, setConstructionStart] = useState(null)
  const [constructionEnd, setConstructionEnd] = useState(null)
  const [images, setImages] = useState<string[]>([])

  const handleSubmit = async () => {
    const postData = {
      category: 'REPAIR',
      progress: 'PENDING',
      title,
      content,
      constructionStart: [2024, 6, 3, 15, 4, 4, 538122438],
      constructionEnd: [2024, 6, 8, 15, 4, 4, 538131825],
      repairCompany,
      repairCompanyWebsite,
      images,
    }

    // try {
    //   const response = await axios.post('http://10aeat.com/managers/repair/articles', postData, {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
    //   console.log(response.status);

    //   if (response.status === 200) {
    //     console.log('Post created successfully:', response.data);
    //   }
    // } catch (error) {
    //   console.error('Error creating post:', error);
    // }
  }

  return (
    <div className="w-[1024px] mx-[24px] bg-white font-Pretendard">
      <div className="flex items-center py-[24px] my-[16px] border-b border-gray-300">
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
        <div className="flex items-center py-[8px]">
          <div className="flex w-[124px] ml-[16px] text-[16px] leading-[24px] font-semibold capitalize">
            <div className="text-gray-900">유지보수 구분&nbsp;</div>
            <div className="text-blue-600">*</div>
          </div>
          <div className="flex gap-[12px]">
            <Dropdown isDisabled={false} size="md" />
            <Dropdown isDisabled={false} size="md" />
          </div>
        </div>
        <DatePicker1 isDisabled={false} />
      </div>
      <div className="flex items-center py-[8px]">
        <div className="flex w-[124px] ml-[16px] text-[16px] leading-[24px] font-semibold capitalize">
          <div className="text-gray-900">안건 제목&nbsp;</div>
          <div className="text-blue-600">*</div>
        </div>
        <div>
          <TextArea
            placeholder="제목을 입력해주세요."
            width="840px"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center py-[8px]">
        <div className="flex w-[124px] ml-[16px] text-[16px] leading-[24px] font-semibold capitalize">
          <div className="text-gray-900">안건 내용&nbsp;</div>
          <div className="text-blue-600">*</div>
        </div>
        <div>
          <TextEditor
            placeholder="내용을 입력해주세요."
            value={content}
            onChange={setContent}
          />
        </div>
      </div>
      <div className="flex w-[600px] items-start py-[32px]">
        <div className="w-[124px] ml-[16px] text-[16px] leading-[24px] font-semibold capitalize">
          <div className="text-gray-900">담당 업체&nbsp;</div>
        </div>
        <div className="flex flex-col gap-[16px] text-[14px] font-medium leading-[14px]">
          <TextArea
            placeholder="업체명을 작성해주세요."
            width="178px"
            text="14px"
            value={repairCompany}
            onChange={(e) => setRepairCompany(e.target.value)}
          />
          <TextArea
            placeholder="해당 업체의 웹사이트 링크를 첨부해주세요."
            width="292px"
            text="14px"
            value={repairCompanyWebsite}
            onChange={(e) => setRepairCompanyWebsite(e.target.value)}
          />
        </div>
      </div>
      <div className="flex w-[1024px] justify-end p-[24px] gap-[12px]">
        <button
          className="flex p-[14px] rounded-[12px] bg-white text-[20px] font-semibold leading-[20px] border text-blue-600 border-blue-600"
          type="submit"
        >
          취소
        </button>
        <button
          className="flex p-[14px] rounded-[12px] bg-blue-600 text-[20px] font-semibold leading-[20px] text-white"
          type="submit"
        >
          수정하기
        </button>
      </div>
      {title === '' ||
      content === '' ||
      repairCompany === '' ||
      repairCompanyWebsite === '' ? (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 py-[8px] px-[16px] rounded-[100px] bg-gray-800 text-16px font-semibold leadeing-[24px] text-white">
          게시글 등록 필수 항목을 전부 입력해 주세요.
        </div>
      ) : null}
    </div>
  )
}
