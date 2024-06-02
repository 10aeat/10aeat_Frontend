import AdminButton, { ButtonStyle } from '@/components/atoms/AdminButton'
import AdminFilterBtn from '@/components/atoms/AdminFilterBtn'
import AdminInput from '@/components/atoms/AdminInput'
import AdminListTable from '@/components/atoms/AdminListTable'
import AdminLogo from '@/components/atoms/AdminLogo'
import Dropdown from '@/components/atoms/Dropdown'

export default function page() {
  return (
    <div className="relative w-[1280px] bg-white">
      <AdminLogo />
      <div className="flex flex-col w-[232px] h-[822px] items-center gap-[16px] bg-gray-100">
        사이드바
      </div>
      <div className="inline-flex flex-col items-start gap-4 absolute top-28 left-64">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="font-Pretendard text-[24px] font-bold leading-[32px] capitalize text-gray-900">
            유지보수 관리
          </div>
        </div>
        <p className="self-stretch font-Pretendard text-[14px] font-normal leading-[20px] capitalize text-gray-900">
          건물 유지보수 사안은 오피스너 서비스를 통해 소유자에게 노출됩니다.
          <br />
          공사, 투표 등 기간이 정해져 있는 사안을 다룬다면 일정유무를 선택해
          등록 하실 수 있으며, 진행현황과 이슈는 업데이트 버튼을 클릭해 등록할
          수 있습니다.
        </p>
        <AdminButton buttonSize="md" buttonStyle={ButtonStyle.PRIMARY}>
          건물 유지보수 사안 등록
        </AdminButton>
        <div className="w-full h-[1px] bg-gray-400"></div>
        <div className="relative top-[12px] font-Pretendard text-[18px] font-semibold leading-[24px] capitalize text-gray-900">
          검색
        </div>
        <div className="relative flex top-[16px] gap-[12px] ">
          <Dropdown
            isDisabled={false}
            size="md"
            placeholder="사안유형"
            options={['전체', '설치', '보수', '교체']}
          />
          <AdminInput />
          <AdminButton buttonSize="sm" buttonStyle={ButtonStyle.SECONDARY_GRAY}>
            <span className="text-gray-600 px-[4px]">검색</span>
          </AdminButton>
        </div>
        <div className="relative inline-flex top-[24px] items-start gap-[10px]">
          <AdminFilterBtn />
        </div>
        <div className=" justify-between relative flex py-[12px] mt-[24px] items-center gap-[695px]">
          <span className="font-Pretendard text-[18px] font-semibold leading-[24px] text-gray-900 whitespace-nowrap">
            총 <span className="text-[#2463EB]"> 0개</span>의 게시물이
            조회되었습니다.
          </span>
          <div className="flex justify-end items-start gap-[4px]">
            <AdminButton
              buttonSize="md"
              isDisabled={true}
              buttonStyle={ButtonStyle.WARNING}
            >
              삭제
            </AdminButton>
          </div>
        </div>
        <div className="mt-[-12px]">
          <AdminListTable />
        </div>
      </div>
    </div>
  )
}
