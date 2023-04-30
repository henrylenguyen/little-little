import Form from 'components/form/Form'
import { TicketFields, PaymentFields } from 'constants/fields/PaymentPage.fields'
import FormLayout from 'layouts/Form/FormLayout'
import React from 'react'

type Props = {}

const PaymentPage = (props: Props) => {
  return (
    <div>
      <h2 className='title '>Thanh toán</h2>
      <div className='mt-28'>
        <FormLayout
          contentLeft={
            <div>
              <Form
                schema={''}
                fields={TicketFields}
                handleSubmitForm={undefined}
                title={''}
                initialValues={undefined}
                gap={'20px 50px'}
              ></Form>
            </div>
          }
          LabelImageLeft={true}
          labelContentLeft='vé cổng - vé gia đình'
          contentRight={
            <div>
              <Form
                schema={''}
                fields={PaymentFields}
                handleSubmitForm={undefined}
                title={''}
                initialValues={undefined}
                gap={'20px 50px'}
                titleButton={'Thanh toán'}
              ></Form>
            </div>
          }
          LabelImageRight={true}
          labelContentRight='Thông tin thanh toán'
        ></FormLayout>
      </div>
    </div>
  )
}

export default PaymentPage
