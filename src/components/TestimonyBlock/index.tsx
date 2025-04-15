import { Row, Col } from 'antd'
import { withTranslation } from 'react-i18next'
import { TFunction } from 'i18next'
import { Slide } from 'react-awesome-reveal'
import { TestimonyBlockSection, ContentWrapper, CardWrapper, MinPara, Name, Title } from './styles'
import Container from '../../common/Container'

interface TestimonyBlockProps {
  title: string
  elements?: {
    name: string
    text: string
  }[]
  id: string
  t: TFunction
}

const TestimonyBlock = ({ title, elements, t, id }: TestimonyBlockProps) => {
  return (
    <TestimonyBlockSection>
      <Container>
        <Slide direction="down" triggerOnce>
          <Row justify="center" align="middle" id={id}>
            <ContentWrapper>
              <Title>{t(title)}</Title>
              {
                <CardWrapper>
                  <Row justify="space-evenly" align="middle">
                    {typeof elements === 'object' &&
                      elements.map(
                        (
                          item: {
                            name: string
                            text: string
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} lg={10} md={10} sm={10} xs={10}>
                              <MinPara>{t(item.text)}</MinPara>

                              <Name>{t(item.name)}</Name>
                            </Col>
                          )
                        }
                      )}
                  </Row>
                </CardWrapper>
              }
            </ContentWrapper>
          </Row>
        </Slide>
      </Container>
    </TestimonyBlockSection>
  )
}

export default withTranslation()(TestimonyBlock)
