interface Props {
  total: number
  pending: number
  finish: number
}

export default function RepairStatus({ total, pending, finish }: Props) {
  return (
    <div className="relative w-[343px] h-[104px] top-[36px] bg-white rounded-[18px] shadow-primary">
      <div className="left-[24px] absolute w-[81px] h-[56px] top-[24px]">
        <div className="text-center w-[77px] font-Pretendard font-medium text-[16px] leading-[24px] ">
          전체
        </div>
        <p className="w-[70px] top-[28px] left-[4px] font-Pretendard text-[20px] leading-[28px] absolute text-gray-900 text-center font-bold">
          <span className="font-bold">{total}</span>
          <span className="font-medium">개</span>
        </p>
      </div>
      <div className="left-[133px] absolute w-[81px] h-[56px] top-[24px]">
        <div className="text-center w-[77px] font-Pretendard font-medium text-[16px] leading-[24px] ">
          진행중/대기
        </div>
        <p className="w-[70px] top-[28px] left-[4px] font-Pretendard text-[20px] leading-[28px] absolute text-gray-900 text-center font-bold">
          <span className="font-bold">{pending}</span>
          <span className="font-medium">개</span>
        </p>
      </div>
      <div className="left-[242px] absolute w-[81px] h-[56px] top-[24px]">
        <div className="text-center w-[77px] font-Pretendard font-medium text-[16px] leading-[24px] ">
          완료
        </div>
        <p className="w-[70px] top-[28px] left-[4px] font-Pretendard text-[20px] leading-[28px] absolute text-gray-900 text-center font-bold">
          <span className="font-bold">{finish}</span>
          <span className="font-medium">개</span>
        </p>
      </div>
    </div>
  )
}
