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

interface MANAGER_REPAIR_PROGRESS {
  startSchedule: number[]
  endSchedule: number[]
  title: string
  content: string
}

interface ISSUE_DATA {
  id: number
  title: string
  content: string
  inProgress: boolean
  startSchedule: string
  endSchedule: string
}
