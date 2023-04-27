import { IControl } from 'constants/interfaces/control.interface'
import React from 'react'
import { useController } from 'react-hook-form'
interface IInput extends IControl {
  isUpdate: Boolean
}

const Input: React.FC<IInput> = ({ control, isUpdate, className, name, ...props }) => {
  const { field } = useController({
    control,
    name: name,
    defaultValue: ''
  })
  return (
    <input
      className={`w-full px-5 py-3 text-[18px] ${className} ${isUpdate ? 'bg-gray-800' : 'bg-transparent'}`}
      {...field}
      {...props}
    />
  )
}

export default Input
