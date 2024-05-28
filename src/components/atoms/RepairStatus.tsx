interface Props {
  all: number
  inprogressAndpending: number
  complete: number
}

export default function RepairStatus({
  all,
  inprogressAndpending,
  complete,
}: Props) {
  return (
    <div className="relative w-[343px] h-[104px] top-[36px] bg-white rounded-[18px] shadow-primary">
      <div className="left-[24px] absolute w-[81px] h-[56px] top-[24px]">
        <div className="text-center w-[77px] font-Pretendard font-medium text-[16px] leading-[24px] ">
          전체
        </div>
        <p className="w-[70px] top-[28px] left-[4px] font-Pretendard text-[20px] leading-[28px] absolute text-gray-900 text-center font-bold">
          <span className="font-bold">{all}</span>
          <span className="font-medium">개</span>
        </p>
      </div>
      <div className="left-[133px] absolute w-[81px] h-[56px] top-[24px]">
        <div className="text-center w-[77px] font-Pretendard font-medium text-[16px] leading-[24px] ">
          진행중/대기
        </div>
        <p className="w-[70px] top-[28px] left-[4px] font-Pretendard text-[20px] leading-[28px] absolute text-gray-900 text-center font-bold">
          <span className="font-bold">{inprogressAndpending}</span>
          <span className="font-medium">개</span>
        </p>
      </div>
      <div className="left-[242px] absolute w-[81px] h-[56px] top-[24px]">
        <div className="text-center w-[77px] font-Pretendard font-medium text-[16px] leading-[24px] ">
          완료
        </div>
        <p className="w-[70px] top-[28px] left-[4px] font-Pretendard text-[20px] leading-[28px] absolute text-gray-900 text-center font-bold">
          <span className="font-bold">{complete}</span>
          <span className="font-medium">개</span>
        </p>
      </div>
    </div>
  )
}
