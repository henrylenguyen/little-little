import Form from 'components/form/Form'
import Modal from 'components/modal/Modal'
import { TicketFields, PaymentFields } from 'constants/fields/PaymentPage.fields'
import { paymentInitialValue } from 'constants/fields/payment.fields'
import { IPayment } from 'constants/interfaces/payment.interface'
import { paymentSchema } from 'constants/schemas/payment.schema'
import FormLayout from 'layouts/Form/FormLayout'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from 'reduxs/configureStore'
import formatPrice from 'utils/formatMoney'
import sadImage from 'assets/images/sad emoji 1.svg'
import moment from 'moment'
import { fetchPaymentTicket } from 'thunks/ticketThunk'
import { ToastContainer, toast } from 'react-toastify'
type Props = {}

const PaymentPage = (props: Props) => {
  const { isLoading, bookedTicketInfor, ticketPaymentInfor } = useSelector((state: RootState) => state.ticket)

  const dispatch = useDispatch<AppDispatch>()
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (bookedTicketInfor.amount === 0) {
      navigate('/')
    }
  }, [])

  const initialValue = {
    ...bookedTicketInfor,
    paymentAmount: formatPrice(Number(bookedTicketInfor.paymentAmount))
  }
  const handlePayment = (data: IPayment) => {
    if (
      data.cardNumber !== paymentInitialValue.cardNumber ||
      data.name !== paymentInitialValue.name ||
      data.expiry !== paymentInitialValue.expiry ||
      data.CVC !== paymentInitialValue.CVC
    ) {
      setIsErrorModalOpen(true)
    } else {
      const expiryDate = moment(bookedTicketInfor.expiry, 'DD/MM/YYYY').toISOString()
      dispatch(
        fetchPaymentTicket({
          ...bookedTicketInfor,
          expiry: expiryDate
        })
      )
    }
  }
  const closeErrorModal = () => {
    setIsErrorModalOpen(false)
  }
  // -----------------------------------------HIỆN TOAST------------------------
  useEffect(() => {
    const handle = async () => {
      if (ticketPaymentInfor) {
        if (ticketPaymentInfor.message) {
          await toast.success('Chúc mừng bạn đã đặt vé thành công 🎉🎉🎉')
          setTimeout(() => {
            navigate(`/payment/${ticketPaymentInfor.content.id}`)
          }, 3000)
        }
      }
    }
    handle()
  }, [navigate, ticketPaymentInfor])
  // ----------------------------------------CHUYỂN TRANG----------------------

  return (
    <>
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
                  initialValues={initialValue}
                  gap={'20px 50px'}
                ></Form>
              </div>
            }
            LabelImageLeft={true}
            labelContentLeft='vé cổng - vé gia đình'
            contentRight={
              <div>
                <Form
                  schema={paymentSchema}
                  fields={PaymentFields}
                  handleSubmitForm={handlePayment}
                  initialValues={paymentInitialValue}
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
      <Modal isOpen={isErrorModalOpen} closeModal={closeErrorModal}>
        <div className='h-[400px] w-[472px] overflow-hidden '>
          <div
            className='relative h-full w-full  pt-[70px]
          '
          >
            <div className=' h-[90px] w-full rounded-t-[40px] bg-[#FF8B15]'>
              <img src={sadImage} alt='sadIcon' className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className='rounded-b-[40px] bg-textSecondColor p-10 text-[20px] font-semibold leading-8  text-textPrimaryColor'>
              Hình như đã có lỗi xảy ra khi thanh toán... <br />
              Vui lòng kiểm tra lại thông tin liên hệ, thông tin thẻ và thử lại.
            </div>
          </div>
        </div>
      </Modal>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme='light'
      />
    </>
  )
}

export default PaymentPage
