'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import PenIcon from '@/components/icons/pen_with_line.svg'
import TagBadge, { TagBadgeStyle } from '@/components/atoms/TagBadge'
import AdminComments from '@/components/atoms/AdminComments'
import { useAccessToken } from '@/components/store/AccessTokenStore'
import AdminLogo from '../../_components/atoms/AdminLogo'
import SideMenu from '../../_components/atoms/Sidemenu'
import AdminButton, { ButtonStyle } from '../../_components/atoms/AdminButton'

export default function RepairPost() {
  const { accessToken, setAccessToken } = useAccessToken()
  const router = useRouter()
  const [posts, setPosts] = useState<POST[]>([])
  const email = 'master@officener.com'
  const password = 'adminPassword'

  useEffect(() => {
    const handleLogin = async () => {
      try {
        const response = await axios.post(
          'https://api.10aeat.com/managers/login',
          {
            email,
            password,
          },
        )
        if (response) {
          console.log('로그인 성공!')
          setAccessToken(response.headers.accesstoken)
        } else {
          // 오류 처리
          console.error('로그인 실패:', response)
        }
      } catch (error) {
        // 네트워크 오류 등을 처리합니다.
        console.error('네트워크 오류:', error)
      }
    }
    const getPostData = async () => {
      try {
        const response = await fetch(
          `https://api.10aeat.com/repair/articles/list?size=5`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )
        const data = await response.json()
        setPosts(data.data)
      } catch (error) {
        console.error(error)
      }
    }
    handleLogin()
    getPostData()
  }, [accessToken])

  console.log(posts)

  return (
    <div className="relative w-full bg-white">
      <AdminLogo />
      <div className="flex">
        <SideMenu menuIndex={1} />
        <div className="w-full font-Pretendard bg-white">
          <div className="flex items-center py-[24px] mx-[24px] my-[16px] border-b border-gray-300">
            <button
              type="button"
              onClick={() => router.push('/admin/repair/list')}
            >
              <Image
                src="/icons/arrow_left_large.svg"
                width={24}
                height={24}
                alt="arrow_left_large"
              />
            </button>
            <div className="text-[20px] font-bold leading-[28px] text-gray-900 capitalize pl-[4px]">
              건물 유지보수 게시물
            </div>
          </div>
          <div className="flex flex-col px-[40px] gap-[24px]">
            <div className="flex gap-[8px]">
              <TagBadge
                tagBadgeStyle={TagBadgeStyle.TAG}
                progress="INPROGRESS"
              />
              <TagBadge tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}>
                보수
              </TagBadge>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-[28px] font-bold leading-[36px] capitalize text-gray-900">
                2층 우수관 하자발생 조치
              </div>
              <div className="flex gap-[12px]">
                <button
                  type="button"
                  onClick={() => router.push('/admin/repair/edit')}
                >
                  <AdminButton
                    buttonStyle={ButtonStyle.SECONDARY_BLUE}
                    buttonSize="lg"
                  >
                    <PenIcon color="#2563EB" width={24} height={24} />
                    수정
                  </AdminButton>
                </button>
                <AdminButton buttonStyle={ButtonStyle.ERROR} buttonSize="lg">
                  삭제
                </AdminButton>
              </div>
            </div>
            <div className="flex h-[64px] gap-[16px] items-center border-y border-gray-200 text-[16px] leading-[24px] capitalize text-gray-900 font-normal">
              <div className="flex gap-[8px]">
                <div className="font-bold">게시일</div>
                <div>24.04.30</div>
              </div>
              <div className="flex gap-[8px]">
                <div className="font-bold">작성자</div>
                <div>김주은</div>
              </div>
              <div className="flex gap-[8px]">
                <div className="font-bold">진행기간</div>
                <div>없음</div>
              </div>
              <div className="flex gap-[8px]">
                <div className="font-bold">조회수</div>
                <div>12명 읽음</div>
              </div>
            </div>

            <Image
              className="w-[712px] h-[417px] bg-contain bg-center"
              width={712}
              height={417}
              src="https://s3-alpha-sig.figma.com/img/388d/c026/cf053329ca2233996a2bac5635059fd1?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cSq9p91LPmUlRmka82LTzX1WWxAe4j1eDt8KBjxytvPGfhaTD4eb2zz-Tn-yuEL6LIEnK3XYVIo~29MN1ShJIZA8QQ7rK6jlgy4KyFhP~5WO4Z6rBalOYicdLlL-rtlkqXAirODRaKvC9szalKXbn8M4ugRVW6pX2E8KCKRkwpoA965OlSeg61JKO0d8e2Md0-RaFyjpXhmwOEFoj3Dhy4ddJS5-Pq4SGWJduQ9eqD7g-IwblNqK~1T7FZ0IdfXeekKCm-WJPsgp-~5V-i3yDTrV~cU-4r7fEcu4BZYRtYKsys7m0o0TZiL6X9~gYAh7PE2dY32PfunAt2cdsgWrqg__"
              alt="이미지"
            />
            {/* <img
              src="https://s3-alpha-sig.figma.com/img/388d/c026/cf053329ca2233996a2bac5635059fd1?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OBuuKSqG7yX1GBRWp-dkP8YMovet4kLoLbhZ8iq17aQmyrvd7mUFZEqfctey66VFMpGJVU8Y0VwC6ZogepkrEXv9SmVTqAbXjU4Z~klAlGbEieSBt3PpEMomgLGBL2~nw0XQb39UtKd61Hlt7JYhClg9Eh4OWGZF6okHFIKS0R5SO3nC5F58tVbOwHRsLcl58jX9s-klyd-z6TLbPrr9uC7cAQfspkMX3-ZuchKN1lk59QYArEgaG9dROlM~~PT2juGccZURA9arcO4xmQ-ZEnWB6OEJyO5YUWbeRjUrBfTFj~XdCJOgsSzv1ywb8apaXcIC-Q9o~~wbt3EL4N2VBQ__"
              alt="image"
              width={712}
              height={417}
            /> */}
            <div className="text-[16px] font-normal leading-[24px]">
              하자조치 : 2024.05.15 시작 예정
              <br />
              2층 호실들 중 3개의 호실에 우수관 누수가 발생했습니다.
              <br /> 한양 하자팀 / 이노 인테리어 업체를 불러서 하자 공사를
              할예정입니다.
            </div>
          </div>
          <div className="h-[8px] my-[40px] bg-gray-50 shadow-post" />
          <AdminComments />
        </div>
      </div>
    </div>
  )
}
