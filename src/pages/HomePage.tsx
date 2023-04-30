import React from 'react'

import FormLayout from 'layouts/Form/FormLayout'
import CarouselHome from 'layouts/CarouselHome'
import * as yup from 'yup'
import Form from 'components/form/Form'
import HomePageFields from 'constants/fields/HomePage.fields'
import Lisa from 'assets/images/Lisa_Arnold_Lay_Do_F2 3.png'
import ballon5 from 'assets/images/18451 [Converted]-05 1.png'
import ballon3 from 'assets/images/18451 [Converted]-03 2.png'
import ballon4 from 'assets/images/18451 [Converted]-04 1.png'

interface IProps {
  contentLeft?: React.ReactNode
  contentRight?: React.ReactNode
  LabelImageLeft?: Boolean
  labelContentLeft?: string
  LabelImageRight?: Boolean
  labelContentRight?: string
}
const schema = yup.object().shape({}).required()

const handleSubmitForm = (data: any) => {
  console.log(data)
}
const HomePage: React.FC<IProps> = () => {
  return (
    <div className=''>
      <CarouselHome></CarouselHome>
      <FormLayout
        LabelImageRight
        labelContentRight='vé của bạn'
        contentLeft={
          <div>
            <p className='row-span-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat
              tellus quis risus volutpat, ut posuere ex facilisis. Suspendisse iaculis libero lobortis condimentum
              gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Nemo soluta nesciunt porro. Ea vero asperiores officia, libero minus harum
              possimus consequatur repudiandae nesciunt, eaque consectetur totam sapiente ducimus. Aliquam, repellat!
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat
              tellus quis risus volutpat, ut posuere ex facilisis. Suspendisse iaculis libero lobortis condimentum
              gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Nemo soluta nesciunt porro. Ea vero asperiores officia, libero minus harum
              possimus consequatur repudiandae nesciunt, eaque consectetur totam sapiente ducimus. Aliquam, repellat!
            </p>
            <img src={Lisa} alt='' className='absolute bottom-[-10%] left-[-5%] w-[200px]' />
            <img src={ballon4} alt='' className='absolute -bottom-[20%] left-1/2 z-[-1] -translate-x-1/2' />
          </div>
        }
        contentRight={
          <div>
            <Form
              titleButton={'Đặt vé'}
              schema={schema}
              fields={HomePageFields}
              title={''}
              color='text-white'
              handleSubmitForm={handleSubmitForm}
              initialValues={undefined}
              gap={'10px 20px'}
            />
            <img src={ballon5} alt='' className='absolute right-[-17%] top-[10%] z-[-1] w-[100px] object-contain' />
            <img src={ballon3} alt='' className='absolute bottom-[-10%] right-[-15%] z-[-1] w-[100px] object-contain' />
          </div>
        }
      />
    </div>
  )
}

export default HomePage
