const ContactPageFields = [
  {
    name: 'ten',
    type: 'text',
    placeholder: 'Tên',
    className: 'rounded-[16px] p-[10px] w-full shadow-primaryShadow h-full',
    classNameDiv: 'col-span-1 w-full'
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full h-full',
    classNameDiv: 'col-span-2 w-full'
  },
  {
    name: 'soDT',
    type: 'tel',
    placeholder: 'Số điện thoại',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full h-full',
    classNameDiv: 'col-span-1 w-full'
  },
  {
    name: 'diaChi',
    type: 'text',
    placeholder: 'Địa chỉ',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full h-full',
    classNameDiv: 'col-span-2 w-full'
  },
  {
    name: 'loiNhan',
    type: 'textarea',
    placeholder: 'Lời nhắn',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full h-full resize-none',
    classNameDiv: 'col-span-3 w-full'
  }
]

export default ContactPageFields
