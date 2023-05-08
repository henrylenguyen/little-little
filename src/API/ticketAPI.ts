import https from './requestAPI'

const ticketAPI = {
  getTicketInfor: () => https.get(`/ticket/getTicketInfor`),
  ticketPayment: (data: any) => https.post(`/ticket/addTicketInfor`, data)
}
export default ticketAPI
