import React from 'react'
import Navigation from 'components/navigation/Navigation'
import { Outlet } from 'react-router-dom'

type Props = {}

const ContainerLayout: React.FC<Props> = (props) => {
  return (
    <div className='hidden md:block'>
      <Navigation></Navigation>
      <div className='container mx-auto '>
        <div className=' container-layout  mt-[-2%]  overflow-hidden rounded-b-[40px] px-10 pt-[5%]'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default ContainerLayout
