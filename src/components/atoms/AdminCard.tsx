import Image from 'next/image'

interface Props {
  name: string
  mail: string
  phone: string
}

// 댓글 or 진행 내용 없을 때 카드
export default function AdminCard({ name, mail, phone }: Props) {
  const adminCard = () => {
    return (
      <button className="relative w-[343px] h-[110px] bg-white rounded-[18px] shadow-[0_4px_30px_0px_rgba(75,85,9,0.04)]">
        <div className="absolute top-[31px] left-[89px] text-sm font-normal text-black whitespace-nowrap font-Pretendard">
          관리자
        </div>
        <div className="absolute top-[53px] left-[88px] font-Pretendard font-bold text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
          {name}
        </div>
        <div className="inline-flex flex-col items-start gap-[4px] px-[12px] py-0 absolute top-[32px] left-[221px]">
          <Image
            src="/icons/messages.svg"
            width={32}
            height={32}
            alt="messages"
            className="mr-[8px] w-[24px] h-[24px]"
          />
          <div className="font-Pretendard relative w-fit text-sm font-medium text-gray-900 whitespace-nowrap">
            메일
          </div>
        </div>
        <div className="inline-flex flex-col items-start gap-[4px] px-[12px] py-0 absolute top-[32px] left-[274px]">
          <Image
            src="/icons/phone.svg"
            width={32}
            height={32}
            alt="phone"
            className="mr-[8px] w-[24px] h-[24px]"
          />
          <div className="font-Pretendard relative w-fit text-sm font-medium text-gray-900 whitespace-nowrap">
            전화
          </div>
        </div>
        <div className="absolute w-[58px] h-[48px] top-[31px] left-[20px]">
          <div className="absolute w-[48px] h-[48px] top-0 left-0 bg-gray-300 rounded-[24px]">
            <img
              className="absolute w-[34px] h-[34px] top-[10px] left-[7px]"
              alt="Bold users"
              src="/icons/profile.svg"
            ></img>
            <img
              src="/icons/shield_user.svg"
              alt="shield_user"
              className="!absolute !w-[20px] !top-[28px] !left-[38px]"
            />
          </div>
        </div>
      </button>
    )
  }
  return <>{adminCard()}</>
}
