import https from './requestAPI'

const eventAPI = {
  getList: () => https.get('/event/getEventList'),
  getEventInforByID: (eventID: number) => https.get(`/event/getEventInforByID?eventID=${eventID}`)
}
export default eventAPI
