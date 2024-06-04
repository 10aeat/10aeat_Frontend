import Dropdown from '@/components/atoms/Dropdown'
export default function InputDetail() {
  return (
    <div className="flex flex-col gap-y-2 font-Pretendard">
      <div className="">
        법정 점검 사항<span className="text-blue-600">*</span>
        {/* input */}
      </div>
      <div className="flex">
        시행 주기/횟수<span className="text-blue-600">*</span>
        <div className="flex gap-x-2">
          <Dropdown options={['반기', '전기']} isDisabled={false} size={'md'} />
          <Dropdown options={['1회', '2회']} isDisabled={false} size={'md'} />
        </div>
      </div>
      <div className="flex">
        법정 근거<span className="text-blue-600">*</span>
        {/* input */}
      </div>
      <div className="flex">
        사용 내역/점검 대상<span className="text-blue-600">*</span>
        {/* input */}
      </div>
      <div className="flex">
        담당자/업체<span className="text-blue-600">*</span>
        {/* input */}
      </div>
    </div>
  )
}
