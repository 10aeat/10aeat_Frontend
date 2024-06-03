import Image from 'next/image'
import Dropdown from './Dropdown'
import AdminButton, { ButtonStyle } from './AdminButton'

export default function AdminListTable() {
  return (
    <>
      <table className="flex items-start content-start flex-wrap w-[1000px]">
        <thead className="flex w-[1000px] border-b-[1px] border-solid border-gray-400 bg-gray-100 whitespace-nowrap">
          <tr className="flex w-full h-[56px]">
            <th className="inline-flex px-[16px] py-[28px] items-center gap-[16px]">
              <Image
                src={`/icons/checkbox.svg`}
                width={24}
                height={24}
                alt="checkbox"
                className="w-[24px] h-[24px]"
              />
              <div className="font-Pretendard text-[16px] font-medium leading-[24px] capitalize text-gray-900 whitespace-nowrap">
                유형
              </div>
            </th>
            <th className="flex w-[408px] flex-col items-start">
              <div className="flex justify-center items-center gap-[12px] flex-[1_0_0%]">
                <div className="flex h-[48px] flex-col justify-center flex-[1_0_0%] overflow-hidden text-gray-900 text-ellipsis whitespace-nowrap font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                  사안내용
                </div>
              </div>
            </th>
            <th className="inline-flex px-[16px] py-[12px] items-center gap-[12px]">
              <div className="flex justify-center items-center gap-[4px] flex-[1_0_0%]">
                <div className="flex h-[24px] flex-col justify-center flex-[1_0_0%] text-gray-900 font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                  진행상태
                </div>
              </div>
            </th>
            <th className="inline-flex px-0 py-[12px] justify-center items-center gap-[12px]">
              <div className="flex h-[24px] flex-col justify-center flex-[1_0_0%] text-gray-900 font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                진행현황/이슈
              </div>
            </th>
            <th className="inline-flex px-[24px] py-[12px] justify-center items-center gap-[12px]">
              <span className="float text-center text-gray-900 font-Pretendard text-[16px] font-medium leading-[24px] capitalize ">
                기간유무
              </span>
            </th>
            <th className="inline-flex px-0 py-[12px] items-center gap-[12px]">
              <div className="flex justify-center items-center gap-[4px] flex-[1_0_0%]">
                <span className="text-center text-gray-900 font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                  게시일/수정일
                </span>
              </div>
            </th>
            <th className="inline-flex pl-[24px] py-[12px] justify-center items-center gap-[12px]">
              <div className="flex w-[42px] h-[24px] flex-col justify-center text-center  text-gray-900 font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                조회수
              </div>
            </th>
            <th className="inline-flex px-[24px] py-[12px] justify-center items-center gap-[12px]">
              <div className="flex w-[42px] h-[24px] flex-col justify-center text-center  text-gray-900 font-Pretendard text-[16px] font-medium leading-[24px] capitalize">
                댓글
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white w-[1000px]">
          <tr className="flex w-[1000px] h-[104px] border-b-[1px] border-solid border-gray-300">
            <td className="flex min-w-[96px] px-[16px] py-[28px] items-center gap-[16px] ">
              <Image
                src={`/icons/checkbox.svg`}
                width={24}
                height={24}
                alt="checkbox"
                className="w-[24px] h-[24px]"
              />
              <div className="font-Pretendard text-[16px] font-normal leading-[24px] capitalize text-gray-900 whitespace-nowrap">
                설치
              </div>
            </td>
            <td className="flex max-w-[387px] px-[28px] py-[12px] justify-center items-center gap-[12px]">
              <div className="flex justify-center items-center gap-[12px] flex-[1_0_0%]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cWDjUDJ7g-r2NbjIt9GsWB479fOJ5zT9oTIC3OeTfQi2G9F-UuMwaQxHgMZAL35-fjUki4BLtau6NKGhopGQHfjW1cIoTbOt6LgHNELrV03T7BdqeCcDiW41gU1XJVv33RqtIijYLaXTpHfmmEfQgkqoOKDdkExSkIqfxQqXRq3kfy4JYKZd2-jc2UtvfXQRPFo4eghaNT9SMZTXv-AF7wMpzrvNPzcpMg9qdRqoipjBkw6Zbtu8PIi7cgov2U2s20KUxx1RpkOTK7DMeosoQYGfQs7L-nYIOuiYc7tbYTUeMP2~MSBeU5tn-8DDoEUm-r057CBazp7j5ndpa3wOJw__"
                  width={48}
                  height={48}
                  alt="image"
                  className="w-[48px] h-[48px] rounded-[8px]"
                />
                <div
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                  }}
                  className="min-w-[320px] overflow-hidden text-ellipsis font-Pretendard text-gray-900 text-[16px] font-normal leading-[24px] capitalize"
                >
                  2층 우수관 하자발생 조치 두줄 이되면이렇게 내려갑니다. 글이
                  넘치게 되면 이렇게 저렇게 늘어갑니다 글이 넘치게 되면 이렇게
                  저렇게 늘어갑니다 글이 넘치게 되면 이렇게 저렇게 늘어갑니다
                </div>
              </div>
            </td>
            <td className="flex max-w-[88px] px-[16px] py-[12px] whitespace-nowrap items-center gap-[12px] self-stretch">
              <div className="flex justify-center items-center gap-[4px] flex-[1_0_0%]">
                <div className="flex w-[42px] h-[24px] flex-col justify-center font-Pretendard text-center text-gray-600 text-[16px] font-semibold leading-[24px] capitalize">
                  진행중
                </div>
                <Image
                  src="/icons/arrow_down_small.svg"
                  width={24}
                  height={24}
                  alt="arrow_down"
                  className="w-[24px] h-[24px]"
                />
              </div>
            </td>
            <td className="flex min-w-[88px] py-[12px] justify-center whitespace-nowrap items-center gap-[12px] self-stretch ">
              <AdminButton
                buttonSize="sm"
                buttonStyle={ButtonStyle.ACCENT}
                isDisabled={false}
              >
                업데이트
              </AdminButton>
            </td>
            <td className="flex min-w-[104px] px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
              <div className="flex w-[42px] h-[24px] flex-col justify-center text-center font-Pretendard text-gray-900 text-[16px] font-normal leading-[24px] capitalize">
                유
              </div>
            </td>
            <td className="flex min-w-[88px] px-0 py-[12px] items-center gap-[12px] self-stretch">
              <div className="flex justify-center items-center gap-[4px] flex-[1_0_0%]">
                <div className="flex  h-[24px] flex-col justify-center flex-[1_0_0%] font-Pretendard text-gray-900 text-center font-[16px] font-normal leading-[24px] capitalize">
                  24.05.06
                </div>
              </div>
            </td>
            <td className="flex pl-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
              <div className="flex w-[42px] h-[24px] flex-col justify-center text-center font-Pretendard text-gray-900 text-[16px] font-normal leading-[24px] capitalize">
                10
              </div>
            </td>
            <td className="flex px-[24px] py-[12px] justify-center items-center gap-[12px] self-stretch">
              <div className="flex w-[42px] h-[24px] flex-col justify-center text-center font-Pretendard text-gray-900 text-[16px] font-normal leading-[24px] capitalize">
                5
              </div>
            </td>
          </tr>
        </tbody>
        <div className="flex w-[1000px] h-[80px] flex-col justify-center overflow-hidden text-gray-900 text-center text-ellipsis whitespace-nowrap font-Prentendard text-[16px] font-medium leading-[24px] capitalize">
          건물 유지보수 사안을 등록해주세요.
        </div>
      </table>
    </>
  )
}
