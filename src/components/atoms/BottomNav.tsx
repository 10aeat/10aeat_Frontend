import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Props {
  isHome?: boolean
}
export default function BottomNav({ isHome }: Props) {
  const router = useRouter()
  return (
    <div className="fixed bottom-0 w-[375px] h-[56px] rounded-t-[18px]  z-9 flex justify-between bg-white">
      <button
        type="button"
        className="flex-1 flex items-center justify-center"
        onClick={() => router.push('/')}
      >
        <div className="relative w-[47px] h-[44px]">
          <Image
            className="!absolute !w-[20px] !h-[20px] !left-[13px]"
            src={isHome ? `/icons/home_fill.svg` : `/icons/home_fill_gray.svg`}
            width={20}
            height={20}
            alt="home"
          />
          <div className="absolute top-[24px] left-1/2 transform -translate-x-1/2 font-Pretendard font-medium text-gray-700 text-[12px] leading-[20px] whitespace-nowrap">
            소유자 홈
          </div>
        </div>
      </button>
      <button
        type="button"
        className="flex-1 flex items-center justify-center"
        onClick={() => router.push('/mypage')}
      >
        <div className="relative w-[54px] h-[44px]">
          <Image
            className="!absolute !w-[24px] !h-[24px] !left-[13px]"
            src={
              isHome
                ? '/icons/profile_circle.svg'
                : '/icons/profile_circle_black.svg'
            }
            width={24}
            height={24}
            alt="profile"
          />
          <div className="absolute top-[24px] left-1/2 transform -translate-x-1/2 font-Pretendard font-medium text-gray-700 text-[12px] leading-[20px] whitespace-nowrap">
            마이페이지
          </div>
        </div>
      </button>
    </div>
  )
}
