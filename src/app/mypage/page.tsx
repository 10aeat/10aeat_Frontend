import IconProfile from '@/components/icons/profile'
import Image from 'next/image'

export default function page() {
  return (
    <div className="flex flex-col w-full items-center h-[812px] bg-gray-100">
      <div className="absolute top-[40px] w-[375px] inline-flex items-center gap-[16px]">
        <IconProfile width="80px" height="80px" />
        <div className=" flex flex-col items-start gap-[4px]">
          <div className="flex items-center gap-[8px]">
            <div className="font-Pretendard text-[24px] font-bold text-gray-900 leading-[32px] ">
              나소유
            </div>
            <div className="font-Pretendard text-[24px] font-bold text-gray-900 leading-[32px] ml-[-4px]">
              님
            </div>
            <div className="w-[1px] h-[16px] bg-gray-300" />
            <div className="font-Pretendard font-normal text-[16px] text-gray-700 leading-[24px] capitalize">
              소유자
            </div>
          </div>
          <div className="font-Pretendard text-[16px] font-medium text-gray-600 leading-[24px] capitalize">
            갑을그레이트밸리
          </div>
        </div>
      </div>
      <div className="absolute top-[168px] w-[375px] inline-flex flex-col items-start gap-[40px]">
        <div className="flex flex-col items-start gap-[8px]">
          <div className="flex items-center gap-[8px]">
            <Image
              src="/icons/building.svg"
              alt="building"
              width={24}
              height={24}
            />
            <div className="font-Pretendard text-[18px] font-bold text-gray-700 leading-[24px] capitalize">
              소유 호실 현황
            </div>
            <div className="font-Pretendard text-[16px] font-normal text-gray-600 leading-[24px] tracking-[-0.64px] capitalize">
              총 2개
            </div>
          </div>
          <div className="flex w-[343px] px-[32px] py-[24px] flex-col justify-center items-start gap-[16px] rounded-[16px] bg-white">
            <div className="flex flex-col items-start gap-[8px] self-stretch">
              <div className="flex items-center gap-[4px] self-stretch">
                <div className="font-Pretendard text-[20px] font-bold text-blue-700 leading-[28px] capitalize">
                  B동 156호
                </div>
                <div className="font-Pretendard text-[14px] font-normal text-gray-600 leading-[20px] capitalize">
                  갑을그레이트밸리
                </div>
              </div>
              <div className="flex  items-center gap-[4px] self-stretch">
                <div className="font-Pretendard text-[20px] font-bold text-blue-700 leading-[28px] capitalize">
                  B동 200호
                </div>
                <div className="font-Pretendard text-[14px] font-normal text-gray-600 leading-[20px] capitalize">
                  갑을그레이트밸리
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[24px]">
          <div className="flex items-center gap-[8px]">
            <div className="flex w-[343px] flex-col items-start gap-[8px]">
              <div className="font-Pretendard text-[18px] font-bold text-gray-700 leading-[24px] capitalize">
                호실 관리
              </div>
              <div className="flex flex-col items-start gap-[8px]">
                <div className="flex w-[343px] px-[12px] py-[8px] items-center gap-[8px] rounded-[16px] bg-white">
                  <div className="w-[40px] h-[40px]">
                    <div className="w-[40px] h-[40px] bg-blue-50 rounded-[20px] justify-center text-center items-center">
                      <Image
                        src="/icons/home.svg"
                        alt="home"
                        width={20}
                        height={20}
                        className="relative left-[8px] top-[8px]"
                      />
                    </div>
                  </div>
                  <div className="flex w-[272px] py-[12px] items-start justify-between">
                    <div className="text-gray-700 font-Pretendard text-[18px] font-medium leading-[24px] capitalize">
                      호실 삭제
                    </div>
                    <Image
                      src="/icons/arrow_right_small.svg"
                      alt="arrow_right_small"
                      width={24}
                      height={24}
                      // className="relative left-[8px] top-[8px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[8px]">
                <div className="flex w-[343px] px-[12px] py-[8px] items-center gap-[8px] rounded-[16px] bg-white">
                  <div className="w-[40px] h-[40px]">
                    <div className="w-[40px] h-[40px] bg-blue-50 rounded-[20px] justify-center text-center items-center">
                      <Image
                        src="/icons/home_add.svg"
                        alt="home_add"
                        width={20}
                        height={20}
                        className="relative left-[8px] top-[8px]"
                      />
                    </div>
                  </div>
                  <div className="flex w-[272px] py-[12px] items-start justify-between">
                    <div className="text-gray-700 font-Pretendard text-[18px] font-medium leading-[24px] capitalize">
                      호실 추가
                    </div>
                    <Image
                      src="/icons/arrow_right_small.svg"
                      alt="arrow_right_small"
                      width={24}
                      height={24}
                      // className="relative left-[8px] top-[8px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex flex-col items-start border-b-[1px] border-solid border-gray-300"
          >
            <div className="w-[49px]  text-gray-500 font-Pretendard text-[14px] font-normal leading-[20px] capitalize ">
              로그아웃
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
