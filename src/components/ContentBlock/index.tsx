import { Row, Col } from 'antd'
import { lazy } from 'react'

import { Fade } from 'react-awesome-reveal'
import { withTranslation } from 'react-i18next'

import { ContentBlockProps } from './types'
import { Button } from '../../common/Button'
import { SvgIcon } from '../../common/SvgIcon'
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  SubContent,
  StyledUl
} from './styles'

const Container = lazy(() => import('../../common/Container'))

const ContentBlock = ({
  icon,
  title,
  content,
  sub_content,
  section,
  button,
  list,
  t,
  id,
  direction
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <ContentSection>
      <Container>
        <Fade direction={direction} triggerOnce>
          <StyledRow justify="space-between" align="middle" id={id} direction={direction}>
            <Col lg={11} md={11} sm={11} xs={24}>
              <SvgIcon src={icon} width="100%" height="100%" />
            </Col>
            <Col lg={11} md={11} sm={11} xs={24}>
              <ContentWrapper>
                <h6>{t(title)}</h6>
                <Content>{t(content)}</Content>
                {sub_content && <SubContent>{t(sub_content)}</SubContent>}
                {list && list.length > 0 && (
                  <StyledUl>
                    {list.map((item, index) => (
                      <li key={index}>✔ {t(item.element)}</li>
                    ))}
                  </StyledUl>
                )}
                {direction === 'right' ? (
                  <ButtonWrapper>
                    {typeof button === 'object' &&
                      button.map(
                        (
                          item: {
                            color?: string
                            title: string
                          },
                          id: number
                        ) => {
                          return (
                            <Button key={id} color={item.color} onClick={() => scrollTo('about')}>
                              {t(item.title)}
                            </Button>
                          )
                        }
                      )}
                  </ButtonWrapper>
                ) : (
                  <ServiceWrapper>
                    <Row justify="space-between">
                      {typeof section === 'object' &&
                        section.map(
                          (
                            item: {
                              title: string
                              content: string
                              icon: string
                            },
                            id: number
                          ) => {
                            return (
                              <Col key={id} span={11}>
                                <SvgIcon src={item.icon} width="40%" height="40%" />
                                <MinTitle>{t(item.title)}</MinTitle>
                                <MinPara>{t(item.content)}</MinPara>
                              </Col>
                            )
                          }
                        )}
                    </Row>
                  </ServiceWrapper>
                )}
              </ContentWrapper>
            </Col>
          </StyledRow>
        </Fade>
      </Container>
    </ContentSection>
  )
}

export default withTranslation()(ContentBlock)
