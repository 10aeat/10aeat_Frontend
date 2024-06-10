// AdminCard.tsx
import { useAccessToken } from '@/components/store/AccessTokenStore'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// 댓글 or 진행 내용 없을 때 카드
export default function AdminCard({ managerId }: { managerId: number }) {
  const { accessToken } = useAccessToken()
  const [managerInfoData, setManagerInfoData] = useState<MANAGER_INFO>()

  useEffect(() => {
    const getManagerInfo = async () => {
      try {
        const getManagerInfoResponse = await fetch(
          `http://10aeat.com/managers/profile/${managerId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )

        const managerInfo = await getManagerInfoResponse.json()
        setManagerInfoData(managerInfo)
        console.log(managerInfo)
      } catch (error) {
        console.log(error)
      }
    }
    getManagerInfo()
  }, [managerId])
  const adminCard = () => {
    return (
      <div className="relative w-[343px] h-[110px] bg-white rounded-[18px] shadow-[0_4px_30px_0px_rgba(75,85,9,0.04)]">
        {managerInfoData && (
          <>
            <div className="absolute top-[31px] left-[89px] text-sm font-normal text-black whitespace-nowrap font-Pretendard">
              관리자
            </div>
            <div className="fontchange absolute top-[53px] left-[88px] font-Pretendard font-bold text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
              {managerInfoData.name}
            </div>
            <div className="inline-flex flex-col items-center gap-[4px] px-[12px] py-0 absolute top-[32px] left-[221px]">
              <Image
                src="/icons/messages.svg"
                width={32}
                height={32}
                alt="messages"
                className="ml-[1px] w-[24px] h-[24px]"
              />
              <div className="fontchange font-Pretendard relative w-fit text-sm font-medium text-gray-900 whitespace-nowrap">
                메일
              </div>
            </div>
            <a
              href={`tel:${managerInfoData.phoneNumber}`}
              className="inline-flex flex-col items-center gap-[4px] px-[12px] py-0 absolute top-[32px] left-[274px]"
            >
              <Image
                src="/icons/phone.svg"
                width={32}
                height={32}
                alt="phone"
                className="ml-[1px] w-[24px] h-[24px]"
              />
              <div className="fontchange font-Pretendard relative w-fit text-sm font-medium text-gray-900 whitespace-nowrap">
                전화
              </div>
            </a>
            <div className="absolute w-[58px] h-[48px] top-[31px] left-[20px]">
              <div className="absolute w-[48px] h-[48px] top-0 left-0 bg-gray-300 rounded-[24px]">
                <Image
                  alt="Bold users"
                  width={34}
                  height={34}
                  src="/icons/profile.svg"
                  className="absolute top-[10px] left-[7px]"
                />
                <Image
                  src="/icons/shield_user.svg"
                  alt="shield_user"
                  width={20}
                  height={20}
                  className="!absolute !top-[28px] !left-[38px]"
                />
              </div>
            </div>
          </>
        )}
      </div>
    )
  }
  return <>{adminCard()}</>
}
