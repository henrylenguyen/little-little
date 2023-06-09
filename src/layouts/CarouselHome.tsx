import React from 'react'
import img2 from 'assets/images/image 2.png'
import groupPeople from 'assets/images/render fix hair 1.png'
import ballon1 from 'assets/images/18451 [Converted]-02 1.png'
import ballon2 from 'assets/images/18451 [Converted]-03 1.png'

const CarouselHome = () => {
  return (
    <div className='flex justify-between'>
      <div className='mt-[-100px] flex items-center gap-x-10'>
        <img className='w-[150px] object-cover' src={img2} alt='' />
        <p className='font-secondFont text-[72px] font-[900] leading-[80px] text-textSecondColor'>
          ĐẦM SEN
          <br />
          PARK
        </p>
      </div>
      <img src={ballon2} alt='' className='w-[100px] object-contain' />
      <img src={ballon1} alt='' className='mt-[-15%] w-[100px] object-contain' />
      <div>
        <img className='w-[400px]' src={groupPeople} alt='' />
      </div>
    </div>
  )
}

export default CarouselHome
