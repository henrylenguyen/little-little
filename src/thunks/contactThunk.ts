import contactAPI from 'API/contactAPI'

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
export const fetchAddContact = (data: any) => {
  return async () => {
    try {
      const response = await contactAPI.addContact(data)
      if (response.status === 200) {
        return response.data.message
      }
    } catch (error) {
      console.log(error)
    }
  }
}
