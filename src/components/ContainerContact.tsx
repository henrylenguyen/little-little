import React from 'react'

type Props = {
  children: React.ReactNode
}

const ContainerContact = ({ children }: Props) => {
  return (
    <div className=' h-auto min-h-[135px] w-[350px] rounded-[20px] bg-[#FDE8B3] p-3 shadow-[0px_8px_0px_0px_#FFCA7B]'>
      <div className='flex min-h-[calc(135px-24px)] gap-3 rounded-[15px] border-[3px] border-dashed border-[#FFB489] bg-[#FFF6D4] p-5'>
        {children}
      </div>
    </div>
  )
}

export default ContainerContact
