'use client'

import CardStore, { CardStyle } from '@/components/atoms/Card'
import NavBar from '@/components/atoms/NavBar'
import TooltipStore, { TooltipStyle } from '@/components/atoms/Tooltip'
import NoBox from '@/components/atoms/NoBox'
import ShareBtn from '@/components/atoms/ShareBtn'
import TagBadge, { TagBadgeStyle } from '@/components/atoms/TagBadge'
import Issue, { IssueStyle } from '@/components/atoms/Issue'
import AgendaContent from '@/components/molecules/AgendaContent'
import { useSaveStore } from '@/components/store/SaveStore'
import ButtonStore, { ButtonStyle } from '@/components/atoms/Button'
import AdminCard from '@/components/atoms/AdminCard'
import ResponsibleCompanyCard from '@/components/atoms/ResponsibleCompanyCard'

export default function Check() {
  const { isSave } = useSaveStore()

  return (
    <>
      {/* 혜원 */}
      {/* Badge */}
      <TagBadge tagBadgeStyle={TagBadgeStyle.BADGE} />
      {/* NavBar */}
      <NavBar isTextChange={true} isTitle={false}></NavBar>
      <NavBar isTextChange={false} isTitle={true}>
        법정 시설물 유지관리 점검 현황
      </NavBar>
      <br />
      {/* Issue */}
      <Issue
        issueStyle={IssueStyle.ISSUE_TOGGLE}
        title="이슈 제목 입니다아아하나둘셋넷다섯"
        content="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ안녕난나아여여영여여여여여여여여여어어어어어어엉어어어어어어어"
      />
      <br />
      <Issue
        issueStyle={IssueStyle.ISSUE_ALERT}
        title="이슈 사항 제목"
        content="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ안녕난나아여여영여여여여여여여여여어어어어어어엉어어어어어어어"
      />
      <br />
      {/* Tooltips */}
      <TooltipStore tooltipStyle={TooltipStyle.COUNT} count={10} />

      <br />
      <AgendaContent
        category="설치"
        progress="INPROGRESS"
        isSave={isSave}
        title="2층 우수관 하자 발생 조치"
        updatedAt="2024.05.06"
        adminName="김주은"
      />

      {/* 예림 */}
      {/* Card */}
      <CardStore
        cardStyle={CardStyle.ALL}
        isSave={true}
        img_src="https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMHMTT7DiwDF5-BUGJhrN3YemZfwfckwHeaBMM0phs7pRTiaWZoxT4EYBe3YV5lMRziHY32oMVqrSBwqk4jyc1tXbeLgfTYzEDqa8zSUoqbAe70hocphLaXcw2e2ipKms8A7xnqebRf34U6kb-m-KC96kWDnGZxzW0hLInWAUtCr8gpRH~19ZPEEATiOSCd6tSMR3lGsMCUDmq4YF~Z~jjmM9p54s1VdNoWHEN3wurAxZN6SItiDkQRYMYdybFinnmXYeiVkg826ZCnFs-oNsEHGjEbGfCvVX52cDaN2clOXHTSEdvHUYz3hnQ~bJEBPSDKPVLMcrDhcchuahxNV0w__"
        title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
        period="24.04.30 ~24.05.02"
        state="진행중"
        name="김주은"
        view={0}
        comment={0}
      />
      <CardStore
        cardStyle={CardStyle.NO_IMG}
        isSave={true}
        img_src=""
        title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
        period="24.04.30 ~24.05.02"
        state="진행중"
        name="김주은"
        view={0}
        comment={0}
      />
      <CardStore
        cardStyle={CardStyle.NO_PERIOD}
        isSave={false}
        img_src="https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMHMTT7DiwDF5-BUGJhrN3YemZfwfckwHeaBMM0phs7pRTiaWZoxT4EYBe3YV5lMRziHY32oMVqrSBwqk4jyc1tXbeLgfTYzEDqa8zSUoqbAe70hocphLaXcw2e2ipKms8A7xnqebRf34U6kb-m-KC96kWDnGZxzW0hLInWAUtCr8gpRH~19ZPEEATiOSCd6tSMR3lGsMCUDmq4YF~Z~jjmM9p54s1VdNoWHEN3wurAxZN6SItiDkQRYMYdybFinnmXYeiVkg826ZCnFs-oNsEHGjEbGfCvVX52cDaN2clOXHTSEdvHUYz3hnQ~bJEBPSDKPVLMcrDhcchuahxNV0w__"
        title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
        period="24.04.30 ~24.05.02"
        state="대기"
        name="김주은"
        view={0}
        comment={0}
      />
      <CardStore
        cardStyle={CardStyle.ALL_NO}
        isSave={true}
        img_src="https://s3-alpha-sig.figma.com/img/1ca6/0f1b/9e8fbefccad6e39d044cbb5cf9c713aa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMHMTT7DiwDF5-BUGJhrN3YemZfwfckwHeaBMM0phs7pRTiaWZoxT4EYBe3YV5lMRziHY32oMVqrSBwqk4jyc1tXbeLgfTYzEDqa8zSUoqbAe70hocphLaXcw2e2ipKms8A7xnqebRf34U6kb-m-KC96kWDnGZxzW0hLInWAUtCr8gpRH~19ZPEEATiOSCd6tSMR3lGsMCUDmq4YF~Z~jjmM9p54s1VdNoWHEN3wurAxZN6SItiDkQRYMYdybFinnmXYeiVkg826ZCnFs-oNsEHGjEbGfCvVX52cDaN2clOXHTSEdvHUYz3hnQ~bJEBPSDKPVLMcrDhcchuahxNV0w__"
        title="2층 우수관 하자발ㅇㅇㅇ생 조치보다많ㅇ다"
        period="24.04.30 ~24.05.02"
        state="완료"
        name="김주은"
        view={0}
        comment={0}
      />
      {/* Share */}
      <ShareBtn />
      {/* NoBox */}
      <NoBox type="댓글" />
      <br />
      <NoBox type="진행 내용" />
      <br />
      {/* AdminCard */}
      <AdminCard name="김주은" mail="abc@abc.com" phone="01012345678" />
      <ResponsibleCompanyCard name="이노 인테리어" site="naver.com" />

      {/* 인배 */}
      <ButtonStore buttonStyle={ButtonStyle.BASE}></ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.LARGE}></ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.XLARGE}></ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.BASE_SELECT}></ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.LARGE_SELECT}></ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.XLARGE_SELECT}></ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.READ_MORE}></ButtonStore>
      <ButtonStore
        buttonStyle={ButtonStyle.FILTER}
        isSelect={true}
      ></ButtonStore>
      <ButtonStore
        buttonStyle={ButtonStyle.FILTER}
        isSelect={false}
      ></ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.MONTLY_NONE}></ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.MONTLY}></ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.MONTLY_SELECT}></ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.HUG}></ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.HUG_BLUE}></ButtonStore>
      <ButtonStore buttonStyle={ButtonStyle.PLUS_BUTTON}></ButtonStore>
    </>
  )
}
