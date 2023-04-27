import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Dropdown from '../select/Dropdown'
import DateTimePickerField from '../datetime/DateTimePickerField'

const Form = ({ schema, fields, handleSubmitForm, title, initialValues, color = 'text-gray-700', ...rest }) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    shouldUnregister: true
  })
  const onSubmit = (data) => {
    handleSubmitForm(data)
  }

  const newFields = fields?.reduce((acc, field) => {
    if (initialValues?.hasOwnProperty(field.name)) {
      acc.push({
        ...field,
        value: initialValues[field.name]
      })
    }
    return acc
  }, [])

  return (
    <>
      <h3 className='text-center text-[30px] font-semibold uppercase'>{title}</h3>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
        {newFields?.length > 0
          ? newFields?.map(({ label, name, type, placeholder, onChange, ...rest }) => (
              <div key={name} className='flex flex-col gap-3'>
                <label className={`block font-medium ${color}`} htmlFor={name}>
                  {label}
                </label>
                {type === 'select' ? (
                  <Dropdown
                    control={control}
                    name={name}
                    options={rest.options}
                    errors={errors[name]}
                    defaultValue={rest.value}
                  />
                ) : type === 'date' ? (
                  <DateTimePickerField control={control} name={name} errors={errors} type='date' />
                ) : type === 'time' ? (
                  <DateTimePickerField control={control} name={name} errors={errors} type='time' />
                ) : type === 'datetime' ? (
                  <DateTimePickerField
                    control={control}
                    name={name}
                    errors={errors}
                    type='datetime'
                    defaultValue={rest.value}
                  />
                ) : (
                  <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                    name={name}
                    defaultValue={rest.value}
                    className={`${
                      errors[name] ? 'border-red-500 border' : 'border-gray-300 border'
                    } focus:border-blue-400 focus:ring-blue-400  text-black mt-2 block w-full rounded-md  px-3 py-2 focus:outline-none focus:ring-2`}
                  />
                )}

                {errors[name] && <span className='text-red-500 text-sm italic'>{errors[name]?.message}</span>}
              </div>
            ))
          : fields?.map(({ label, name, type, placeholder, onChange, className, ...rest }) => (
              <div key={name} className='flex flex-col gap-3'>
                <label className={`block font-medium ${color}`} htmlFor={name}>
                  {label}
                </label>
                {type === 'select' ? (
                  onChange ? (
                    <Dropdown
                      control={control}
                      name={name}
                      options={rest.options}
                      errors={errors[name]}
                      SelectOption={onChange}
                      className={className}
                    />
                  ) : (
                    <Dropdown
                      control={control}
                      name={name}
                      options={rest?.options}
                      errors={errors[name]}
                      className={className}
                    />
                  )
                ) : type === 'date' ? (
                  <DateTimePickerField control={control} name={name} errors={errors} type='date' />
                ) : type === 'time' ? (
                  <DateTimePickerField control={control} name={name} errors={errors} type='time' />
                ) : type === 'datetime' ? (
                  <DateTimePickerField
                    control={control}
                    name={name}
                    errors={errors}
                    type='datetime'
                    defaultValue={rest.value}
                  />
                ) : (
                  <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                    name={name}
                    className={`${errors[name] ? 'border-red-500 border' : ''} ${className}`}
                  />
                )}

                {errors[name] && <span className='text-red-500 text-sm italic'>{errors[name].message}</span>}
              </div>
            ))}
        <div className='mt-2 text-center '>
          <button
            type='submit'
            className='button shadow-2xl w-[300px] rounded-2xl bg-buttonColor p-[10px] font-secondFont text-[20px] font-[900] text-textSecondColor'
          >
            {rest?.titleButton}
          </button>
        </div>
      </form>
    </>
  )
}

export default Form
