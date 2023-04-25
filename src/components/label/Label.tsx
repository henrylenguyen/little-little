import React from 'react'
import LableImage from 'assets/images/Lable.png'

type Props = {
  labelImage?: Boolean
  labelContent?: string
  fontSize: string
}

const Label = ({ labelImage, labelContent, fontSize }: Props) => {
  return (
    <>
      {labelImage && (
        <div className='absolute left-1/2 top-[3%] -translate-x-1/2 -translate-y-1/2'>
          <img src={LableImage} alt='label' />
          <span
            className={`absolute left-1/2 top-[70%] inline-block h-full w-full -translate-x-1/2 -translate-y-1/2  text-center text-[${fontSize}] font-secondFont font-[900] uppercase text-textSecondColor`}
          >
            {labelContent}
          </span>
        </div>
      )}
    </>
  )
}

export default Label
