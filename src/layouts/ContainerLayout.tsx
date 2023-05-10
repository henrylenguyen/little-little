import React from 'react'
import Navigation from 'components/navigation/Navigation'
import { Outlet } from 'react-router-dom'
import bgError from 'assets/images/error.png'
type Props = {}

const ContainerLayout: React.FC<Props> = (props) => {
  return (
    <>
      <div className=' bgError relative  flex h-[100vh] items-center justify-center xl:hidden'>
        <img src={bgError} alt='background' className='h-[600px] object-cover md:h-full xl:h-full' />
        <h2 className='absolute inline-block rounded-xl bg-buttonColor p-5 text-center text-[18px] font-bold uppercase text-textSecondColor'>
          Chúng tôi hiện chưa hỗ trợ trên thiết bị này!
        </h2>
      </div>
      <div className='notSp hidden xl:block'>
        <Navigation></Navigation>
        <div className='container mx-auto '>
          <div className=' container-layout  mt-[-2%] min-h-[800px] rounded-b-[40px] px-10 pt-[5%]'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContainerLayout
