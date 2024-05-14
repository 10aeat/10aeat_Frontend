import BoxStore, { BoxStyle } from '@/components/atoms/BoxStore'
import IssueStore, { IssueStyle } from '@/components/atoms/IssueStore'
import NavBar from '@/components/atoms/NavBar'

export default function Home() {
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

      {/* Issue */}
      <IssueStore issueStyle={IssueStyle.ISSUE_TOGGLE} />
    </>
  )
}
