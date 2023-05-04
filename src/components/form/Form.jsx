import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Dropdown from '../select/Dropdown'
import DateTimePickerField from '../datetime/DateTimePickerField'

const Form = ({ schema, fields, handleSubmitForm, gap, color = 'text-gray-700', ...rest }) => {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting,isValid }
  } = useForm({
    resolver: yupResolver(schema),
    shouldUnregister: true
  })
  const onSubmit = (data) => {
    handleSubmitForm(data)
    if (!isValid) return
    // để hiển thị loading trên nút
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
        reset()
      }, 1000)
    })
  }

  const newFields = fields?.reduce((acc, field) => {
    if (rest?.initialValues?.hasOwnProperty(field.name)) {
      acc.push({
        ...field,
        value: rest?.initialValues[field.name]
      })
    }
    return acc
  }, [])

  return (
    <>
      <h3 className='text-center text-[30px] font-semibold uppercase'>{rest?.title}</h3>
      <form onSubmit={handleSubmit(onSubmit)} className={`mt-2 grid grid-cols-3 `} style={{ gap: gap }}>
        {newFields?.length > 0
          ? newFields?.map(({ name, type, placeholder, onChange, className, ...rest }) => (
              <div key={name} className='flex flex-col gap-3'>
                <label className={`mb-2 block font-medium ${color}`} htmlFor={name}>
                  {rest?.label}
                </label>
                {type === 'select' ? (
                  <Dropdown
                    control={control}
                    name={name}
                    options={rest?.options}
                    errors={errors[name]}
                    defaultValue={rest?.value}
                  />
                ) : type === 'date' ? (
                  <DateTimePickerField
                    control={control}
                    name={name}
                    errors={errors}
                    type='date'
                    defaultValue={rest?.value}
                  />
                ) : type === 'time' ? (
                  <DateTimePickerField
                    control={control}
                    name={name}
                    errors={errors}
                    type='time'
                    defaultValue={rest?.value}
                  />
                ) : type === 'datetime' ? (
                  <DateTimePickerField
                    control={control}
                    name={name}
                    errors={errors}
                    type='datetime'
                    defaultValue={rest?.value}
                  />
                ) : (
                  <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                    name={name}
                    defaultValue={rest?.value}
                    className={`${errors[name] ? 'border border-buttonColor' : ''} ${className}`}
                    {...rest}
                  />
                )}

                {errors[name] && <span className='text-sm italic text-buttonColor'>{errors[name]?.message}</span>}
              </div>
            ))
          : fields?.map(({ name, type, placeholder, onChange, className, ...rest }) => (
              <div key={name} className={rest?.classNameDiv}>
                <label className={`mb-2 block font-medium ${color}`} htmlFor={name}>
                  {rest?.label}
                </label>
                {type === 'select' ? (
                  onChange ? (
                    <Dropdown
                      control={control}
                      name={name}
                      options={rest?.options}
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
                  <DateTimePickerField
                    defaultValue={rest?.value}
                    control={control}
                    name={name}
                    errors={errors}
                    type='date'
                  />
                ) : type === 'time' ? (
                  <DateTimePickerField
                    defaultValue={rest?.value}
                    control={control}
                    name={name}
                    errors={errors}
                    type='time'
                  />
                ) : type === 'datetime' ? (
                  <DateTimePickerField
                    control={control}
                    name={name}
                    errors={errors}
                    type='datetime'
                    defaultValue={rest?.value}
                  />
                ) : type === 'number' ? (
                  <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                    name={name}
                    className={`${errors[name] ? 'border border-buttonColor ' : ''} ${className} `}
                    min={0}
                    max={10}
                  />
                ) : type === 'textarea' ? (
                  <textarea
                    type={'textarea'}
                    placeholder={placeholder}
                    {...register(name)}
                    name={name}
                    className={`${errors[name] ? 'border border-buttonColor ' : ''} ${className} `}
                    rows={2}
                  />
                ) : (
                  <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                    name={name}
                    className={`${errors[name] ? 'border border-buttonColor' : ''} ${className}`}
                  />
                )}

                {errors[name] && <span className='text-sm italic text-buttonColor'>{errors[name].message ?? ''}</span>}
              </div>
            ))}

        <div className='col-span-3 mt-10 text-center'>
          {rest?.titleButton && (
            <button
              type='submit'
              className='btnPrimary w-[300px]  rounded-2xl p-[10px] text-[20px] shadow-secondShadow'
            >
              {isSubmitting ? (
                <div className='border-white border-t-transparent mx-auto h-[20px] w-[20px] animate-spin rounded-full border-2 border-t-2'></div>
              ) : (
                `${rest?.titleButton}`
              )}
            </button>
          )}
        </div>
      </form>
    </>
  )
}

export default Form
