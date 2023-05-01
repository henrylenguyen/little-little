import contactAPI from "API/contactAPI"
import { AppDispatch } from "reduxs/configureStore"

export const fetchgetContactInfor = () => {
  return async () => {
    try {
      const response = await contactAPI.getContactInfor()
      if (response.status === 200) {
        return response.data.content
      }
    } catch (error) {
      console.log(error)
    }
  }
}
