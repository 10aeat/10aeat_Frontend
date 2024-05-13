import BoxStore, { BoxStyle } from '@/components/atoms/BoxStore'

export default function Home() {
  return (
    <>
      <BoxStore boxStyle={BoxStyle.WAIT_TAG} />
      <BoxStore boxStyle={BoxStyle.PROCEEDING_TAG} />
      <BoxStore boxStyle={BoxStyle.DONE_TAG} />
      <BoxStore boxStyle={BoxStyle.BADGE} />
    </>
  )
}
