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

interface POST {
  category: string
  progress: string
  title: string
  content: string
  constructionStart: array
  constructionEnd: array
  repairCompany: string
  repairCompanyWebsite: string
}