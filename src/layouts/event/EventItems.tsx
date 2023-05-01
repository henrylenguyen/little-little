import ContentTicket from 'layouts/ContentTicket'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import formatPrice from 'utils/formatMoney'

type Props = {
  image: string
  eventName: string
  startDate: string
  endDate: string
  price: number
  place: string
  eventID: number
}

const EventItems = ({ image, eventName, startDate, endDate, price, place, eventID }: Props) => {
  const navigate = useNavigate()

  return (
    <div className='event-item overflow-hidden rounded-xl'>
      <div className='event-image h-[240px] overflow-hidden '>
        <img src={image} alt={eventName} className='h-full w-full object-cover' />
      </div>
      <div className='event-content bg-textSecondColor p-6'>
        <h4 className='event-title truncate text-[25px] font-bold leading-[36.57px] text-[#23221F]'>{eventName}</h4>
        <ContentTicket
          title={place}
          dayTime={`${startDate} - ${endDate}`}
          price={`${formatPrice(price)}`}
        ></ContentTicket>
        <div
          className='btnPrimary mt-3  w-[180px] rounded-xl p-[5px] text-[18px] shadow-secondShadow_1'
          onClick={() => navigate(`/event/eventDetail?eventID=${eventID}`)}
        >
          Xem chi tiết
        </div>
      </div>
    </div>
  )
}

export default EventItems
