import FormLeft from 'layouts/Form/FormLeft'
import React from 'react'
import Form from 'components/form/Form'
import ContactPageFields from 'constants/fields/ContactPage.fields'
import address from 'assets/images/adress 1.svg'
import email from 'assets/images/mail-inbox-app 1.svg'
import phone from 'assets/images/telephone 2.svg'
import ContainerContact from 'components/ContainerContact'
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
          <ContainerContact>
            <img src={address} className='w-[30px]' alt='' />
            <div className=''>
              <h4 className='text-[18px] font-semibold text-[#12265A]'>Địa chỉ:</h4>
              <p className='text-[13px] font-medium text-textLightColor'>
                86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh
              </p>
            </div>
          </ContainerContact>
          <ContainerContact>
            <img src={email} className='w-[30px]' alt='' />
            <div className=''>
              <h4 className='text-[18px] font-semibold text-[#12265A]'>Email:</h4>
              <p className='text-[13px] font-medium text-textLightColor'>investigate@your-site.com</p>
            </div>
          </ContainerContact>
          <ContainerContact>
            <img src={phone} className='w-[30px]' alt='' />
            <div className=''>
              <h4 className='text-[18px] font-semibold text-[#12265A]'>Điện thoại:</h4>
              <p className='text-[13px] font-medium text-textLightColor'>+84 145 689 798</p>
            </div>
          </ContainerContact>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
