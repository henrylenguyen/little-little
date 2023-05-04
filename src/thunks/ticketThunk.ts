import ticketAPI from 'API/ticketAPI'
import { AppDispatch } from 'reduxs/configureStore'
import { getTicketList } from 'reduxs/slice/ticketSlice'

export const fetchGetTicketInfor = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await ticketAPI.getTicketInfor()
      console.log('file: ticketThunk.ts:9 ~ response:', response)
      if (response.status === 200) {
        dispatch(getTicketList(response.data.content))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
