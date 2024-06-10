import AdminButton, {
  ButtonStyle,
} from '@/app/admin/_components/atoms/AdminButton'
import AdminInput from '@/app/admin/_components/atoms/AdminInput'
import AdminLogo from '@/app/admin/_components/atoms/AdminLogo'
import AdminManageTable from '@/app/admin/_components//atoms/AdminManageTable'
import AdminMonthPicker from '@/app/admin/_components/atoms/AdminMonthPicker'
import AdminYearPicker from '@/app/admin/_components/atoms/AdminYearPicker'
import SideMenu from '../../sidemenu/page'

export default function page() {
  return (
    <div className="relative w-full bg-white overflow-y-auto">
      <AdminLogo />
      <SideMenu />
      <div className="inline-flex flex-col items-start gap-4 absolute top-28 left-64">
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="font-Pretendard text-[24px] font-bold leading-[32px] capitalize text-gray-900">
            법정 시설물 유지관리 점검
          </div>
        </div>
        <p className="self-stretch font-Pretendard text-[14px] font-normal leading-[20px] capitalize text-gray-900">
          법정 시설물 유지 점검 사항은 오피스너 서비스를 통해 소유자에게
          노출됩니다. <br />
          점검사항을 등록하여 간편하게 유지관리를 할 수 있습니다. 진행현황과
          이슈는 업데이트 버튼을 클릭해 등록할 수 있습니다.
        </p>
        <AdminButton buttonSize="md" buttonStyle={ButtonStyle.PRIMARY}>
          법정 시설물 점검 사항 등록
        </AdminButton>
        <div className="w-full h-[1px] bg-gray-400" />
        <div className="relative top-[12px] font-Pretendard text-[18px] font-semibold leading-[24px] capitalize text-gray-900">
          검색
        </div>
        <div className="relative flex top-[16px] gap-[12px] ">
          <AdminInput />
          <AdminButton buttonSize="sm" buttonStyle={ButtonStyle.SECONDARY_GRAY}>
            <span className="text-gray-600 px-[4px]">검색</span>
          </AdminButton>
        </div>
        <div className="relative top-[24px] font-Pretendard text-[18px] font-semibold leading-[24px] capitalize text-gray-900">
          시행 예정 일자 년도 / 월별 보기
        </div>
        <div className="relative flex top-[24px] gap-[12px] ">
          <AdminYearPicker />
          <AdminMonthPicker />
        </div>
        {/* 여기 달력 드롭다운 새로 만들기 */}
        <div className=" justify-between relative flex py-[12px] mt-[24px] items-center gap-[695px]">
          <span className="font-Pretendard text-[18px] font-semibold leading-[24px] text-gray-900 whitespace-nowrap">
            총 <span className="text-[#2463EB]"> 0개</span>의 게시물이
            조회되었습니다.
          </span>
          <div className="flex justify-end items-start gap-[4px]">
            <AdminButton
              buttonSize="md"
              isDisabled
              buttonStyle={ButtonStyle.WARNING}
            >
              삭제
            </AdminButton>
          </div>
        </div>
        <div className="mt-[-12px]">
          <AdminManageTable />
        </div>
        <div className="relative flex w-[1000px] justify-end items-center gap-[4px] pb-[100px]" />
      </div>
    </div>
  )
}
