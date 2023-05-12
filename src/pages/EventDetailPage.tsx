import { useEffect, useState } from 'react'
import FormLeft from '../layouts/Form/FormLeft'
import ContentTicket from 'layouts/ContentTicket'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../reduxs/configureStore'
import { useLocation } from 'react-router-dom'
import { fetchgetEventInforById } from 'thunks/eventThunk'
import { IEvent } from 'constants/interfaces/event.interface'
import formatPrice from 'utils/formatMoney'
import { Swiper, SwiperSlide } from 'swiper/react'
import Skeleton from 'react-loading-skeleton'
import bgEvent from 'assets/images/bgEvent.svg'
import iconLeft from 'assets/images/iconBGLeft.svg'
import iconRight from 'assets/images/iconBGRight.svg'
type Props = {}

const EventDetailPage = (props: Props) => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const eventId = searchParams.get('eventID')
  const [detail, setDetail] = useState<IEvent>({
    eventID: 0,
    eventName: '',
    place: '',
    image: '',
    dateStart: '',
    dateEnd: '',
    priceTicket: 0,
    description: ''
  })

  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    const fetchData = async () => {
      const data = await dispatch(fetchgetEventInforById(Number(eventId)))
      setDetail(data)
    }
    fetchData()
  }, [eventId, dispatch])

  return (
    <div>
      {detail.eventID === 0 ? (
        <>
          <div className='w-full text-center'>
            <Skeleton height={80} width={500} baseColor='#fff' highlightColor='#eee' duration={1} />
          </div>
          <div className='mt-10'>
            <Swiper grabCursor={true} centeredSlides={true} slidesPerView={1} className='mySwiper' initialSlide={1}>
              <SwiperSlide>
                <Skeleton
                  height={600}
                  baseColor='#fff'
                  highlightColor='#eee'
                  duration={1}
                  style={{ borderRadius: '30px' }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      ) : (
        <>
          <h2 className='title relative z-50'>{detail.eventName}</h2>
          <div className=' mt-10 w-full'>
            <FormLeft>
              <div className='flex  gap-x-5'>
                <div className='w-[30%] flex-shrink-0'>
                  <div className='flex flex-col gap-5'>
                    <div className='h-[200px]'>
                      <img src={detail.image} alt={detail.eventName} className='h-full w-full object-cover' />
                    </div>
                    <ContentTicket
                      title={detail.eventName}
                      dayTime={`${detail.dateStart} - ${detail.dateEnd}`}
                      price={formatPrice(detail.priceTicket)}
                    ></ContentTicket>
                  </div>
                </div>
                <div className='flex-grow'>
                  <div className='columns-3'>{detail.description}</div>
                </div>
              </div>
            </FormLeft>
            <div className='absolute top-0'>
              <img src={bgEvent} alt='bgEvent' className='bg-cover   w-full' />
              <img src={iconLeft} alt='' className='absolute left-[-11%] top-0 w-[400px]' />
              <img src={iconRight} alt='' className='absolute right-0 top-0 w-[400px]' />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default EventDetailPage
