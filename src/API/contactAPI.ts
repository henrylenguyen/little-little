import https from './requestAPI'

const contactAPI = {
  getContactInfor: () => https.get(`/contact/getContactInfor`),
  addContact: (data: any) => https.post(`/contact/addContact`, data)
}
export default contactAPI
