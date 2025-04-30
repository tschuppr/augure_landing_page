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
  if (!values.telephone) {
    errors.telephone = 'Telephone is required'
  } else if (
    !/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/.test(
      values.telephone
    )
  ) {
    errors.telephone = 'Telephone number is invalid'
  }
  if (!values.pharma_name) {
    errors.pharma_name = 'Pharmacy name is required'
  }
  return errors
}
