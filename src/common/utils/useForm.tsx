import { useState } from 'react'
import { notification } from 'antd'

interface IValues {
  name: string
  email: string
  message: string
  tel_number: string
  last_name: string
  pharma_name: string
  address: string
}

const initialValues: IValues = {
  name: '',
  email: '',
  message: '',
  tel_number: '',
  last_name: '',
  pharma_name: '',
  address: ''
}

type NotificationType = 'success' | 'info' | 'warning' | 'error'

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [api, contextHolder] = notification.useNotification()

  const openNotificationWithIcon = (
    type: NotificationType,
    message: string,
    description: string
  ) => {
    api[type]({
      message: message,
      description: description
    })
  }

  const [formState, setFormState] = useState<{
    values: IValues
    errors: IValues
  }>({
    values: { ...initialValues },
    errors: { ...initialValues }
  })

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const values = formState.values
    const errors = validate(values)
    setFormState((prevState) => ({ ...prevState, errors }))

    const url = '' // Fill in your API URL here

    try {
      if (Object.values(errors).every((error) => error === '')) {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })

        if (!response.ok) {
          openNotificationWithIcon(
            'error',
            'Error',
            'There was an error sending your message, please try again later.'
          )
        } else {
          event.target.reset()
          setFormState(() => ({
            values: { ...initialValues },
            errors: { ...initialValues }
          }))
          openNotificationWithIcon('success', 'Success', 'Your message has been sent!')
        }
      }
    } catch (error) {
      openNotificationWithIcon('error', 'Error', 'Failed to submit form. Please try again later.')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.persist()
    const { name, value } = event.target
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value
      },
      errors: {
        ...prevState.errors,
        [name]: ''
      }
    }))
  }

  return {
    contextHolder,
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors
  }
}
