'use client'

import React, { useState } from 'react';
import TextArea from '@/components/atoms/TextArea copy';
import TextEditor from '@/components/atoms/TextEditor';
import axios from 'axios';

export default function Page() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [repairCompany, setRepairCompany] = useState('');
  const [repairCompanyWebsite, setRepairCompanyWebsite] = useState('');
  const [constructionStart, setConstructionStart] = useState('');
  const [constructionEnd, setConstructionEnd] = useState('');

  const handleSubmit = async () => {
    const payload = {
      category: "INSTALL",
      progress: "COMPLETE",
      title,
      content,
      constructionStart,
      constructionEnd,
      repairCompany,
      repairCompanyWebsite,
      images: [], // Add logic to handle images if necessary
    };

    try {
      const response = await axios.post('/api/endpoint', payload); // Replace with your actual API endpoint
      alert('Data submitted successfully');
    } catch (error) {
      console.error('Error submitting data', error);
      alert('Error submitting data');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">건물 유지보수 사안 등록</h1>

      <div className="mb-4">
        <label className="block font-semibold mb-1">유지보수 구분 *</label>
        <select className="border p-2 rounded w-1/2 mr-2">
          <option>선택</option>
        </select>
        <select className="border p-2 rounded w-1/2">
          <option>선택</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">안건 제목 *</label>
        <TextArea placeholder="제목을 입력해주세요." value={title} onChange={setTitle} />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">안건 내용 *</label>
        <TextEditor value={content} onChange={setContent} />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">담당 업체</label>
        <TextArea placeholder="업체명을 작성해주세요." value={repairCompany} onChange={setRepairCompany} />
        <TextArea placeholder="해당 업체의 웹사이트 링크를 첨부해주세요." value={repairCompanyWebsite} onChange={setRepairCompanyWebsite} />
      </div>

      <div className="mb-4">
        <input type="checkbox" id="period" className="mr-2" />
        <label htmlFor="period">진행 기간</label>
        <input type="date" className="border p-2 rounded ml-2" onChange={(e) => setConstructionStart(e.target.value)} />
        <input type="date" className="border p-2 rounded ml-2" onChange={(e) => setConstructionEnd(e.target.value)} />
      </div>

      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSubmit}>
        등록하기
      </button>
    </div>
  );
}