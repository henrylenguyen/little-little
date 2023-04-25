import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Dropdown from '../select/Dropdown'
import DateTimePickerField from '../datetime/DateTimePickerField'
import * as yup from 'yup'
type IForm = {
  schema: yup.ObjectSchema<{}, yup.AnyObject, {}, ''>
  fields?: {
    label: string
    name: string
    type: string
    placeholder: string
    onChange: any
    options: any
    value: any
  }[]
  handleSubmitForm?: any
  title?: string
  initialValues?: any
  color?: string
}

const Form: React.FC<IForm> = ({ schema, fields, handleSubmitForm, title, initialValues, color = 'text-gray-700' }) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    shouldUnregister: true
  })
  const onSubmit = (data: any) => {
    handleSubmitForm(data)
  }

  // const newFields = fields?.reduce((acc, field) => {
  //   if (initialValues?.hasOwnProperty(field.name)) {
  //     acc.push({
  //       ...field,
  //       value: initialValues[field.name]
  //     })
  //   }
  //   return acc
  // }, [])

  return (
    <>
      <h3 className='text-center text-[30px] font-semibold uppercase'>{title}</h3>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
        {
          // newFields.length > 0
          //   ? newFields.map(({ label, name, type, placeholder, onChange, ...rest }) => (
          //       <div key={name} className='flex flex-col gap-3'>
          //         <label className={`block font-medium ${color}`} htmlFor={name}>
          //           {label}
          //         </label>
          //         {type === 'select' ? (
          //           <Dropdown
          //             control={control}
          //             name={name}
          //             options={rest.options}
          //             errors={errors[name]}
          //             defaultValue={rest.value}
          //           />
          //         ) : type === 'date' ? (
          //           <DateTimePickerField control={control} name={name} errors={errors} type='date' />
          //         ) : type === 'time' ? (
          //           <DateTimePickerField control={control} name={name} errors={errors} type='time' />
          //         ) : type === 'datetime' ? (
          //           <DateTimePickerField
          //             control={control}
          //             name={name}
          //             errors={errors}
          //             type='datetime'
          //             defaultValue={rest.value}
          //           />
          //         ) : (
          //           <input
          //             type={type}
          //             placeholder={placeholder}
          //             {...register(name)}
          //             name={name}
          //             defaultValue={rest.value}
          //             className={`${
          //               errors[name] ? 'border-red-500 border' : 'border-gray-300 border'
          //             } focus:border-blue-400 focus:ring-blue-400  text-black mt-2 block w-full rounded-md  px-3 py-2 focus:outline-none focus:ring-2`}
          //           />
          //         )}

          //         {errors[name] && <span className='text-red-500 text-sm italic'>{errors[name].message}</span>}
          //       </div>
          //     ))
          //   :
          fields?.map(({ label, name, type, placeholder, onChange, options, value }) => (
            <div key={name} className='flex flex-col gap-3'>
              <label className={`block font-medium ${color}`} htmlFor={name}>
                {label}
              </label>
              {type === 'select' ? (
                onChange ? (
                  <Dropdown control={control} name={name} options={options} errors={errors[name]} Select={onChange} />
                ) : (
                  <Dropdown control={control} name={name} options={options} errors={errors[name]} />
                )
              ) : (
                // : type === 'date' ? (
                //   <DateTimePickerField control={control} name={name} errors={errors} type='date' />
                // ) : type === 'time' ? (
                //   <DateTimePickerField control={control} name={name} errors={errors} type='time' />
                // ) : type === 'datetime' ? (
                //   <DateTimePickerField
                //     control={control}
                //     name={name}
                //     errors={errors}
                //     type='datetime'
                //     defaultValue={value}
                //   />
                // )
                <input
                  type={type}
                  placeholder={placeholder}
                  {...register(name)}
                  name={name}
                  className={`${
                    errors[name] ? 'border-red-500 border' : 'border-gray-300 border'
                  } focus:border-blue-400 focus:ring-blue-400  text-black mt-2 block w-full rounded-md  px-3 py-2 focus:outline-none focus:ring-2`}
                />
              )}

              {errors[name] && typeof errors[name] === 'object' && errors[name].message && (
                <span className='text-red-500 text-sm italic'>{errors[name].message}</span>
              )}
            </div>
          ))
        }
        <div className='mt-5 flex justify-between gap-5'>
          <button
            type='submit'
            className='border-transparent text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 inline-flex w-full justify-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
          >
            Lưu
          </button>
        </div>
      </form>
    </>
  )
}

export default Form
