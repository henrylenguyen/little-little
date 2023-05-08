import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IChaneNameTicket, ITicket, ITicketInforState, ITicketState } from 'constants/interfaces/ticket.interface'
import { ITicketPaymentSuccess } from '../../constants/interfaces/ticket.interface'

const initialState: ITicketState = {
  isLoading: true,
  ticketInforList: [],
  ticketDescription: {
    service: [],
    nameTicket: '',
    priceTicket: 0
  },
  bookedTicketInfor: {
    amount: 0,
    email: '',
    expiry: '',
    name: '',
    phone: '',
    paymentAmount: 0,
    ticketRef: ''
  },
  ticketPaymentInfor: {
    message: '',
    datePayment: '',
    content: {
      id: '',
      name: '',
      email: '',
      phone: '',
      amount: 0,
      expiry: '',
      paymentAmount: 0,
      ticketInfor: {
        nameTicket: '',
        priceTicket: 0,
        service: [],
        ticketID: ''
      },
      ticketPayment: []
    }
  }
}

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    getTicketList: (state, action: PayloadAction<ITicket[]>) => {
      state.ticketInforList = action.payload
      state.isLoading = false
    },
    changeNameTicket: (state, action: PayloadAction<IChaneNameTicket>) => {
      const selectedValue = action.payload.value // Lấy giá trị select được chọn

      // Tìm kiếm đối tượng trong mảng ticketInforList dựa trên ticketID và giá trị của select
      const selectedTicket = state.ticketInforList.find((ticket) => ticket.ticketID === selectedValue)

      if (selectedTicket) {
        // Nếu tìm thấy đối tượng, cập nhật mô tả trong state
        state.ticketDescription = {
          service: selectedTicket.service,
          nameTicket: selectedTicket.nameTicket,
          priceTicket: selectedTicket.priceTicket
        }
      }
    },
    GetTicketInfor: (state, action: PayloadAction<ITicketInforState>) => {
      state.bookedTicketInfor = action.payload
    },
    paymentTicket: (state, action: PayloadAction<ITicketPaymentSuccess>) => {
      state.ticketPaymentInfor = action.payload
    }
  }
})
export const { getTicketList, changeNameTicket, GetTicketInfor, paymentTicket } = ticketSlice.actions
export default ticketSlice.reducer
