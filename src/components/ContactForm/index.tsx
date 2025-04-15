import { Row, Col } from 'antd'
import { withTranslation } from 'react-i18next'
import { Slide } from 'react-awesome-reveal'
import { ContactProps, ValidationTypeProps } from './types'
import { useForm } from '../../common/utils/useForm'
import validate from '../../common/utils/validationRules'
import { Button } from '../../common/Button'
import Block from '../Block'
import { lazy } from 'react'
import Input from '../../common/Input'
import AddressAutocomplete from '../../common/AddressAutocomplete'
import TextArea from '../../common/TextArea'
import { ContactContainer, FormGroup, Span, ButtonContainer } from './styles'

const Container = lazy(() => import('../../common/Container'))

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { contextHolder, values, errors, handleChange, handleSubmit } = useForm(validate)

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors]
    if (ErrorMessage) {
      return <Span>{ErrorMessage}</Span>
    } else {
      return null
    }
  }

  return (
    <>
      {contextHolder}
      <Container>
        <ContactContainer id={id}>
          <Row justify="space-between" align="middle">
            <Col lg={11} md={11} sm={11} xs={24}>
              <Slide direction="left" triggerOnce>
                <Block title={title} content={content} />
              </Slide>
            </Col>
            <Col lg={11} md={11} sm={11} xs={24}>
              <Slide direction="right" triggerOnce>
                <FormGroup autoComplete="off" onSubmit={handleSubmit}>
                  <Col span={12}>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={values.name || ''}
                      onChange={handleChange}
                    />
                    <ValidationType type="name" />
                  </Col>
                  <Col span={12}>
                    <Input
                      type="text"
                      name="last_name"
                      placeholder="Your Last Name"
                      value={values.last_name || ''}
                      onChange={handleChange}
                    />
                    <ValidationType type="name" />
                  </Col>
                  <Col span={24}>
                    <AddressAutocomplete />
                    {/* <ValidationType type="address" /> */}
                  </Col>
                  <Col span={24}>
                    <Input
                      type="tel"
                      name="tel_number"
                      placeholder="Your number"
                      value={values.tel_number || ''}
                      onChange={handleChange}
                    />
                    <ValidationType type="tel" />
                  </Col>
                  <Col span={24}>
                    <Input
                      type="text"
                      name="email"
                      placeholder="Your Email"
                      value={values.email || ''}
                      onChange={handleChange}
                    />
                    <ValidationType type="email" />
                  </Col>
                  <Col span={24}>
                    <TextArea
                      placeholder="Your Message"
                      value={values.message || ''}
                      name="message"
                      onChange={handleChange}
                    />
                    {/* <ValidationType type="message" /> */}
                  </Col>
                  <ButtonContainer>
                    <Button name="submit">{t('Submit')}</Button>
                  </ButtonContainer>
                </FormGroup>
              </Slide>
            </Col>
          </Row>
        </ContactContainer>
      </Container>
    </>
  )
}

export default withTranslation()(Contact)
