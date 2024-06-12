import { useState } from 'react'
import Modal, { ModalStyle } from './Modal'

interface BuildingListProps {
  buildings: BUILDING[]
}

export default function BuildingList({ buildings }: BuildingListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBuilding, setSelectedBuilding] = useState<BUILDING | null>(
    null,
  )

  const openModal = (building: BUILDING) => {
    setSelectedBuilding(building)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedBuilding(null)
  }

  const confirmDelete = () => {
    if (selectedBuilding) {
      console.log(
        `Deleting building with ID: ${selectedBuilding.buildingInfoId}`,
      )
      closeModal()
    }
  }
  console.log(buildings)

  return (
    <div className="flex flex-col gap-[32px] mx-auto text-gray-600 text-[18px] font-semibold leading-[24px] font-Pretendard">
      {/* {buildings[0].officeName} */}
      <div className="flex flex-col items-center gap-[16px]">
        {buildings &&
          buildings.map((building) => (
            <div
              key={building.buildingInfoId}
              className="flex items-center justify-between w-[343px] py-[20px] px-[16px] rounded-[18px] text-[16px] font-semibold text-gray-900 bg-white"
              role="listitem"
            >
              {building.dong}동 {building.ho}호
              <button
                type="button"
                className="w-[45px] h-[40px] p-[10px] bg-red-500 justify-center items-center rounded-[8px] text-[14px] font-medium leading-[20px] text-white"
                onClick={() => openModal(building)}
              >
                삭제
              </button>
            </div>
          ))}
      </div>
      {isModalOpen && (
        <Modal
          modalStyle={ModalStyle.Over_Two}
          onClose={closeModal}
          onConfirm={confirmDelete}
          building={selectedBuilding}
        />
      )}
    </div>
  )
}
