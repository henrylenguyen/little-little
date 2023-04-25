import React from 'react'

import FormLayout from 'layouts/Form/FormLayout'
import CarouselHome from 'layouts/CarouselHome'
import * as yup from 'yup'
import Form from 'components/form/Form'

interface IProps {
  contentLeft?: React.ReactNode
  contentRight?: React.ReactNode
  LabelImageLeft?: Boolean
  labelContentLeft?: string
  LabelImageRight?: Boolean
  labelContentRight?: string
}
const schema = yup.object().shape({}).required()
const HomePage: React.FC<IProps> = () => {
  return (
    <div className=''>
      <CarouselHome></CarouselHome>
      <FormLayout
        LabelImageRight
        labelContentRight='vé của bạn'
        contentLeft={
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt molestiae temporibus quasi repellendus in
            eaque libero corrupti maiores neque velit quae magni voluptate dolores tenetur doloremque tempora dolorum,
            nostrum enim.
          </p>
        }
        contentRight={
          <Form
            schema={schema}
            // fields={fields}
            // closeModal={closeModal}
            // handleSubmitForm={handleSubmitForm}
            title={'Thêm mới phim'}
            color='text-white'
          />
        }
      />
    </div>
  )
}

export default HomePage
