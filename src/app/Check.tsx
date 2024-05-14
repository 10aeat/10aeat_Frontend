'use client'

import BoxStore, { BoxStyle } from '@/components/atoms/BoxStore'
import IssueStore, { IssueStyle } from '@/components/atoms/IssueStore'
import NavBar from '@/components/atoms/NavBar'
import TooltipStore, { TooltipStyle } from '@/components/atoms/TooltipStore'

export default function Check() {
  return (
    <>
      {/* Tag */}
      <BoxStore boxStyle={BoxStyle.WAIT_TAG} />
      <BoxStore boxStyle={BoxStyle.PROCEEDING_TAG} />
      <BoxStore boxStyle={BoxStyle.DONE_TAG} />
      {/* Badge */}
      <BoxStore boxStyle={BoxStyle.BADGE} />

      {/* NavBar */}
      <NavBar>타이틀입니다.</NavBar>
      <br />

      {/* Issue */}
      <IssueStore
        issueStyle={IssueStyle.ISSUE_TOGGLE}
        title="이슈 제목 입니다아아하나둘셋넷다섯"
        content="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ안녕난나아여여영여여여여여여여여여어어어어어어엉어어어어어어어"
      />
      <br />
      <IssueStore
        issueStyle={IssueStyle.ISSUE_ALERT}
        title="이슈 사항 제목"
        content="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ안녕난나아여여영여여여여여여여여여어어어어어어엉어어어어어어어"
      />
      <br />

      {/* Tooltips */}
      <TooltipStore tooltipStyle={TooltipStyle.COUNT} count={10} />
      <TooltipStore tooltipStyle={TooltipStyle.TEXT_CHANGE} />
    </>
  )
}
