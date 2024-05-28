import { useState } from 'react'

export default function TextArea({ textLength = '10' }) {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div className="flex flex-col gap-[4px] w-[421px] h-auto font-Pretendard text-gray-700 text-base font-normal">
      <div className={`${textLength === '300' ? 'h-[142px]' : 'h-[48px]'} py-[12px]`}>
      <textarea
        className={`custom-scrollbar flex items-center w-[100%] h-[100%] gap-[10px] pl-[16px] pr-[0px] py-[10px] border rounded-[10px] focus:outline-none focus:shadow-inputFocus focus:border-blue-600 placeholder-gray-400 disabled:gray-100 border-gray-300 resize-none ${textLength === '300' ? '' : 'scrollbar-hide'}`}
        placeholder="내용을 입력하세요"
        value={inputValue}
        onChange={handleInputChange}
        maxLength={textLength}
      />
      </div>
      <div className="self-stretch text-right text-[12px] leading-[18px] text-gray-400">
        {inputValue.length}/{textLength}
      </div>
    </div>
  )
}
