// 'use client'

// import { useEffect, useState } from 'react'
// import Card, { CardStyle } from '@/components/atoms/Card'
// import NavBar from '@/components/atoms/NavBar'
// import TagBadge, { TagBadgeStyle } from '@/components/atoms/TagBadge'
// import Image from 'next/image'
// import Link from 'next/link'
// import ManageCard from '@/components/molecules/ManageCard'
// import { useAccessToken } from '@/components/store/AccessTokenStore'

// const cardsPerPage = 3

// export default function Page() {
//   const { accessToken } = useAccessToken()
//   const [searchQuery, setSearchQuery] = useState('')
//   const [isSearchFilled, setIsSearchFilled] = useState(false)

//   const [searchRepair, setSearchRepair] = useState<REPAIR_LIST>({
//     totalElements: 0,
//     totalPages: 0,
//     articles: [],
//     currentPage: 0,
//     pageSize: 3,
//   })

//   const [searchManage, setSearchManage] = useState<REPAIR_LIST>({
//     totalElements: 0,
//     totalPages: 0,
//     articles: [],
//     currentPage: 0,
//     pageSize: 3,
//   })

//   const [currentPage1, setcurrentPage1] = useState(0)
//   const [currentPage2, setcurrentPage2] = useState(0)

//   const [totalCard1, setTotalCard1] = useState(0)
//   const [totalCard2, setTotalCard2] = useState(0)

//   const [articles, setArticles] = useState<REPAIR_LIST_ARTICLE>()
//   const getSearchResults = async (query: string) => {
//     try {
//       const response1 = await fetch(
//         `http://10aeat.com/repair?keyword=${query}&page=${currentPage1}`,
//         {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             AccessToken: accessToken,
//           },
//         },
//       )
//       const response2 = await fetch(
//         `http://10aeat.com/manage?keyword=${query}&page=${currentPage2}`,
//         {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             AccessToken: accessToken,
//           },
//         },
//       )
//       const data1 = await response1.json()
//       const data2 = await response2.json()
//       setSearchRepair(data1.data)
//       setTotalCard1(data1.data?.totalElements)
//       setSearchManage(data2.data)
//       setTotalCard2(data2.data?.totalElements)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const handleTagBadgeClick = (tag: string) => {
//     setSearchQuery(tag)
//   }

//   const handleSearchInputChange = (
//     event: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     setSearchQuery(event.target.value)
//     setIsSearchFilled(true)
//   }

//   const handleSearchInputClear = () => {
//     setSearchQuery('')
//     setIsSearchFilled(false)
//   }

//   const handleLoadMoreSet1 = () => {
//     setcurrentPage1(currentPage1 + 1)
//   }

//   const handleLoadMoreSet2 = () => {
//     setcurrentPage2(currentPage2 + 1)
//   }

//   const totalPagesSet1 = Math.ceil(totalCard1 / cardsPerPage)
//   const totalPagesSet2 = Math.ceil(totalCard2 / cardsPerPage)

//   const visibleCardsSet1 = Array.from(
//     { length: currentPage1 * cardsPerPage },
//     (_, i) => i + 1,
//   ).slice(0, totalCard1)

//   const visibleCardsSet2 = Array.from(
//     { length: currentPage2 * cardsPerPage },
//     (_, i) => i + 1,
//   ).slice(0, totalCard2)

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Enter') {
//       getSearchResults(searchQuery)
//       console.log("it's working")
//     }
//   }
//   console.log(searchRepair)
//   console.log(searchManage)
//   return (
//     <div className="flex flex-col h-full min-h-[812px] w-full items-center bg-gray-100">
//       <NavBar isTextChange={false} isTitle>
//         검색
//       </NavBar>
//       <div className="relative w-[345px] h-[90px]">
//         <div className="w-[345px] h-[90px]">
//           <div className="inline-flex items-start gap-[8px] absolute top-[66px] left-[82px]">
//             <TagBadge
//               tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}
//               onClickFunction={() => handleTagBadgeClick('설치')}
//             >
//               설치
//             </TagBadge>
//             <TagBadge
//               tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}
//               onClickFunction={() => handleTagBadgeClick('보수')}
//             >
//               보수
//             </TagBadge>
//             <TagBadge
//               tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}
//               onClickFunction={() => handleTagBadgeClick('교체')}
//             >
//               교체
//             </TagBadge>
//             <TagBadge
//               tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}
//               onClickFunction={() => handleTagBadgeClick('공사')}
//             >
//               공사
//             </TagBadge>
//           </div>
//           <div className="absolute top-[64px] font-Pretendard text-[16px] font-semibold leading-[24px] capitalize">
//             추천검색어
//           </div>
//           <div className="absolute w-[343px] h-[50px]">
//             <div className="relative w-[345px] h-[52px] border-b border-gray-800">
//               <div className="absolute w-[185px] h-[26px] top-[13px] left-[6px]">
//                 <input
//                   className="left-[30px] font-Pretendard font-normal text-gray-400 bg-gray-100 text-[20px] leading-[26px] absolute"
//                   placeholder="무엇을 찾으시나요?"
//                   type="text"
//                   value={searchQuery}
//                   onChange={handleSearchInputChange}
//                   onKeyDown={handleKeyDown}
//                 />
//                 <Image
//                   src="/icons/search.svg"
//                   width={22}
//                   height={22}
//                   alt="search"
//                 />
//                 {isSearchFilled && (
//                   <Image
//                     onClick={handleSearchInputClear}
//                     src="/icons/close_circle.svg"
//                     width={24}
//                     height={24}
//                     alt="close_circle"
//                     className="relative left-[308px] bottom-[18px] w-[20px] h-[20px] cursor-pointer"
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {(searchRepair && searchRepair?.articles?.length > 0) ||
//       (searchManage && searchManage?.articles?.length > 0) ? (
//         <>
//           <div className="relative w-[345px]">
//             <div className="block flex mt-[34px] gap-[8px]">
//               <div className="relative font-Pretendard font-bold text-gray-900 text-[18px] leading-[24px] whitespace-nowrap">
//                 건물 유지보수 사안
//               </div>
//               <div className="inline-flex h-[24px] px-[12px] py-[4px] flex-col justify-center items-center rounded-[100px] bg-blue-800">
//                 <div className="font-Pretendard text-[14px] font-bold leading-[24px] text-blue-50">
//                   {totalCard1}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col justify-center mt-[20px] gap-[16px]">
//             {/* {visibleCardsSet1.map((item, index) => (
//           <Card
//             key={index}
//             cardStyle={CardStyle.ALL}
//             isSave={item.isS}
//             title={`제목 ${index + 1}`}
//             state={''}
//             name={''}
//             view={0}
//             comment={0}
//           />
//         ))} */}
//             {currentPage1 < totalPagesSet1 && (
//               <button
//                 className="flex w-[345px] h-[24px] justify-center gap-[4px]"
//                 type="button"
//                 onClick={handleLoadMoreSet1}
//               >
//                 <div className="text-gray-600 text-center font-Pretendard text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
//                   더보기 {currentPage1 + 1}/{totalPagesSet1}
//                 </div>
//                 <Image
//                   src="/icons/arrow_down_large.svg"
//                   width={24}
//                   height={24}
//                   alt="arrow_down_large"
//                 />
//               </button>
//             )}
//           </div>
//           <div className="relative w-[345px]">
//             <div className="block flex mt-[34px] gap-[8px]">
//               <div className="relative font-Pretendard font-bold text-gray-900 text-[18px] leading-[24px] whitespace-nowrap">
//                 법정 시설물 유지관리 점검 현황
//               </div>
//               <div className="inline-flex h-[24px] px-[12px] py-[4px] flex-col justify-center items-center rounded-[100px] bg-blue-800">
//                 <div className="font-Pretendard text-[14px] font-bold leading-[24px] text-blue-50">
//                   {totalCard2}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col justify-center mt-[20px] gap-[16px]">
//             {/* {visibleCardsSet2.map((item, index) => (
//           <ManageCard
//             key={index}
//             id={index}
//             period={item.period}
//             periodCount={index}
//             title={`제목 ${index + 1}`}
//             allSchedule={0}
//             completedSchedule={0}
//             issueId={null}
//           />
//         ))} */}
//             {currentPage2 < totalPagesSet2 && (
//               <button
//                 className="flex w-[345px] h-[24px] justify-center gap-[4px]"
//                 type="button"
//                 onClick={handleLoadMoreSet2}
//               >
//                 <div className="text-gray-600 text-center font-Pretendard text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
//                   더보기 {currentPage2 + 1}/{totalPagesSet2}
//                 </div>
//                 <Image
//                   src="/icons/arrow_down_large.svg"
//                   width={24}
//                   height={24}
//                   alt="arrow_down_large"
//                 />
//               </button>
//             )}
//           </div>
//         </>
//       ) : (
//         <div className="flex flex-col justify-center items-center min-h-[450px]">
//           <Image
//             src="/icons/search.svg"
//             width={80}
//             height={80}
//             alt="no-data"
//             className="shrink-0 mb-[20px] opacity-20"
//           />
//           <span className="text-gray-600 text-center font-Pretendard text-xl font-bold capitalize">
//             현재 <span className="text-bold">'{searchQuery}'</span>와 관련된{' '}
//             <br />
//             검색결과가 없어요
//           </span>
//         </div>
//       )}
//     </div>
//   )
// }

'use client'

import { useEffect, useState } from 'react'
import Card, { CardStyle } from '@/components/atoms/Card'
import NavBar from '@/components/atoms/NavBar'
import TagBadge, { TagBadgeStyle } from '@/components/atoms/TagBadge'
import Image from 'next/image'
import Link from 'next/link'
import ManageCard from '@/components/molecules/ManageCard'
import { useAccessToken } from '@/components/store/AccessTokenStore'
import { useRouter } from 'next/navigation'

const cardsPerPage = 3

export default function Page() {
  const router = useRouter()
  const { accessToken } = useAccessToken()
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFilled, setIsSearchFilled] = useState(false)

  const [searchRepair, setSearchRepair] = useState<REPAIR_LIST>({
    totalElements: 0,
    totalPages: 0,
    articles: [],
    currentPage: 0,
    pageSize: 3,
  })
  const [searchManage, setSearchManage] = useState<REPAIR_LIST>({
    totalElements: 0,
    totalPages: 0,
    articles: [],
    currentPage: 0,
    pageSize: 3,
  })

  const getSearchResults = async (
    query: string,
    page1: number,
    page2: number,
  ) => {
    try {
      const response1 = await fetch(
        `http://10aeat.com/repair?keyword=${query}&page=${page1}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            AccessToken: accessToken,
          },
        },
      )
      const response2 = await fetch(
        `http://10aeat.com/manage?keyword=${query}&page=${page2}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            AccessToken: accessToken,
          },
        },
      )
      const data1 = await response1.json()
      const data2 = await response2.json()
      setSearchRepair((prevState) => ({
        ...prevState,
        articles: [...prevState.articles, ...data1.data.articles],
        totalElements: data1.data.totalElements,
        totalPages: data1.data.totalPages,
      }))
      setSearchManage((prevState) => ({
        ...prevState,
        articles: [...prevState.articles, ...data2.data.articles],
        totalElements: data2.data.totalElements,
        totalPages: data2.data.totalPages,
      }))
    } catch (error) {
      console.error(error)
    }
  }

  const handleTagBadgeClick = (tag: string) => {
    setSearchQuery(tag)
  }

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value)
    setIsSearchFilled(true)
  }

  const handleSearchInputClear = () => {
    setSearchQuery('')
    setIsSearchFilled(false)
  }

  const handleLoadMoreSet1 = () => {
    setSearchRepair((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage + 1,
    }))
    getSearchResults(
      searchQuery,
      searchRepair.currentPage + 1,
      searchManage.currentPage,
    )
  }

  const handleLoadMoreSet2 = () => {
    setSearchManage((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage + 1,
    }))
    getSearchResults(
      searchQuery,
      searchRepair.currentPage,
      searchManage.currentPage + 1,
    )
  }

  const totalPagesSet1 = Math.ceil(searchRepair.totalElements / cardsPerPage)
  const totalPagesSet2 = Math.ceil(searchManage.totalElements / cardsPerPage)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchRepair({
        totalElements: 0,
        totalPages: 0,
        articles: [],
        currentPage: 0,
        pageSize: 3,
      })
      setSearchManage({
        totalElements: 0,
        totalPages: 0,
        articles: [],
        currentPage: 0,
        pageSize: 3,
      })
      getSearchResults(searchQuery, 0, 0)
    }
  }

  // 카드 스타일 지정 함수
  function determineCardStyle(article: REPAIR_LIST_ARTICLE): CardStyle {
    const hasImage = article.imageUrl && article.imageUrl !== ''
    const hasPeriod = article.startConstruction && article.endConstruction

    if (hasImage && hasPeriod) {
      return CardStyle.ALL
    }
    if (!hasImage && hasPeriod) {
      return CardStyle.NO_IMG
    }
    if (hasImage && !hasPeriod) {
      return CardStyle.NO_PERIOD
    }
    return CardStyle.ALL_NO
  }

  const handleCardClick = (articleId: number) => {
    // 해당 카드의 상세 페이지 경로를 생성합니다.
    const detailPath = `/repair/${articleId}/detail`

    // 생성한 경로로 페이지를 이동합니다.
    router.push(detailPath)
  }

  return (
    <div className="flex flex-col h-full min-h-[812px] w-full items-center bg-gray-100">
      <NavBar isTextChange={false} isTitle>
        검색
      </NavBar>
      <div className="relative w-[345px] h-[90px]">
        <div className="w-[345px] h-[90px]">
          <div className="inline-flex items-start gap-[8px] absolute top-[66px] left-[82px]">
            <TagBadge
              tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}
              onClickFunction={() => handleTagBadgeClick('설치')}
            >
              설치
            </TagBadge>
            <TagBadge
              tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}
              onClickFunction={() => handleTagBadgeClick('보수')}
            >
              보수
            </TagBadge>
            <TagBadge
              tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}
              onClickFunction={() => handleTagBadgeClick('교체')}
            >
              교체
            </TagBadge>
            <TagBadge
              tagBadgeStyle={TagBadgeStyle.DEFAULT_TAG}
              onClickFunction={() => handleTagBadgeClick('공사')}
            >
              공사
            </TagBadge>
          </div>
          <div className="absolute top-[64px] font-Pretendard text-[16px] font-semibold leading-[24px] capitalize">
            추천검색어
          </div>
          <div className="absolute w-[343px] h-[50px]">
            <div className="relative w-[345px] h-[52px] border-b border-gray-800">
              <div className="absolute w-[185px] h-[26px] top-[13px] left-[6px]">
                <input
                  className="left-[30px] font-Pretendard font-normal text-gray-400 bg-gray-100 text-[20px] leading-[26px] absolute"
                  placeholder="무엇을 찾으시나요?"
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onKeyDown={handleKeyDown}
                />
                <Image
                  src="/icons/search.svg"
                  width={22}
                  height={22}
                  alt="search"
                />
                {isSearchFilled && (
                  <Image
                    onClick={handleSearchInputClear}
                    src="/icons/close_circle.svg"
                    width={24}
                    height={24}
                    alt="close_circle"
                    className="relative left-[308px] bottom-[18px] w-[20px] h-[20px] cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {searchRepair && searchRepair?.articles?.length > 0 && (
        <>
          <div className="relative w-[345px]">
            <div className="block flex mt-[34px] gap-[8px]">
              <div className="relative font-Pretendard font-bold text-gray-900 text-[18px] leading-[24px] whitespace-nowrap">
                건물 유지보수 사안
              </div>
              <div className="inline-flex h-[24px] px-[12px] py-[4px] flex-col justify-center items-center rounded-[100px] bg-blue-800">
                <div className="font-Pretendard text-[14px] font-bold leading-[24px] text-blue-50">
                  {searchRepair.totalElements}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-[20px] gap-[16px]">
            {searchRepair.articles?.map((item, index) => (
              <Card
                onClickFunction={() => handleCardClick(item.id)}
                cardStyle={determineCardStyle(item)}
                isSave={item.isSave}
                title={item.title}
                state={
                  // eslint-disable-next-line no-nested-ternary
                  item.progress === 'COMPLETE'
                    ? '완료'
                    : item.progress === 'INPROGRESS'
                      ? '진행중'
                      : '대기'
                }
                name={item.managerName}
                view={item.viewCount}
                comment={item.commentCount}
              />
            ))}
            {searchRepair.currentPage + 1 < totalPagesSet1 && (
              <button
                className="flex w-[345px] h-[24px] justify-center gap-[4px]"
                type="button"
                onClick={handleLoadMoreSet1}
              >
                <div className="text-gray-600 text-center font-Pretendard text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
                  더보기 {searchRepair.currentPage + 1}/{totalPagesSet1}
                </div>
                <Image
                  src="/icons/arrow_down_large.svg"
                  width={24}
                  height={24}
                  alt="arrow_down_large"
                />
              </button>
            )}
          </div>
        </>
      )}
      {searchManage && searchManage?.articles?.length > 0 && (
        <>
          <div className="relative w-[345px]">
            <div className="block flex mt-[34px] gap-[8px]">
              <div className="relative font-Pretendard font-bold text-gray-900 text-[18px] leading-[24px] whitespace-nowrap">
                법정 시설물 유지관리 점검 현황
              </div>
              <div className="inline-flex h-[24px] px-[12px] py-[4px] flex-col justify-center items-center rounded-[100px] bg-blue-800">
                <div className="font-Pretendard text-[14px] font-bold leading-[24px] text-blue-50">
                  {searchManage.totalElements}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-[20px] gap-[16px]">
            {searchManage.articles.map((item, index) => (
              <ManageCard
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                id={item.id}
                period={item.period}
                periodCount={index}
                title={item.title}
                allSchedule={0}
                completedSchedule={0}
                issueId={null}
              />
            ))}
            {searchManage.currentPage + 1 < totalPagesSet2 && (
              <button
                className="flex w-[345px] h-[24px] justify-center gap-[4px]"
                type="button"
                onClick={handleLoadMoreSet2}
              >
                <div className="text-gray-600 text-center font-Pretendard text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
                  더보기 {searchManage.currentPage + 1}/{totalPagesSet2}
                </div>
                <Image
                  src="/icons/arrow_down_large.svg"
                  width={24}
                  height={24}
                  alt="arrow_down_large"
                />
              </button>
            )}
          </div>
        </>
      )}
      {searchManage.totalElements === 0 && searchRepair.totalElements === 0 && (
        <div className="flex flex-col justify-center items-center min-h-[450px]">
          <Image
            src="/icons/search.svg"
            width={80}
            height={80}
            alt="no-data"
            className="shrink-0 mb-[20px] opacity-20"
          />
          <span className="text-gray-600 text-center font-Pretendard text-xl font-bold capitalize">
            현재 <span className="text-bold">'{searchQuery}'</span>와 관련된{' '}
            <br />
            검색결과가 없어요
          </span>
        </div>
      )}
    </div>
  )
}
