export default function AdminModalMain() {
  return (
    <div className="w-full flex-col shrink-0 pt-2 pr-6 pb-4 pl-6 items-center gap-3 bg-white">
      <div className="flex flex-col gap-y-6 items-start">
        <span className="text-gray-400">
          해당 유지보수 사안의 진행 현황에 대해 작성해 주세요. 해당 현황은
          오피스너 서비스를 통해 소유자에게 노출됩니다.
        </span>
        <div>
          <span className="text-blue-600 font-semibold">1. 진행 일자</span>
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
    </div>
  )
}
