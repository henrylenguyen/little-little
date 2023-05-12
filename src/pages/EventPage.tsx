import React, { useEffect } from 'react'
import BG from 'assets/images/eventBG.svg'
import EventItems from 'layouts/event/EventItems'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../reduxs/configureStore'
import { fetchgetEventList } from 'thunks/eventThunk'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Keyboard } from 'swiper'
import Skeleton from 'react-loading-skeleton'
import bgEvent from 'assets/images/bgEvent.svg'
import iconLeft from 'assets/images/iconBGLeft.svg'
import iconRight from 'assets/images/iconBGRight.svg'

type Props = {}

const EventPage = (props: Props) => {
  const { eventList, isLoading } = useSelector((state: RootState) => state.event)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchgetEventList())
  }, [dispatch])

  return (
    <div style={{ background: `url(${BG})` }}>
      {isLoading ? (
        <>
          <div className='w-full text-center'>
            <Skeleton height={80} width={500} baseColor='#fff' highlightColor='#eee' duration={1} />
          </div>
          <div className='mt-10'>
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              spaceBetween={50}
              slidesPerView={2}
              className='mySwiper'
              initialSlide={1}
            >
              <SwiperSlide>
                <Skeleton
                  height={400}
                  baseColor='#fff'
                  highlightColor='#eee'
                  duration={1}
                  style={{ borderRadius: '12px' }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Skeleton
                  height={400}
                  baseColor='#fff'
                  highlightColor='#eee'
                  duration={1}
                  style={{ borderRadius: '12px' }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Skeleton
                  height={400}
                  baseColor='#fff'
                  highlightColor='#eee'
                  duration={1}
                  style={{ borderRadius: '12px' }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      ) : (
        <div className='relative z-10 select-none'>
          <h2 className='title mb-14'>sự kiện nổi bật</h2>
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={50}
            slidesPerView={3}
            keyboard={{
              enabled: true
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            navigation={true}
            className='mySwiper'
            modules={[Navigation, Autoplay, Keyboard]}
          >
            {eventList?.map((item) => (
              <SwiperSlide key={item.eventID}>
                <EventItems
                  image={item.image}
                  eventName={item.eventName}
                  startDate={item.dateStart}
                  endDate={item.dateEnd}
                  price={item.priceTicket}
                  place={item.place}
                  eventID={item.eventID}
                ></EventItems>
              </SwiperSlide>
            ))}
          </Swiper>
          <img src={bgEvent} alt='bgEvent' className='bg-cover absolute inset-0 -top-[20%] z-0 h-screen w-full' />
          <img src={iconLeft} alt='' className='absolute left-[-11%] top-[-6%] w-[400px]' />
          <img src={iconRight} alt='' className='absolute right-[-3%] top-[-6%] w-[400px]' />
        </div>
      )}
    </div>
  )
}

export default EventPage
