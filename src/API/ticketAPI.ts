import https from './requestAPI'

const ticketAPI = {
  getTicketInfor: () => https.get(`/ticket/getTicketInfor`)
}
export default ticketAPI
