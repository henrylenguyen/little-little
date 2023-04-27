import formRight from 'assets/images/Group (2).png'
import Label from 'components/label/Label'
import { IPropsForm } from 'constants/interfaces/formInterface'

const FormRight = ({ children, LabelImage, labelContent }: IPropsForm) => {
  return (
    <>
      <div className='form-right relative z-[9999] col-span-2'>
        <img src={formRight} className='h-[520px] ' alt='' />
        <div className={'absolute top-0 h-[520px] w-full p-10'}>{children}</div>
        <Label labelImage={LabelImage} labelContent={labelContent} fontSize='20px'></Label>
      </div>
    </>
  )
}

export default FormRight
