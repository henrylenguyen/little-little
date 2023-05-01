import { combineReducers } from '@reduxjs/toolkit'
import eventSlice from './slice/eventSlice'
const rootReducer = combineReducers({
  event: eventSlice
})
export default rootReducer
