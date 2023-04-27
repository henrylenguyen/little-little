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
    className: 'rounded-[16px] p-[10px] shadow-primaryShadow'
  },
  {
    name: 'SLVe',
    type: 'number',
    placeholder: 'Số lượng vé',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow'
  },
  {
    name: 'hoTen',
    type: 'text',
    placeholder: 'Họ và tên',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow'
  },
  {
    name: 'soDT',
    type: 'text',
    placeholder: 'Số điện thoại',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow'
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Địa chỉ email',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow'
  }
]

export default HomePageFields
