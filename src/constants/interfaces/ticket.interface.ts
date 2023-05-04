import ILoading from './loading.interface'

export interface ITicket {
  nameTicket: string
  priceTicket: number
  service: string[]
  ticketID: string
}

export interface IChaneNameTicket {
  label: string
  value: string
}
export interface ITicketState extends ILoading {
  ticketInforList: ITicket[]
  ticketDescription?: {
    service: string[]
    nameTicket: string
    priceTicket: number
  }
  bookedTicketInfor: ITicketInforState[]
}

export interface ITicketInforState {
  amount: number
  email: string
  expiry: string
  name: string
  phone: string
  nameTicket: string
  paymentAmount?: number
  ticketRef?: string
}
