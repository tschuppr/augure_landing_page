import { Row, Col } from 'antd'
import { lazy } from 'react'
import { Slide } from 'react-awesome-reveal'
import { withTranslation } from 'react-i18next'
import { TFunction } from 'i18next'
import { SvgIcon } from '../../common/SvgIcon'
import { NumberFlow } from '../../common/NumberFlow'
// import AuditInfoSvg from '../../common/SvgAuditInfo'
import { StyledUl, StyledListPart } from '../ContentBlock/styles'
import { MiddleBlockSection, ContentWrapper, StyledPNumberUnit } from './styles'
import { Title } from '../Footer/styles'

const Container = lazy(() => import('../../common/Container'))

interface InformationBlockProps {
  id: string
  t: TFunction
  list?: { text: string; number?: number; number_unit?: string }[]
}

const InformationBlock = ({ t, id, list }: InformationBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <MiddleBlockSection>
      <Container>
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={8} md={8} sm={24} xs={24}>
            <Slide direction="left" triggerOnce>
              <ContentWrapper>
                <SvgIcon src={'ventilation.svg'} width="100%" height="100%" />
              </ContentWrapper>
            </Slide>
          </Col>
          <Col lg={6} md={6} sm={24} xs={24}>
            <ContentWrapper>
              {list && list.length > 0 && (
                <StyledUl>
                  {list.map((item, index) => (
                    <li key={index} style={{ display: 'flex' }}>
                      {item.number ? (
                        <>
                          ✔{' '}
                          <StyledListPart>
                            <NumberFlow final_number={item.number} />
                            {item.number_unit && (
                              <StyledPNumberUnit
                                style={{ display: 'inline-block', textAlign: 'center' }}
                              >
                                {t(item.number_unit)}
                              </StyledPNumberUnit>
                            )}
                            {t(item.text)}
                          </StyledListPart>
                        </>
                      ) : (
                        <>
                          ✔ <StyledListPart>{t(item.text)}</StyledListPart>
                        </>
                      )}
                    </li>
                  ))}
                </StyledUl>
              )}
            </ContentWrapper>
          </Col>
          <Col lg={8} md={8} sm={24} xs={24}>
            <Slide direction="right" triggerOnce>
              <ContentWrapper>
                <SvgIcon src={'synthese.svg'} width="100%" height="100%" />
              </ContentWrapper>
            </Slide>
          </Col>
        </Row>
      </Container>
    </MiddleBlockSection>
  )
}

export default withTranslation()(InformationBlock)
