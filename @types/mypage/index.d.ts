interface MYINFO {
  name: string
  role: string
  officeName: string
}

interface BUILDING {
  buildingInfoId: number
  officeName: string
  dong: string
  ho: string
}

interface ApiResponse {
  code: number
  data: Building[]
}
