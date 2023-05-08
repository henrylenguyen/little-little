import React, { useEffect } from 'react'
import FormLeft from '../layouts/Form/FormLeft'
import { Input, QRCode, Space } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from 'reduxs/configureStore'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Keyboard } from 'swiper'
type Props = {}

const PaymentDetailPage = (props: Props) => {
  const { isLoading, ticketPaymentInfor } = useSelector((state: RootState) => state.ticket)
  console.log('file: PaymentDetailPage.tsx:10 ~ ticketPaymentInfor:', ticketPaymentInfor)
  const navigate = useNavigate()
  useEffect(() => {
    if (ticketPaymentInfor.content.id === '') {
      navigate('/')
    }
  }, [navigate, ticketPaymentInfor.content.id])

  return (
    <div>
      <h2 className='title '>Thanh toán thành công</h2>
      <div className='mt-10 px-24'>
        <FormLeft>
          <div>
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              spaceBetween={50}
              slidesPerView={3}
              keyboard={{
                enabled: true
              }}
              navigation={true}
              className='mySwiper'
              modules={[Navigation, Keyboard]}
            >
              {ticketPaymentInfor?.content?.ticketPayment?.map((item) => (
                <SwiperSlide key={item.ID}>
                  <div className='h-[500px] select-none rounded-xl bg-textSecondColor px-[36px] pb-[27px] pt-[40px]'>
                    <Space direction='vertical' align='center'>
                      <QRCode value={item.ID || '-'} style={{ border: 'none' }} />
                      <Input
                        placeholder='-'
                        maxLength={60}
                        value={item.ID}
                        style={{
                          border: 'none',
                          outline: 'none',
                          textAlign: 'center',
                          fontSize: '21px',
                          fontWeight: 'bold'
                        }}
                        readOnly
                      />
                    </Space>
                    <div className='flex h-[200px] flex-col items-center justify-between gap-5'>
                      <h3 className='ticket-title text-[24px] font-bold text-[#FFC226]'>
                        {ticketPaymentInfor?.content?.ticketInfor?.nameTicket}
                      </h3>
                      <span className='text-[15px]'>Ngày sử dụng: {`${moment(item.expiry).format('DD/MM/YYYY')}`}</span>
                      <span className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#44C4A1] text-textSecondColor'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={5}
                          stroke='currentColor'
                          className='h-10 w-10'
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
                        </svg>
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='mt-5 font-medium text-textPrimaryColor'>
              <span>Số lượng vé: {String(ticketPaymentInfor?.content?.amount)}</span>

              <button></button>
            </div>
          </div>
        </FormLeft>
        <div className='mt-10 flex justify-center gap-x-5 pb-10'>
          <button className='btnPrimary w-[300px]  rounded-2xl p-[10px] text-[20px] shadow-secondShadow'>Tải vé</button>
          <button className='btnPrimary w-[300px]  rounded-2xl p-[10px] text-[20px] shadow-secondShadow'>
            Tải thông tin thanh toán
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetailPage
