import { withTranslation } from 'react-i18next'
import { Container, StyledInput } from './styles'
import { Label } from '../TextArea/styles'
import { InputProps } from '../types'

const Input = ({ pad, name, value, placeholder, onChange, t }: InputProps) => (
  <Container style={{ padding: pad }}>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledInput
      placeholder={t(placeholder)}
      name={name}
      value={value}
      id={name}
      onChange={onChange}
    />
  </Container>
)

export default withTranslation()(Input)
