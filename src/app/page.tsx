'use client'

import Check from './Check'
import CardStore, { CardStyle } from '../components/atoms/CardStore'

export default function Home() {
  return (
    <>
      <Check />
      <br />
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
