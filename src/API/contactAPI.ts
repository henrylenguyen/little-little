import https from './requestAPI'

const contactAPI = {
  getContactInfor: () => https.get(`/contact/getContactInfor`)
}
export default contactAPI
