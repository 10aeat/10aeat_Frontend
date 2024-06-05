// import Image from 'next/image'

// export default function BottomNav() {
//   return (
//     <div className="fixed absolute bottom-[0] flex w-[375px] h-[56px] rounded-t-[18px] bg-white z-10">
//       <div className="fixed w-[162px] h-[56px]">
//         <div className="relative w-[47px] h-[44px] top-[7px] left-[59px]">
//           <Image
//             className="!absolute !w-[20px] !h-[20px] !left-[13px]"
//             src="/icons/home_fill.svg"
//             width={20}
//             height={20}
//             alt="home"
//           />
//           <div className="absolute top-[24px] font-Pretendard font-medium text-gray-700 text-[12px] leading-[20px] whitespace-nowrap">
//             소유자 홈
//           </div>
//         </div>
//       </div>
//       <div className="fixed w-[162px] h-[56px]">
//         <div className="relative w-[54px] h-[44px] top-[6px] left-[266px]">
//           <Image
//             className="!absolute !w-[24px] !h-[24px] !left-[13px]"
//             src="/icons/profile_circle.svg"
//             width={24}
//             height={24}
//             alt="home"
//           />
//           <div className="absolute top-[24px] font-Pretendard font-medium text-gray-700 text-[12px] leading-[20px] whitespace-nowrap">
//             마이페이지
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import Image from 'next/image'

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 w-[375px] h-[56px] rounded-t-[18px]  z-10 flex justify-between bg-white">
      <button className="flex-1 flex items-center justify-center">
        <div className="relative w-[47px] h-[44px]">
          <Image
            className="!absolute !w-[20px] !h-[20px] !left-[13px]"
            src="/icons/home_fill.svg"
            width={20}
            height={20}
            alt="home"
          />
          <div className="absolute top-[24px] left-1/2 transform -translate-x-1/2 font-Pretendard font-medium text-gray-700 text-[12px] leading-[20px] whitespace-nowrap">
            소유자 홈
          </div>
        </div>
      </button>
      <button className="flex-1 flex items-center justify-center">
        <div className="relative w-[54px] h-[44px]">
          <Image
            className="!absolute !w-[24px] !h-[24px] !left-[13px]"
            src="/icons/profile_circle.svg"
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
