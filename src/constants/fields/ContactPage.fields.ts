import { IFields } from '../interfaces/formInterface'
const ContactPageFields: IFields[] = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Tên',
    className: 'rounded-[16px] p-[10px] w-full shadow-primaryShadow h-[60px]',
    classNameDiv: 'col-span-1 w-full'
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full h-[60px]',
    classNameDiv: 'col-span-2 w-full'
  },
  {
    name: 'phone',
    type: 'tel',
    placeholder: 'Số điện thoại',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full h-[60px]',
    classNameDiv: 'col-span-1 w-full'
  },
  {
    name: 'address',
    type: 'text',
    placeholder: 'Địa chỉ',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full h-[60px]',
    classNameDiv: 'col-span-2 w-full'
  },
  {
    name: 'message',
    type: 'textarea',
    placeholder: 'Lời nhắn',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full h-[100px] resize-none',
    classNameDiv: 'col-span-3 w-full'
  }
]

export default ContactPageFields
