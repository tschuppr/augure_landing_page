import { Row, Col } from 'antd'
import { lazy } from 'react'
import { Slide } from 'react-awesome-reveal'
import { withTranslation } from 'react-i18next'
import { TFunction } from 'i18next'
import { SvgIcon } from '../../common/SvgIcon'
import { NumberFlow } from '../../common/NumberFlow'
// import AuditInfoSvg from '../../common/SvgAuditInfo'

import { MiddleBlockSection, ContentWrapper } from './styles'
import { Title } from '../Footer/styles'

const Container = lazy(() => import('../../common/Container'))

interface InformationBlockProps {
  id: string
  t: TFunction
}

const InformationBlock = ({ t, id }: InformationBlockProps) => {
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
          <Col lg={8} md={8} sm={8} xs={24}>
            <Slide direction="left" triggerOnce>
              <ContentWrapper>
                <SvgIcon src={'ventilation.svg'} width="100%" height="100%" />
              </ContentWrapper>
            </Slide>
          </Col>
          <Col lg={6} md={6} sm={6} xs={24}>
            <ContentWrapper>
              <Title>Votre Remise</Title>
              <NumberFlow />
            </ContentWrapper>
          </Col>
          <Col lg={8} md={8} sm={8} xs={24}>
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
