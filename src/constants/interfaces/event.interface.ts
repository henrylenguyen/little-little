import ILoading from './loading.interface'

export interface IEvent {
  eventID: number
  eventName: string
  place: string
  image: string
  dateStart: string
  dateEnd: string
  priceTicket: number
  description: string
}

interface IEventState extends ILoading {
  eventList: IEvent[]
}
export default IEventState
