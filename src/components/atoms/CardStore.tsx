import Image from 'next/image'
import '../../styles/cardStyle.scss'
import eye from '../../../public/icons/eye.svg'
import messages from '../../../public/icons/messages.svg'

export enum CardStyle {
  ALL = 'ALL',
  NO_IMG = 'NO_IMG',
  NO_PERIOD = 'NO_PERIOD',
  ALL_NO = 'ALL_NO',
}

interface Props {
  cardStyle: CardStyle
  title: string
  period: string
  state: string
  name: string
  view: number
  comment: number
  // children?: string
}

export default function CardStore({
  cardStyle,
  title,
  period,
  state,
  name,
  view,
  comment,
}: Props) {
  const selectCard = () => {
    switch (cardStyle) {
      case CardStyle.ALL:
        return (
          <div className="card">
            <div className="flex w-[311px] items-center gap-[10px] relative">
              {/* 이미지 경로 수정해야됨 */}
              <img
                className="relative w-[56px] h-[56px] object-cover rounded-lg"
                alt="Rectangle"
                src="https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMHMTT7DiwDF5-BUGJhrN3YemZfwfckwHeaBMM0phs7pRTiaWZoxT4EYBe3YV5lMRziHY32oMVqrSBwqk4jyc1tXbeLgfTYzEDqa8zSUoqbAe70hocphLaXcw2e2ipKms8A7xnqebRf34U6kb-m-KC96kWDnGZxzW0hLInWAUtCr8gpRH~19ZPEEATiOSCd6tSMR3lGsMCUDmq4YF~Z~jjmM9p54s1VdNoWHEN3wurAxZN6SItiDkQRYMYdybFinnmXYeiVkg826ZCnFs-oNsEHGjEbGfCvVX52cDaN2clOXHTSEdvHUYz3hnQ~bJEBPSDKPVLMcrDhcchuahxNV0w__"
              />
              <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto] mr-[-1.00px]">
                <div className="flex w-[246px] items-start gap-[12px] relative flex-[0_0_auto]">
                  <div className="title">{title}</div>
                </div>
                <div className="contents text-gray-600 ">
                  공사기간 : {period}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start relative flex-1 grow">
              <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
                  <div className="state text-green-500">{state}</div>
                  <div className="relative w-px h-[16px] bg-[#d9d9d9]" />
                  <div className="contents relative w-fit  text-gray-500">
                    {name}
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex items-end gap-[8px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
                <Image src={eye} alt="image" className="icon" />
                <div className="contents relative w-fit mt-[-1.00px] text-gray-600 text-right whitespace-nowrap">
                  {view}
                </div>
              </div>
              <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
                {/* <ChatLine className="!relative !w-[20px] !h-[20px]" /> */}
                <Image src={messages} alt="image" className="icon" />
                <div className="contents relative w-fit mt-[-1.00px] text-gray-600 text-right whitespace-nowrap">
                  {comment}
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }
  return <>{selectCard()}</>
}
