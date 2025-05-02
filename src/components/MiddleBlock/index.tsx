import { Row, Col } from 'antd'
import { lazy } from 'react'
import { withTranslation } from 'react-i18next'
import { TFunction } from 'i18next'
import { Slide } from 'react-awesome-reveal'
import { Button } from '../../common/Button'
// import { BackgroundImage } from '../../common/ImageIntegration'
import {
  MiddleBlockSection,
  Content,
  ContentWrapper,
  StyledSVG,
  ListItem,
  ListContainer,
  ListContent,
  ListContentWrapper
} from './styles'

const Container = lazy(() => import('../../common/Container'))

interface MiddleBlockProps {
  title: string
  content: string
  button?: string
  list?: { element: string }[]
  id: string
  t: TFunction
}

const MiddleBlock = ({ title, content, button, list, t, id }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <MiddleBlockSection>
      <StyledSVG overflow={'visible'}>
        <radialGradient id="gradientTop" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: '#5271FF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
        </radialGradient>
        <circle cx={'0%'} cy={'15%'} r={'17%'} fill="url(#gradientTop)" />
      </StyledSVG>
      <StyledSVG overflow={'visible'}>
        <radialGradient id="gradientBottom" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: '#5271FF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
        </radialGradient>
        <circle cx={'100%'} cy={'80%'} r={'17%'} fill="url(#gradientBottom)" />
      </StyledSVG>
      <Container>
        <Slide direction="up" triggerOnce>
          <Row justify="center" align="middle" id={id}>
            <ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                <h6>{t(title)}</h6>
                {content && <Content>{t(content)}</Content>}
                {list && list.length > 0 && (
                  <ListContainer>
                    {list.map((item, index) => (
                      <ListItem key={index} alignRight={index % 2 !== 0}>
                        <ListContentWrapper>
                          <ListContent color="#5271FF" font_weight="900">
                            {index + 1}.
                          </ListContent>
                          <ListContent
                            color="#000"
                            font_weight="300"
                            style={{ margin: '0 0 0 1rem' }}
                          >
                            {t(item.element)}
                          </ListContent>
                        </ListContentWrapper>
                      </ListItem>
                    ))}
                  </ListContainer>
                )}
                {button && (
                  <Button name="submit" onClick={() => scrollTo('mission')}>
                    {t(button)}
                  </Button>
                )}
              </Col>
            </ContentWrapper>
          </Row>
        </Slide>
      </Container>
    </MiddleBlockSection>
  )
}

export default withTranslation()(MiddleBlock)
