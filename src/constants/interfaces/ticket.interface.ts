import ILoading from './loading.interface'

export interface ITicket {
  nameTicket: string
  priceTicket: number
  service: string[]
  ticketID: string
}
// interface dropdown thay đổi giá trị vé
export interface IChaneNameTicket {
  label: string
  value: string
}

// interface state của vé (trong redux)
export interface ITicketState extends ILoading {
  ticketInforList: ITicket[]
  ticketDescription?: {
    service: string[]
    nameTicket: string
    priceTicket: number
  }
  bookedTicketInfor: ITicketInforState
  ticketPaymentInfor: ITicketPaymentSuccess
}
// interface state của thông tin vé (trong redux)
export interface ITicketInforState {
  amount: number
  email: string
  expiry: string
  name: string
  phone: string
  paymentAmount?: number
  ticketRef?: string
}
// interface dữ liệu vé đã đặt
export interface ITicketPayment {
  phone: string
  ticketType: string
  ID: string
  expiry: string
}

// interface dữ liệu khi đặt vé thành công
export interface ITicketPaymentSuccess {
  message: string
  datePayment: string
  content: {
    id: string
    name: string
    email: string
    phone: string
    amount: number
    expiry: string
    paymentAmount: number
    ticketInfor: ITicket
    ticketPayment: ITicketPayment[]
  }
}
