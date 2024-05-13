import TagStore, { TagStyle } from '../components/atoms/TagStore'

export default function Home() {
  return (
    <>
      <TagStore tagStyle={TagStyle.WAIT_TAG} />
      <TagStore tagStyle={TagStyle.PROCEEDING_TAG} />
      <TagStore tagStyle={TagStyle.DONE_TAG} />
    </>
  )
}
