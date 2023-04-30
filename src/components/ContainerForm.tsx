import React from 'react'

type Props = {
  children: React.ReactNode
}

const ContainerForm = ({ children }: Props) => {
  return (
    <div className=' h-full min-h-[580px] rounded-[30px] bg-[#FDE8B3] p-3 shadow-[0px_15px_0px_0px_#FFCA7B]'>
      <div className='h-full min-h-[calc(580px-24px)] rounded-[30px] border-[3px] border-dashed border-[#FFB489] bg-[#FFF6D4] px-5 py-10'>
        {children}
      </div>
    </div>
  )
}

export default ContainerForm
