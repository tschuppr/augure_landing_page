import { validateProps } from '../../common/types'

export default function validate(values: validateProps) {
  const errors = {} as validateProps

  if (!values.name) {
    errors.name = 'Name is required'
  }
  if (!values.email) {
    errors.email = 'Email address is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }
  // if (!values.message) {
  //   errors.message = 'Message is required'
  // }
  if (!values.tel_number) {
    errors.tel_number = 'Telephone is required'
  }
  if (!values.pharma_name) {
    errors.pharma_name = 'Pharmacy name is required'
  }
  return errors
}
