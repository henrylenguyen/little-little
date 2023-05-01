import eventAPI from 'API/eventAPI'
import { AppDispatch } from 'reduxs/configureStore'
import { getEventList } from 'reduxs/slice/eventSlice'

export const fetchgetEventList = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await eventAPI.getList()
      if (response.status === 200) {
        dispatch(getEventList(response.data.content))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
export const fetchgetEventInforById = (eventID: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await eventAPI.getEventInforByID(eventID)
      if (response.status === 200) {
        return response.data.content
      }
    } catch (error) {
      console.log(error)
    }
  }
}
