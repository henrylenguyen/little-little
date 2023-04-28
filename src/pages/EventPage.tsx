import React from 'react'
import BG from 'assets/images/eventBG.svg'
import EventItems from 'layouts/event/EventItems'
type Props = {}

const EventPage = (props: Props) => {
  return (
    <div style={{ background: `url(${BG})` }}>
      <h2 className='title '>sự kiện nổi bật</h2>
      <div className='event my-10 grid grid-cols-4 gap-5'>
        <EventItems></EventItems>
        <EventItems></EventItems>
        <EventItems></EventItems>
        <EventItems></EventItems>
      </div>
    </div>
  )
}

export default EventPage
