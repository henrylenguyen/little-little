import ContentTicket from 'layouts/ContentTicket'
import React from 'react'

type Props = {}

const EventItems = (props: Props) => {
  return (
    <div className='event-item overflow-hidden rounded-xl'>
      <div className='event-image h-[240px] overflow-hidden '>
        <img
          src='https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80'
          alt=''
          className='h-full w-full object-cover'
        />
      </div>
      <div className='event-content bg-textSecondColor p-6'>
        <h4 className='event-title text-[25px] font-bold leading-[36.57px] text-[#23221F]'>Sự kiện 1</h4>
        <ContentTicket title='Đầm sen Park' dayTime='30/05/2021 - 01/06/2021' price={'25.000 VNĐ'}></ContentTicket>
        <div className='btnPrimary mt-3  w-[180px] rounded-xl p-[5px] text-[18px] shadow-secondShadow_1'>
          Xem chi tiết
        </div>
      </div>
    </div>
  )
}

export default EventItems
