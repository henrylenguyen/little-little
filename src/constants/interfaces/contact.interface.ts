export interface IContactInfor {
  address: string
  phone: string
  email: string
  description?: string
}

export interface IContactForm extends IContactInfor {
  name: string
  message: string
}
