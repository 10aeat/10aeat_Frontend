import AdminButton, { ButtonStyle } from './AdminButton'

export enum BottomStyle {
  CANCEL_DONE = 'CANCEL_DONE',
  OK = 'OK',
  CANCEL_DELETE = 'CANCEL_DELETE',
  DELETE_DONE = 'DELETE_DONE',
}

interface Props {
  bottomStyle: BottomStyle
  text?: string
  onClose: () => void
  onClickFunction?: () => void
}

export default function AdminModalBottom({
  bottomStyle,
  text,
  onClose,
  onClickFunction,
}: Props) {
  // eslint-disable-next-line consistent-return
  const selectModalBottom = () => {
    // eslint-disable-next-line default-case
    switch (bottomStyle) {
      case BottomStyle.CANCEL_DONE:
        return (
          <div className="w-full rounded-b-[16px] pt-3 pr-6 pb-6 pl-6 flex justify-end gap-3 bg-white">
            <AdminButton
              buttonStyle={ButtonStyle.NEUTRAL}
              isDisabled={false}
              buttonSize="lg"
              onClickFunction={onClose}
            >
              취소
            </AdminButton>
            <AdminButton
              buttonStyle={ButtonStyle.PRIMARY}
              isDisabled={false}
              buttonSize="lg"
              onClickFunction={onClickFunction}
            >
              {text}
            </AdminButton>
          </div>
        )

      case BottomStyle.OK:
        return (
          <div className="w-full rounded-b-[16px] pt-3 pr-6 pb-6 pl-6 flex justify-end gap-3 bg-white">
            <AdminButton
              buttonStyle={ButtonStyle.NEUTRAL}
              isDisabled={false}
              buttonSize="lg"
              onClickFunction={onClose}
            >
              취소
            </AdminButton>
            <AdminButton
              buttonStyle={ButtonStyle.ERROR}
              isDisabled={false}
              buttonSize="lg"
            >
              {text}
            </AdminButton>
          </div>
        )
      case BottomStyle.CANCEL_DELETE:
        return (
          <div className="w-full rounded-b-[16px] pt-3 pr-6 pb-6 pl-6 flex justify-end gap-3 bg-white">
            <AdminButton
              buttonStyle={ButtonStyle.NEUTRAL}
              isDisabled={false}
              buttonSize="lg"
              onClickFunction={onClose}
            >
              취소
            </AdminButton>
            <AdminButton
              buttonStyle={ButtonStyle.ERROR}
              isDisabled={false}
              buttonSize="lg"
            >
              삭제하기
            </AdminButton>
          </div>
        )
    }
  }

  return <>{selectModalBottom()}</>
}
