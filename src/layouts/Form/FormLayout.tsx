import React from 'react'
import formCenter from 'assets/images/Vector.png'
import FormLeft from './FormLeft'
import FormRight from './FormRight'
type Props = {
  contentLeft: React.ReactNode
  contentRight?: React.ReactNode
  LabelImageLeft?: Boolean
  labelContentLeft?: string
  LabelImageRight?: Boolean
  labelContentRight?: string
}

const FormLayout = ({
  contentLeft,
  contentRight,
  LabelImageLeft,
  labelContentLeft,
  LabelImageRight,
  labelContentRight
}: Props) => {
  return (
    <>
      <div className='form relative mt-[-60px] grid grid-cols-3 gap-7'>
        <FormLeft LabelImage={LabelImageLeft} labelContent={labelContentLeft}>
          {contentLeft}
        </FormLeft>
        <FormRight LabelImage={LabelImageRight} labelContent={labelContentRight}>
          {contentRight}
        </FormRight>
        <div>
          <img src={formCenter} alt='' className='absolute right-[27%] top-0 h-[500px]' />
        </div>
      </div>
    </>
  )
}

export default FormLayout
