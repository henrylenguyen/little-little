import Label from 'components/label/Label'
import { IPropsForm } from 'constants/interfaces/formInterface'
import ContainerForm from '../../components/ContainerForm'

const FormLeft = ({ children, LabelImage, labelContent }: IPropsForm) => {
  return (
    <div className='form-left relative z-[10] col-span-3 h-full'>
      <ContainerForm>{children}</ContainerForm>
      <Label labelImage={LabelImage} labelContent={labelContent} fontSize='28px'></Label>
    </div>
  )
}

export default FormLeft
