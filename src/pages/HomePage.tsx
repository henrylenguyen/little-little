import React, { useEffect, useState } from 'react'

import FormLayout from 'layouts/Form/FormLayout'
import CarouselHome from 'layouts/CarouselHome'
import Form from 'components/form/Form'
import Lisa from 'assets/images/Lisa_Arnold_Lay_Do_F2 3.png'
import ballon5 from 'assets/images/18451 [Converted]-05 1.png'
import ballon3 from 'assets/images/18451 [Converted]-03 2.png'
import ballon4 from 'assets/images/18451 [Converted]-04 1.png'
import ballon6 from 'assets/images/18451 [Converted]-06 1.png'
import start from 'assets/images/start.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../reduxs/configureStore'
import { fetchGetTicketInfor } from 'thunks/ticketThunk'
import ticketSchema from 'constants/schemas/ticket.schema'
import { GetTicketInfor, changeNameTicket } from 'reduxs/slice/ticketSlice'
import formatPrice from 'utils/formatMoney'
import moment from 'moment'
import { ITicketInforState } from 'constants/interfaces/ticket.interface'
import { useNavigate } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

interface IProps {
  contentLeft?: React.ReactNode
  contentRight?: React.ReactNode
  LabelImageLeft?: Boolean
  labelContentLeft?: string
  LabelImageRight?: Boolean
  labelContentRight?: string
}

const HomePage: React.FC<IProps> = React.memo(() => {
  const { isLoading, ticketInforList, ticketDescription } = useSelector((state: RootState) => state.ticket)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchGetTicketInfor())
  }, [dispatch])
  const navigate = useNavigate()
  const handleChangeName = (data: any) => {
    dispatch(changeNameTicket(data))
  }
  const handleSubmitForm = (data: ITicketInforState) => {
    console.log(data)
    data.expiry = moment(data.expiry).format('DD/MM/YYYY')
    data.amount = Number(data.amount)
    data.paymentAmount = ticketDescription?.priceTicket && ticketDescription.priceTicket * data.amount
    dispatch(GetTicketInfor(data))
    navigate('/payment')
  }
  const [serviceOptions, setServiceOptions] = useState<{ label: string; value: string }[]>([])
  useEffect(() => {
    if (serviceOptions.length === 0) {
      ticketInforList?.forEach((item) => {
        setServiceOptions((prevState) => [...prevState, { label: item.nameTicket, value: item.ticketID }])
      })
    }
  }, [serviceOptions.length, ticketInforList])

  const HomePageFields = [
    {
      name: 'ticketRef',
      type: 'select',
      options: serviceOptions,
      className: 'rounded-[16px] p-[10px] w-full shadow-primaryShadow',
      classNameDiv: 'col-span-3',
      onChange: handleChangeName
    },
    {
      name: 'amount',
      type: 'number',
      placeholder: 'Số lượng vé',
      className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
      classNameDiv: 'col-span-1 w-full'
    },
    {
      name: 'expiry',
      type: 'date',
      placeholder: 'Ngày sử dụng',
      className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
      classNameDiv: 'col-span-2 w-full'
    },
    {
      name: 'name',
      type: 'text',
      placeholder: 'Họ và tên',
      className: 'rounded-[16px] p-[15px] bg-white shadow-primaryShadow w-full',
      classNameDiv: 'col-span-3'
    },
    {
      name: 'phone',
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

  return (
    <div className=''>
      <CarouselHome></CarouselHome>
      {isLoading ? (
        <Skeleton
          height={500}
          width={'100%'}
          baseColor='#fff'
          highlightColor='#eee'
          duration={1}
          style={{ borderRadius: '30px' }}
        />
      ) : (
        <>
          <FormLayout
            LabelImageRight
            labelContentRight='vé của bạn'
            contentLeft={
              <div>
                <ul className='row-span-2 list-disc pl-10 leading-7 text-[#23221F]'>
                  <li>
                    <b>“Vé mua từ cổng”</b> là vé được bán tại 2 cổng chính số 1A Lạc Long Quân (hoặc số 3 Hòa Bình),
                    cổng số 2 (nhà hàng Thủy Tạ).
                  </li>
                  <li>
                    <b>Vé mua trong công viên:</b> là loại vé được bán tại các quầy trong công viên. Đây là các loại vé
                    trọn gói đã được trừ vé vào cổng của quý khách.
                  </li>
                  <li>
                    <b>Vé từ cổng Công viên nước:</b> là loại vé bán từ cổng liên thông phía công viên nước. Đây là vé
                    dành cho các du khách vui chơi phía công viên nước, và muốn sang CVVH Đầm Sen.
                  </li>
                  <li>
                    <b> &gt;1,4m:</b> người cao trên 1,4m
                  </li>
                  <li>
                    <b> &lt;1,4m:</b> người cao dưới 1,4m <b>(Chỉ có thể mua tại cổng.)</b>
                  </li>
                  <li>
                    <b>Trẻ em dưới 1m được miễn phí</b> nhưng phải đi cùng với người lớn.
                  </li>
                  <li>
                    <b>Có vé mời, được giảm 50% vé trọn gói </b>(áp dụng mua từ cổng).
                  </li>
                </ul>
                <div className='ml-24 text-[24px] font-bold text-[#23221F]'>
                  <h3 className='text-[30px] italic'>
                    {ticketDescription?.nameTicket && `Đặc quyền vé: ${ticketDescription?.nameTicket}`}
                  </h3>
                  {ticketDescription?.service.map((item, index) => (
                    <span key={index} className='flex items-center gap-5 '>
                      <img src={start} alt='' className='w-[25px]' />
                      {item}
                    </span>
                  ))}
                  {ticketDescription?.priceTicket !== 0 && ticketDescription?.priceTicket && (
                    <h3 className='mt-2'>Giá vé: {formatPrice(ticketDescription?.priceTicket)}/vé</h3>
                  )}
                </div>
                <img src={Lisa} alt='' className='absolute bottom-[-20%] left-[-26%] w-[250px]' />
                <img src={ballon4} alt='' className='absolute -bottom-[20%] left-1/2 z-[-1] -translate-x-1/2' />
                <img src={ballon6} alt='' className='absolute left-[-25%] top-0' />
              </div>
            }
            contentRight={
              <div>
                <Form
                  titleButton={'Đặt vé'}
                  schema={ticketSchema}
                  fields={HomePageFields}
                  title={''}
                  color='text-white'
                  handleSubmitForm={handleSubmitForm}
                  gap={'10px 20px'}
                />
                <img src={ballon5} alt='' className='absolute right-[-17%] top-[10%] z-[-1] w-[100px] object-contain' />
                <img
                  src={ballon3}
                  alt=''
                  className='absolute bottom-[-10%] right-[-15%] z-[-1] w-[100px] object-contain'
                />
              </div>
            }
          />
        </>
      )}
    </div>
  )
})

export default HomePage
