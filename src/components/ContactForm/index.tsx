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
          <Row justify="space-between">
            <Col lg={11} md={11} sm={24} xs={24}>
              <Slide direction="left" triggerOnce>
                <Block title={title} content={content} />
              </Slide>
            </Col>
            <Col lg={11} md={11} sm={24} xs={24}>
              <Slide direction="right" triggerOnce>
                <FormGroup autoComplete="off" onSubmit={handleSubmit}>
                  <Col span={12}>
                    <Input
                      pad="5px 5px"
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
                      pad="5px 5px"
                      type="text"
                      name="last_name"
                      placeholder="Your Last Name"
                      value={values.last_name || ''}
                      onChange={handleChange}
                    />
                    <ValidationType type="name" />
                  </Col>
                  <Col span={24}>
                    <Input
                      pad="5px 5px"
                      type="text"
                      name="pharma_name"
                      placeholder="Your pharmacy's name"
                      value={values.pharma_name || ''}
                      onChange={handleChange}
                    />
                    <ValidationType type="pharma_name" />
                  </Col>
                  <Col span={24}>
                    <AddressAutocomplete />
                    {/* <ValidationType type="address" /> */}
                  </Col>
                  <Col span={24}>
                    <Input
                      pad="5px 5px"
                      type="tel"
                      name="telephone"
                      placeholder="Your number"
                      value={values.telephone || ''}
                      onChange={handleChange}
                    />
                    <ValidationType type="telephone" />
                  </Col>
                  <Col span={24}>
                    <Input
                      pad="5px 5px"
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
                      pad="5px 5px"
                      placeholder="Your Message"
                      value={values.message || ''}
                      name="message"
                      onChange={handleChange}
                    />
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
