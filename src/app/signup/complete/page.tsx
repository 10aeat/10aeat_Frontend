import AdminButton, {
  ButtonStyle,
} from '@/app/admin/_components/atoms/AdminButton'

export default function page() {
  return (
    <div className="flex flex-col w-full items-center bg-white h-[812px]">
      <div className="absolute top-[195px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <circle
            cx="39.9993"
            cy="39.9998"
            r="33.3333"
            stroke="#E5E7EB"
            strokeWidth="5"
          />
          <path
            d="M28.334 41.6665L35.0007 48.3332L51.6673 31.6665"
            stroke="#2563EB"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="absolute top-[296px] flex font-Pretendard text-[30px] font-normal leading-[45px] tracking-[-0.57px] ">
        <span className="font-bold">나소유</span>님 반가워요!
      </div>
      <div className="absolute top-[348px] font-Pretendard font-normal text-[20px] leading-[30px] tracking-[-0.38px]">
        회원 가입이 완료되었어요
      </div>
      <div className="absolute top-[446px] flex flex-col w-[343px] gap-[16px]">
        <AdminButton
          buttonSize="md"
          buttonStyle={ButtonStyle.PRIMARY}
          isDisabled={false}
        >
          모두 동의 후 가입 완료하기
        </AdminButton>
      </div>
    </div>
  )
}
