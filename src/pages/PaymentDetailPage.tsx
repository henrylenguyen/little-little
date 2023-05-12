import React, { useEffect, useRef, useState } from 'react'
import FormLeft from '../layouts/Form/FormLeft'
import { Input, QRCode, Space } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from 'reduxs/configureStore'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Keyboard } from 'swiper'
import { saveAs } from 'file-saver'
import alvin from 'assets/images/Alvin_Arnold_Votay1 1.svg'
import formatPrice from 'utils/formatMoney'
import html2canvas from 'html2canvas'

type Props = {}
type FieldMap = {
  [key: string]: string
}
const PaymentDetailPage = (props: Props) => {
  const { isLoading, ticketPaymentInfor } = useSelector((state: RootState) => state.ticket)
  const navigate = useNavigate()
  useEffect(() => {
    if (ticketPaymentInfor.content.id === '') {
      navigate('/')
    }
  }, [navigate, ticketPaymentInfor.content.id])
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const swiperContainerRef = useRef(null)
  // ----------------------TẢI THÔNG TIN THANH TOÁN------------------
  const handleExport = () => {
    const transformedContent = {
      'ID Vé': ticketPaymentInfor.content.id,
      'Họ tên': ticketPaymentInfor.content.name,
      'Số điện thoại': ticketPaymentInfor.content.phone,
      Email: ticketPaymentInfor.content.email,
      'Số lượng vé đã mua': ticketPaymentInfor.content.amount,
      'Tổng tiền thanh toán': formatPrice(ticketPaymentInfor.content.paymentAmount),
      'Hạn sử dụng vé': moment(ticketPaymentInfor.content.expiry).format('DD/MM/YYYY')
    }

    const content = Object.entries(transformedContent)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')

    const finalContent = `THÔNG TIN THANH TOÁN\n${content}\n-------------------`

    const blob = new Blob([finalContent], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, 'Thong_tin_thanh_toan.txt')
  }

  // ----------------------------------TẢI THÔNG TIN ĐẶT VÉ--------------------
  const handleDownloadTickets = () => {
    const container = swiperContainerRef.current as unknown as HTMLElement

    if (container) {
      const slideElements = container.getElementsByClassName('swiper-slide')

      // Loop through each slide element
      for (let i = 0; i < slideElements.length; i++) {
        const slideElement = slideElements[i] as HTMLElement

        setTimeout(() => {
          html2canvas(slideElement).then((canvas) => {
            canvas.toBlob((blob) => {
              if (blob) {
                saveAs(blob, `ticket_${i + 1}.png`)
              }
            })
          })
        }, 100 * i) // Delay each capture to ensure all slides are captured
      }
    }
  }

  return (
    <div>
      <h2 className='title '>Thanh toán thành công</h2>
      <div className='relative mt-10'>
        <FormLeft>
          <div ref={swiperContainerRef}>
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
              onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
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
            </div>
          </div>
        </FormLeft>
        <div className='mt-10 flex justify-center gap-x-5 pb-10'>
          <button
            className='btnPrimary w-[300px]  rounded-2xl p-[10px] text-[20px] shadow-secondShadow'
            onClick={handleDownloadTickets}
          >
            Tải vé
          </button>
          <button
            className='btnPrimary w-[300px]  rounded-2xl p-[10px] text-[20px] shadow-secondShadow'
            onClick={handleExport}
          >
            Tải thông tin thanh toán
          </button>
        </div>
        <img src={alvin} alt='alvin' className='absolute left-[-20%] top-[10%] z-50 w-[280px]' />
      </div>
    </div>
  )
}

export default PaymentDetailPage
