import IEventState, { IEvent } from 'constants/interfaces/event.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState: IEventState = {
  eventList: [],
  isLoading: true
}
const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    getEventList: (state, action: PayloadAction<IEvent[]>) => {
      state.eventList = action.payload
      state.isLoading = false
    }
  }
})

export const { getEventList } = eventSlice.actions
export default eventSlice.reducer
