import Image from 'next/image'
import IconProfile from '@/components/icons/profile'

export default function Comment() {
  return (
    <div className="justify-center w-[375px] h-[736px] pt-[27.85px] shrink-0 rounded-t-[24px] bg-white font-Pretendard">
      <div className="inline-flex items-start gap-[264px] w-[375px] h-[24px] px-[20px] shrink-0 bg-white">
        <div className="w-[47px] h-[24px] align-text-top text-gray-900 text-[18px] leading-6 font-bold">
          댓글
        </div>
        <Image src="/icons/close.svg" width={24} height={24} alt="close" />
      </div>
      <div className="h-[17.03px] border-b border-gray-300"></div>
      <div className="pt-[20px] px-[20px]">
        <div className="flex items-center">
          <div className="w-[36px] h-[36px]">
            <IconProfile width="36px" height="36px"></IconProfile>
          </div>
          <div className="pl-[10px] text-base text-gray-900 font-bold">나소유</div>
          <div className="pl-[4px] text-sm text-[#A4A4A4] font-normal">2024.05.01</div>
        </div>
        <div className="m-[8px] text-base text-gray-900 font-normal">
          2층에서 누수가 발생 했군요. 고생 많으십니다. 아무래도 5월 15일 보다 더 빠르게 진행은 어렵겠죠?🥲
        </div>
        <div className="ml-[8px] text-sm text-gray-900 font-bold">답글달기</div>
      </div>
      <div className="ml-[56px] mt-[14px] flex text-sm items-center text-[#216FD6]">
        <div className="font-medium">답글&nbsp;</div>
        <div className="font-bold">2</div>
        <button className="ml-[5px]"><Image src="/icons/arrow_up_small.svg" width={24} height={24} alt="arrow_up_small" /></button>
      </div>
      <div className="flex items-center fixed bottom-0 w-[375px] h-[50px] shrink-0 border-t border-gray-300">
        <input className="w-[291px] h-[36px] my-[7px] ml-[20px] mr-[12px] shrink-0 rounded-[8px] pl-[14px] bg-gray-100" type="text"></input>
        <Image src="/icons/able_base.svg" width={32} height={32} alt="able_base" />
      </div>
      <div className="w-[375px] mt-[40px] text-center">
        <div className="text-lg text-gray-900 font-bold">아직 댓글이 없어요</div>
        <div className="text-sm text-gray-500 font-normal">사안에 대해 가장 먼저 댓글을 남겨보세요!</div>
      </div>
    </div>
  )
}
