import Dropdown from '@/components/atoms/Dropdown'
import NavBar from '../_components/NavBar'
import TableHead from '../_components/TableHead'

export default function ItemUpdate() {
  return (
    <div>
      {/* 메뉴바 들어갈 자리 */}
      <div className="px-6 gap-y-4">
        <NavBar title="진행 현황 / 이슈 사항 업데이트" />
        {/* contents ⤵️*/}
        <div className="min-h-[736px] gap-y-[80px] w-full">
          <div className="flex gap-x-[50px] h-[48px]">
            <span className="flex font-Pretendard items-center font-medium capitalize tracking-[-0.32px]">
              진행상태
            </span>
            <Dropdown
              options={['대기', '진행중', '완료']}
              isDisabled={false}
              size={'md'}
            />
          </div>
          <div>
            <TableHead />
          </div>
          <div>하단</div>
        </div>
      </div>
    </div>
  )
}
