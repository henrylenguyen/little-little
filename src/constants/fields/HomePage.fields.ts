const HomePageFields = [
  {
    name: 'theLoaiVe',
    type: 'select',
    options: [
      {
        label: 'Gói gia đình',
        value: 'goiGiaDinh'
      },
      {
        label: 'Gói trẻ em',
        value: 'goiTreEm'
      },
      {
        label: 'Gói VIP',
        value: 'goiVIP'
      }
    ],
    className: 'rounded-[16px] p-[10px] w-full shadow-primaryShadow',
    classNameDiv: 'col-span-3'
  },
  {
    name: 'SLVe',
    type: 'number',
    placeholder: 'Số lượng vé',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-1 w-full'
  },
  {
    name: 'ngaySuDung',
    type: 'text',
    placeholder: 'Ngày sử dụng',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-2 w-full'
  },
  {
    name: 'hoTen',
    type: 'text',
    placeholder: 'Họ và tên',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-3'
  },
  {
    name: 'soDT',
    type: 'text',
    placeholder: 'Số điện thoại',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-3'
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Địa chỉ email',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-3'
  }
]

export default HomePageFields
