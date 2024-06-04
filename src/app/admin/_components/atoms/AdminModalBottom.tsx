import AdminButton, { ButtonStyle } from './AdminButton'

export enum BottomStyle {
  CANCEL_DONE = 'CANCEL_DONE',
  OK = 'OK',
  CANCLE_DELETE = 'CANCEL_DELETE',
  DELETE_DONE = 'DELETE_DONE',
}

interface Props {
  bottomStyle: BottomStyle
  text: string
  onCancel: () => void
}

export default function AdminModalBottom({
  bottomStyle,
  text,
  onCancel,
}: Props) {
  const selectModalBottom = () => {
    switch (bottomStyle) {
      case BottomStyle.CANCEL_DONE:
        return (
          <div className="w-full rounded-b-[16px] pt-3 pr-6 pb-6 pl-6 flex justify-end gap-3 bg-white">
            <AdminButton
              buttonStyle={ButtonStyle.NEUTRAL}
              isDisabled={false}
              buttonSize={'lg'}
              onClickFunction={onCancel}
            >
              취소
            </AdminButton>
            <AdminButton
              buttonStyle={ButtonStyle.PRIMARY}
              isDisabled={true}
              buttonSize={'lg'}
            >
              {text}
            </AdminButton>
          </div>
        )

      case BottomStyle.CANCEL_DONE:
        return (
          <div className="w-full rounded-b-[16px] pt-3 pr-6 pb-6 pl-6 flex justify-end gap-3 bg-white">
            <AdminButton
              buttonStyle={ButtonStyle.NEUTRAL}
              isDisabled={false}
              buttonSize={'lg'}
              onClickFunction={onCancel}
            >
              취소
            </AdminButton>
            <AdminButton
              buttonStyle={ButtonStyle.ERROR}
              isDisabled={true}
              buttonSize={'lg'}
            >
              {text}
            </AdminButton>
          </div>
        )
    }
  }

  return <>{selectModalBottom()}</>
}
