import FormLeft from 'layouts/Form/FormLeft'
import React, { useEffect } from 'react'
import Form from 'components/form/Form'
import ContactPageFields from 'constants/fields/ContactPage.fields'
import address from 'assets/images/adress 1.svg'
import email from 'assets/images/mail-inbox-app 1.svg'
import phone from 'assets/images/telephone 2.svg'
import ContainerContact from 'components/ContainerContact'
import { IContactForm, IContactInfor } from 'constants/interfaces/contact.interface'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'reduxs/configureStore'
import { fetchAddContact, fetchgetContactInfor } from 'thunks/contactThunk'
import Skeleton from 'react-loading-skeleton'
import { contactSchema } from 'constants/schemas/contact.schema'
import { message } from 'antd'
import alex from 'assets/images/Alex_AR_Lay_Do shadow 1.svg'
type Props = {}

const ContactPage = (props: Props) => {
  const [contactInfor, setContactInfor] = useState<IContactInfor>({
    email: '',
    address: '',
    phone: '',
    description: ''
  })
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    const fetchData = async () => {
      const data = await dispatch(fetchgetContactInfor())
      setContactInfor(data)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleSubmitForm = (data: IContactForm) => {
    const fetchRes = async () => {
      const res = await dispatch(fetchAddContact(data))
      message.success(`${res} Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!`)
    }
    fetchRes()
  }
  return (
    <div>
      {contactInfor.address === '' ? (
        <>
          <div className='w-full text-center'>
            <Skeleton height={80} width={500} baseColor='#fff' highlightColor='#eee' duration={1} />
          </div>
          <div className='mt-10 flex gap-x-8'>
            <Skeleton
              height={600}
              width={740}
              baseColor='#fff'
              highlightColor='#eee'
              style={{ borderRadius: '30px' }}
              duration={1}
            />

            <div className='flex  flex-col justify-between'>
              <Skeleton
                height={135}
                width={350}
                baseColor='#fff'
                highlightColor='#eee'
                style={{ borderRadius: '30px' }}
                duration={1}
              />
              <Skeleton
                height={135}
                width={350}
                baseColor='#fff'
                highlightColor='#eee'
                style={{ borderRadius: '30px' }}
                duration={1}
              />
              <Skeleton
                height={135}
                width={350}
                baseColor='#fff'
                highlightColor='#eee'
                style={{ borderRadius: '30px' }}
                duration={1}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className='title'>Liên hệ </h2>
          <div className='relative mt-10 flex gap-x-8 pl-32'>
            <FormLeft>
              <p>{contactInfor.description}</p>
              <Form
                schema={contactSchema}
                fields={ContactPageFields}
                handleSubmitForm={handleSubmitForm}
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
                  <p className='text-[13px] font-medium text-textLightColor'>{contactInfor.address}</p>
                </div>
              </ContainerContact>
              <ContainerContact>
                <img src={email} className='w-[30px]' alt='' />
                <div className=''>
                  <h4 className='text-[18px] font-semibold text-[#12265A]'>Email:</h4>
                  <p className='text-[13px] font-medium text-textLightColor'>{contactInfor.email}</p>
                </div>
              </ContainerContact>
              <ContainerContact>
                <img src={phone} className='w-[30px]' alt='' />
                <div className=''>
                  <h4 className='text-[18px] font-semibold text-[#12265A]'>Điện thoại:</h4>
                  <p className='text-[13px] font-medium text-textLightColor'>{contactInfor.phone}</p>
                </div>
              </ContainerContact>
            </div>
            <img src={alex} alt='alex' className='absolute left-[-18%] top-10 z-40 ' />
          </div>
        </>
      )}
    </div>
  )
}

export default ContactPage
