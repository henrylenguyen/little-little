export const TicketFields = [
  {
    label: 'Số tiền thanh toán',
    name: 'paymentAmount',
    type: 'text',
    placeholder: 'Số tiền thanh toán',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-1 w-full',
    readOnly: 'true'
  },
  {
    label: 'Số lượng vé',
    name: 'amount',
    type: 'text',
    placeholder: 'Số lượng vé',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-1 w-full',
    readOnly: 'true'
  },
  {
    label: 'Ngày sử dụng',
    name: 'expiry',
    type: 'text',
    placeholder: 'Ngày sử dụng',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-1 w-full',
    readOnly: 'true'
  },
  {
    label: 'Thông tin liên hệ',
    name: 'name',
    type: 'text',
    placeholder: 'Họ và tên',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-3 w-[400px]',
    readOnly: 'true'
  },
  {
    label: 'Điện thoại',
    name: 'phone',
    type: 'text',
    placeholder: 'Số điện thoại',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-3 w-[250px]',
    readOnly: 'true'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Địa chỉ email',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-3 w-[400px]',
    readOnly: 'true'
  }
]

export const PaymentFields = [
  {
    label: 'Số thẻ',
    name: 'cardNumber',
    type: 'text',
    placeholder: 'Số thẻ',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-3'
  },
  {
    label: 'Họ tên chủ thẻ',
    name: 'name',
    type: 'text',
    placeholder: 'Họ tên chủ thẻ',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-3'
  },
  {
    label: 'Ngày hết hạn',
    name: 'expiry',
    type: 'text',
    placeholder: 'Ngày hết hạn',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-3'
  },
  {
    label: 'CVV/CVC',
    name: 'CVC',
    type: 'text',
    placeholder: '***',
    className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
    classNameDiv: 'col-span-3 w-[200px]'
  }
]
