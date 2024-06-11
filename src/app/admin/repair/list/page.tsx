'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import AdminButton, {
  ButtonStyle,
} from '@/app/admin/_components/atoms/AdminButton'
import AdminFilterBtn from '@/app/admin/_components/atoms/AdminFilterBtn'
import AdminInput from '@/app/admin/_components/atoms/AdminInput'
import AdminListTable from '@/app/admin/_components/atoms/AdminRepairTable'
import AdminLogo from '@/app/admin/_components/atoms/AdminLogo'
import Dropdown from '@/components/atoms/Dropdown'
import Pagination from '@/components/atoms/Pagination'
import { useAccessToken } from '@/components/store/AccessTokenStore'
import SideMenu from '@/app/admin/_components/atoms/Sidemenu'

export default function Page() {
  const { accessToken, setAccessToken } = useAccessToken()

  const email = 'admin@google.com'
  const password = 'adminpassword'

  const [repairList, setRepairList] = useState<REPAIR_LIST>({
    pageSize: 5,
    currentPage: 0,
    totalElements: 0,
    totalPages: 1,
    articles: [],
  })
  const data = [
    {
      id: 1,
      category: 'REPLACE',
      managerName: '최관리',
      progress: 'PENDING',
      title: '새로운 설치 작업',
      period: '무',
      commentCount: 0,
      viewCount: 1,
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U0CQtsEThpNXCWV~Sm425-ZI4EKxQMF0RLPL4oRKgHsaQ4ApGVE1qG2cBB-DvWEE-2-7Srywz02ZD7dZctAXRclpXmJ0gVKxB6Jf3iJwS1XNLiSlOzvS4RmUfadpNF-NvVMonaYFeearumlpcFXq0BbiywBNCJO94MK3s~eAzxaB~iGSI~LEzycYmY4Pl4xAanryZHTWTR-X0WRRP4ZaWUeQVAbxQZgXr82GozzNzNND7LZ81oQa3EqQg9j3fjphfYb-qO-Cod8RNEbBDXn6IJN3WlmL2UguQzu-uJnf64Fh3GB8QZLW4~UvMV2rBgtaryHA5Z0WaOGU-MGrmddJYA__',
      // '/public/images/test1.svg',
      activeIssueId: 1,
      date: '24.05.20',
    },
    {
      id: 2,
      category: 'REPLACE',
      managerName: '최관리',
      progress: 'INPROGRESS',
      title: '새로운 설치 작업',
      period: '무',
      commentCount: 0,
      viewCount: 1,
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U0CQtsEThpNXCWV~Sm425-ZI4EKxQMF0RLPL4oRKgHsaQ4ApGVE1qG2cBB-DvWEE-2-7Srywz02ZD7dZctAXRclpXmJ0gVKxB6Jf3iJwS1XNLiSlOzvS4RmUfadpNF-NvVMonaYFeearumlpcFXq0BbiywBNCJO94MK3s~eAzxaB~iGSI~LEzycYmY4Pl4xAanryZHTWTR-X0WRRP4ZaWUeQVAbxQZgXr82GozzNzNND7LZ81oQa3EqQg9j3fjphfYb-qO-Cod8RNEbBDXn6IJN3WlmL2UguQzu-uJnf64Fh3GB8QZLW4~UvMV2rBgtaryHA5Z0WaOGU-MGrmddJYA__',
      // '/public/images/test1.svg',
      activeIssueId: 1,
      date: '24.05.20',
    },
    {
      id: 3,
      category: 'REPLACE',
      managerName: '최관리',
      progress: 'COMPLETE',
      title: '새로운 설치 작업',
      period: '무',
      commentCount: 0,
      viewCount: 1,
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U0CQtsEThpNXCWV~Sm425-ZI4EKxQMF0RLPL4oRKgHsaQ4ApGVE1qG2cBB-DvWEE-2-7Srywz02ZD7dZctAXRclpXmJ0gVKxB6Jf3iJwS1XNLiSlOzvS4RmUfadpNF-NvVMonaYFeearumlpcFXq0BbiywBNCJO94MK3s~eAzxaB~iGSI~LEzycYmY4Pl4xAanryZHTWTR-X0WRRP4ZaWUeQVAbxQZgXr82GozzNzNND7LZ81oQa3EqQg9j3fjphfYb-qO-Cod8RNEbBDXn6IJN3WlmL2UguQzu-uJnf64Fh3GB8QZLW4~UvMV2rBgtaryHA5Z0WaOGU-MGrmddJYA__',
      // '/public/images/test1.svg',
      activeIssueId: 1,
      date: '24.05.20',
    },
    {
      id: 4,
      category: 'REPAIR',
      managerName: '최관리',
      progress: 'PENDING',
      title: '새로운 설치 작업',
      period: '무',
      commentCount: 0,
      viewCount: 1,
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U0CQtsEThpNXCWV~Sm425-ZI4EKxQMF0RLPL4oRKgHsaQ4ApGVE1qG2cBB-DvWEE-2-7Srywz02ZD7dZctAXRclpXmJ0gVKxB6Jf3iJwS1XNLiSlOzvS4RmUfadpNF-NvVMonaYFeearumlpcFXq0BbiywBNCJO94MK3s~eAzxaB~iGSI~LEzycYmY4Pl4xAanryZHTWTR-X0WRRP4ZaWUeQVAbxQZgXr82GozzNzNND7LZ81oQa3EqQg9j3fjphfYb-qO-Cod8RNEbBDXn6IJN3WlmL2UguQzu-uJnf64Fh3GB8QZLW4~UvMV2rBgtaryHA5Z0WaOGU-MGrmddJYA__',
      // '/public/images/test1.svg',
      activeIssueId: 1,
      date: '24.05.20',
    },
    {
      id: 5,
      category: 'REPAIR',
      managerName: '최관리',
      progress: 'INPROGRESS',
      title: '새로운 설치 작업',
      period: '무',
      commentCount: 0,
      viewCount: 1,
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U0CQtsEThpNXCWV~Sm425-ZI4EKxQMF0RLPL4oRKgHsaQ4ApGVE1qG2cBB-DvWEE-2-7Srywz02ZD7dZctAXRclpXmJ0gVKxB6Jf3iJwS1XNLiSlOzvS4RmUfadpNF-NvVMonaYFeearumlpcFXq0BbiywBNCJO94MK3s~eAzxaB~iGSI~LEzycYmY4Pl4xAanryZHTWTR-X0WRRP4ZaWUeQVAbxQZgXr82GozzNzNND7LZ81oQa3EqQg9j3fjphfYb-qO-Cod8RNEbBDXn6IJN3WlmL2UguQzu-uJnf64Fh3GB8QZLW4~UvMV2rBgtaryHA5Z0WaOGU-MGrmddJYA__',
      // '/public/images/test1.svg',
      activeIssueId: 1,
      date: '24.05.20',
    },
    {
      id: 6,
      category: 'REPAIR',
      managerName: '최관리',
      progress: 'COMPLETE',
      title: '새로운 설치 작업',
      period: '무',
      commentCount: 0,
      viewCount: 1,
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U0CQtsEThpNXCWV~Sm425-ZI4EKxQMF0RLPL4oRKgHsaQ4ApGVE1qG2cBB-DvWEE-2-7Srywz02ZD7dZctAXRclpXmJ0gVKxB6Jf3iJwS1XNLiSlOzvS4RmUfadpNF-NvVMonaYFeearumlpcFXq0BbiywBNCJO94MK3s~eAzxaB~iGSI~LEzycYmY4Pl4xAanryZHTWTR-X0WRRP4ZaWUeQVAbxQZgXr82GozzNzNND7LZ81oQa3EqQg9j3fjphfYb-qO-Cod8RNEbBDXn6IJN3WlmL2UguQzu-uJnf64Fh3GB8QZLW4~UvMV2rBgtaryHA5Z0WaOGU-MGrmddJYA__',
      // '/public/images/test1.svg',
      activeIssueId: 1,
      date: '24.05.20',
    },
    {
      id: 7,
      category: 'INSTALL',
      managerName: '최관리',
      progress: 'PENDING',
      title: '새로운 설치 작업',
      period: '무',
      commentCount: 0,
      viewCount: 1,
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U0CQtsEThpNXCWV~Sm425-ZI4EKxQMF0RLPL4oRKgHsaQ4ApGVE1qG2cBB-DvWEE-2-7Srywz02ZD7dZctAXRclpXmJ0gVKxB6Jf3iJwS1XNLiSlOzvS4RmUfadpNF-NvVMonaYFeearumlpcFXq0BbiywBNCJO94MK3s~eAzxaB~iGSI~LEzycYmY4Pl4xAanryZHTWTR-X0WRRP4ZaWUeQVAbxQZgXr82GozzNzNND7LZ81oQa3EqQg9j3fjphfYb-qO-Cod8RNEbBDXn6IJN3WlmL2UguQzu-uJnf64Fh3GB8QZLW4~UvMV2rBgtaryHA5Z0WaOGU-MGrmddJYA__',
      // '/public/images/test1.svg',
      activeIssueId: 1,
      date: '24.05.20',
    },
    {
      id: 8,
      category: 'INSTALL',
      managerName: '최관리',
      progress: 'INPROGRESS',
      title: '새로운 설치 작업',
      period: '무',
      commentCount: 0,
      viewCount: 1,
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U0CQtsEThpNXCWV~Sm425-ZI4EKxQMF0RLPL4oRKgHsaQ4ApGVE1qG2cBB-DvWEE-2-7Srywz02ZD7dZctAXRclpXmJ0gVKxB6Jf3iJwS1XNLiSlOzvS4RmUfadpNF-NvVMonaYFeearumlpcFXq0BbiywBNCJO94MK3s~eAzxaB~iGSI~LEzycYmY4Pl4xAanryZHTWTR-X0WRRP4ZaWUeQVAbxQZgXr82GozzNzNND7LZ81oQa3EqQg9j3fjphfYb-qO-Cod8RNEbBDXn6IJN3WlmL2UguQzu-uJnf64Fh3GB8QZLW4~UvMV2rBgtaryHA5Z0WaOGU-MGrmddJYA__',
      // '/public/images/test1.svg',
      activeIssueId: 1,
      date: '24.05.20',
    },
    {
      id: 9,
      category: 'INSTALL',
      managerName: '최관리',
      progress: 'COMPLETE',
      title: '새로운 설치 작업',
      period: '무',
      commentCount: 0,
      viewCount: 1,
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U0CQtsEThpNXCWV~Sm425-ZI4EKxQMF0RLPL4oRKgHsaQ4ApGVE1qG2cBB-DvWEE-2-7Srywz02ZD7dZctAXRclpXmJ0gVKxB6Jf3iJwS1XNLiSlOzvS4RmUfadpNF-NvVMonaYFeearumlpcFXq0BbiywBNCJO94MK3s~eAzxaB~iGSI~LEzycYmY4Pl4xAanryZHTWTR-X0WRRP4ZaWUeQVAbxQZgXr82GozzNzNND7LZ81oQa3EqQg9j3fjphfYb-qO-Cod8RNEbBDXn6IJN3WlmL2UguQzu-uJnf64Fh3GB8QZLW4~UvMV2rBgtaryHA5Z0WaOGU-MGrmddJYA__',
      // '/public/images/test1.svg',
      activeIssueId: 1,
      date: '24.05.20',
    },
  ]
  const [currentPage, setCurrentPage] = useState(0)
  const [articleList, setArticleList] = useState<REPAIR_LIST_ARTICLE[]>([])

  // 유지보수 게시글 전체 조회

  // OK
  useEffect(() => {
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://10aeat.com/managers/login', {
          email,
          password,
        })
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
    const getRepairListData = async () => {
      try {
        const response = await fetch(
          `http://10aeat.com/repair/articles/list?size=5`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              AccessToken: accessToken,
            },
          },
        )

        const data = await response.json()
        setRepairList(data.data)

        console.log(data)
        const article = data.data.articles

        setArticleList(article)
      } catch (error) {
        console.error(error)
      }
    }
    handleLogin()
    getRepairListData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken])

  const [category, setCategory] = useState('전체')
  const [progress, setProgress] = useState('전체')

  // 카테고리 버튼 클릭 핸들러
  const handleCategoryClick = (category: string) => {
    setCategory(category)
  }
  // 상태 버튼 클릭 핸들러
  const handleStatusClick = (status: string) => {
    setProgress(status)
  }
  console.log(category)
  return (
    <div className="relative w-full bg-white">
      <AdminLogo />
      <SideMenu menuIndex={1} />
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
        <div className="w-full h-[1px] bg-gray-400" />
        <div className="relative top-[12px] font-Pretendard text-[18px] font-semibold leading-[24px] capitalize text-gray-900">
          검색
        </div>
        <div className="relative flex top-[16px] gap-[12px] ">
          <Dropdown
            isDisabled={false}
            size="md"
            placeholder="전체"
            category={category}
            onChange={handleCategoryClick}
            options={['전체', '설치', '보수', '교체']}
          />
          <AdminInput />
          <AdminButton
            buttonSize="sm"
            buttonStyle={ButtonStyle.SECONDARY_GRAY}
            // onClickFunction={handleSearch}
          >
            <span className="text-gray-600 px-[4px]">검색</span>
          </AdminButton>
        </div>
        <div className="relative inline-flex top-[24px] items-start gap-[10px]">
          <AdminFilterBtn progress={progress} setProgress={setProgress} />
        </div>

        <AdminListTable
          category={category}
          progress={progress}
          repairList={repairList}
          articleList={articleList}
        />
        <div className="relative flex w-[1000px] justify-end items-center gap-[4px] pb-[100px]">
          {/* <Pagination
            currentPage={0}
            onPageChange={setCurrentPage}
            totalItems={100}
            itemsPerPage={5}
          /> */}
        </div>
      </div>
    </div>
  )
}
