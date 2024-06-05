import Dropdown from '@/components/atoms/Dropdown'
import TextArea from '@/components/atoms/TextArea'

export default function InputDetail() {
  return (
    <div className="flex flex-col gap-y-2 font-Pretendard">
      <div className="flex gap-[8px]">
        <div className="flex w-[140px] items-center">
          법정 점검 사항<span className="text-blue-600">*</span>
        </div>
        <TextArea
          placeholder="법적으로 요구되는 점검 사항 명을 작성해주세요."
          width="480px"
          text="16px"
        />
      </div>
      <div className="flex gap-[8px]">
        <div className="flex w-[140px] items-center">
          시행 주기/횟수<span className="text-blue-600">*</span>
        </div>
        <div className="flex gap-x-2">
          <Dropdown options={['반기', '전기']} isDisabled={false} size="md" />
          <Dropdown options={['1회', '2회']} isDisabled={false} size="md" />
        </div>
      </div>
      <div className="flex gap-[8px]">
        <div className="flex w-[140px] items-center">
          법정 근거<span className="text-blue-600">*</span>
        </div>
        <TextArea
          placeholder="점검 사항의 법적근거를 작성해주세요."
          width="480px"
          text="16px"
        />
      </div>
      <div className="flex gap-[8px]">
        <div className="flex w-[140px] items-center">
          사용 내역/점검 대상<span className="text-blue-600">*</span>
        </div>
        <TextArea
          placeholder="건물 내 사용 내역 또는 점검 대상을 작성해주세요."
          width="480px"
          text="16px"
        />
      </div>
      <div className="flex gap-[8px]">
        <div className="flex w-[140px] items-center">
          담당자/업체<span className="text-blue-600">*</span>
        </div>
        <TextArea
          placeholder="점검 담당자 또는 담당업체를 작성해주세요."
          width="480px"
          text="16px"
        />
      </div>
    </div>
  )
}
