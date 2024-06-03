'use client'

import Dropdown from '@/components/atoms/Dropdown'
import TextArea from '@/components/atoms/TextArea'
import TextEditor from '@/components/atoms/TextEditor'
import CalenderSelect from '@/components/atoms/CalendarSelect'
import Image from 'next/image'
import { useState } from 'react'
import DatePicker1 from '@/components/atoms/DatePicker'

export default function RepairUpload() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [repairCompany, setRepairCompany] = useState('');
  const [repairCompanyWebsite, setRepairCompanyWebsite] = useState('');
  const [constructionStart, setConstructionStart] = useState(null);
  const [constructionEnd, setConstructionEnd] = useState(null);
  const [images, setImages] = useState<string[]>([]);

  const handleTitleChange = (value: string) => setTitle(value);
  const handleContentChange = (value: string) => setContent(value);
  const handleRepairCompanyChange = (value: string) => setRepairCompany(value);
  const handleRepairCompanyWebsiteChange = (value: string) => setRepairCompanyWebsite(value);
  const handleConstructionStartChange = (date: any) => setConstructionStart(date);
  const handleConstructionEndChange = (date: any) => setConstructionEnd(date);
  const handleImagesChange = (value: string[]) => setImages(value);

  const handleSubmit = async () => {
    const payload = {
      category: 'INSTALL',
      progress: 'COMPLETE',
      title,
      content,
      constructionStart,
      constructionEnd,
      repairCompany,
      repairCompanyWebsite,
      images,
    };

    const accessToken = localStorage.getItem('accessToken'); // 로컬 스토리지에서 토큰 읽어오기

    if (!accessToken) {
      console.error('Access token is missing');
      return;
    }

    try {
      const response = await axios.post('/api/repair', payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
        <CalenderSelect />
        {/* <DatePicker1 isDisabled={false} /> */}
      </div>
      <div className="flex items-center py-[8px]">
        <div className="flex w-[124px] ml-[16px] text-[16px] leading-[24px] font-semibold capitalize">
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
      <div className="flex items-center py-[8px]">
        <div className="flex w-[124px] ml-[16px] text-[16px] leading-[24px] font-semibold capitalize">
          <div className="text-gray-900">안건 내용&nbsp;</div>
          <div className="text-blue-600">*</div>
        </div>
        <div>
          <TextEditor
            placeholder="내용을 입력해주세요."
            value={content} // Pass value prop
            onChange={handleContentChange} // Pass onChange prop
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
            value={repairCompany} // Pass value prop
            onChange={handleRepairCompanyChange} // Pass onChange prop
          />
          <TextArea
            placeholder="해당 업체의 웹사이트 링크를 첨부해주세요."
            width="292px"
            text="14px"
            value={repairCompanyWebsite} // Pass value prop
            onChange={handleRepairCompanyWebsiteChange} // Pass onChange prop
          />
        </div>
      </div>
      <div className="flex w-[1024px] justify-end p-[24px]">
        <button className="flex p-[14px] rounded-[12px] bg-blue-600 text-[20px] font-semibold leading-[20px] text-white">
          등록하기
        </button>
      </div>
    </div>
  );
}
