import formLeft from 'assets/images/Group (1).png'
import Label from 'components/label/Label'
import { IPropsForm } from 'constants/interfaces/formInterface'

const FormLeft = ({ children, LabelImage, labelContent }: IPropsForm) => {
  return (
    <div className='form-left relative col-span-2 '>
      <img src={formLeft} className='z-[-1] h-[500px]' alt='' />
      <div className={'absolute top-0 h-[500px] p-14'}>{children}</div>
      <Label labelImage={LabelImage} labelContent={labelContent} fontSize='28px'></Label>
    </div>
  )
}

export default FormLeft
