import BoxStore, { BoxStyle } from '../components/atoms/BoxStore'
import CardStore, { CardStyle } from '../components/atoms/CardStore'

export default function Home() {
  return (
    <>
      <BoxStore
        boxStyle={BoxStyle.TAG}
        style="bg-gray-100 border-gray-500"
        dotStyle="bg-gray-500"
      >
        대기
      </BoxStore>
      <BoxStore
        boxStyle={BoxStyle.TAG}
        style="bg-green-50 border-green-500"
        dotStyle="bg-green-500"
      >
        진행중
      </BoxStore>
      <BoxStore
        boxStyle={BoxStyle.TAG}
        style="bg-blue-50 border-blue-500"
        dotStyle="bg-blue-500"
      >
        완료
      </BoxStore>
      <BoxStore boxStyle={BoxStyle.BADGE} />
      <CardStore
        cardStyle={CardStyle.ALL}
        title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
        period="24.04.30 ~24.05.02"
        state="진행중"
        name="김주은"
        view={0}
        comment={0}
      />
    </>
  )
}
