import { combineReducers } from '@reduxjs/toolkit'
import eventSlice from './slice/eventSlice'
import ticketSlice from './slice/ticketSlice'
const rootReducer = combineReducers({
  event: eventSlice,
  ticket: ticketSlice
})
export default rootReducer
