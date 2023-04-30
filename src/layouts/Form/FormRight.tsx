import Label from 'components/label/Label'
import { IPropsForm } from 'constants/interfaces/formInterface'
import ContainerForm from '../../components/ContainerForm'

const FormRight = ({ children, LabelImage, labelContent }: IPropsForm) => {
  return (
    <>
      <div className='form-right relative z-[9999] col-span-2'>
        <ContainerForm>{children}</ContainerForm>
        <Label labelImage={LabelImage} labelContent={labelContent} fontSize='20px'></Label>
      </div>
    </>
  )
}

export default FormRight
