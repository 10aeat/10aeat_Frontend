import BoxStore, { BoxStyle } from '../components/atoms/BoxStore'

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
    </>
  )
}
