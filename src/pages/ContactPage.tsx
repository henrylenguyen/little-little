import FormLeft from 'layouts/Form/FormLeft'
import React from 'react'
import contactImage from 'assets/images/contact.svg'
import Form from 'components/form/Form'
import ContactPageFields from 'constants/fields/ContactPage.fields'
type Props = {}

const ContactPage = (props: Props) => {
  return (
    <div>
      <h2 className='title'>Liên hệ</h2>
      <div className='mt-10 flex gap-x-8 pl-20'>
        <FormLeft>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ut distinctio dolorum deserunt magni
            neque, laudantium, velit perferendis corporis aut ab repudiandae expedita ullam at est eaque dolorem id
            beatae.
          </p>
          <Form
            schema={undefined}
            fields={ContactPageFields}
            handleSubmitForm={undefined}
            title={''}
            initialValues={undefined}
            gap={'24px'}
            titleButton={'Gửi liên hệ'}
          ></Form>
        </FormLeft>
        <div className='flex  flex-col justify-between'>
          <img src={contactImage} alt='' className='w-full' />
          <img src={contactImage} alt='' className='w-full' />
          <img src={contactImage} alt='' className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
