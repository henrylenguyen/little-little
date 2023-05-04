import { ReactNode } from 'react'
import * as yup from 'yup'
import React from 'react'

export interface IPropsForm {
  children?: ReactNode
  LabelImage?: Boolean
  labelContent?: string
}
interface RestProps {
  label: string
  options: any
  value: any
}
export interface IFields {
  name: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'date' | 'time' | 'datetime' | 'number'
  placeholder?: string
  className: string
  classNameDiv?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  rest?: RestProps & Record<string, any>
  defaultValue?: any
}

export interface IFormProps {
  schema: yup.AnyObjectSchema
  fields: IFields[]
  handleSubmitForm: (data: any) => void
  title: string
  initialValues: any
  gap?: string
  color?: string
  titleButton?: string
  errors?: Record<string, string>
  rest?: RestProps & Record<string, any>
}
