interface MANAGER_INFO {
  email: string
  name: string
  phoneNumber: string
  lunchBreakStart: string // 점심시간
  lunchBreakEnd: string
  managerOffice: string
  affiliation: string
}

interface ITEM {
  id?: number
  date?: string
  issueDate?: string
  startDate?: string
  endDate?: string
  title: string
  content?: string
  issueSort?: string
  isDone?: boolean
  isIssue?: boolean
}
