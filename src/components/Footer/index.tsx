import { Row, Col } from 'antd'
import { withTranslation } from 'react-i18next'
import { TFunction } from 'i18next'
import { SvgIcon } from '../../common/SvgIcon'
import Container from '../../common/Container'
import { Link } from 'react-router-dom'

import i18n from 'i18next'
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  // Empty,
  // FooterContainer,
  Language
  // Label,
  // LanguageSwitch,
  // LanguageSwitchContainer
} from './styles'

// interface SocialLinkProps {
//   href: string
//   src: string
// }

const Footer = ({ t }: { t: TFunction }) => {
  // const handleChange = (language: string) => {
  //   i18n.changeLanguage(language)
  // }
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
  // const SocialLink = ({ href, src }: SocialLinkProps) => {
  //   return (
  //     <a href={href} target="_blank" rel="noopener noreferrer" key={src} aria-label={src}>
  //       <SvgIcon src={src} width="25px" height="25px" />
  //     </a>
  //   )
  // }

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t('Contact')}</Language>
              <Large onClick={() => scrollTo('contact')}>{t('Tell us everything')}</Large>
              <Para>{t(`Vous avez une question? N'hésitez pas à nous contacter`)}</Para>
              <a href="mailto:contact@augure.io">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            {/* <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/">{t("Application Security")}</Large>
              <Large to="/">{t("Software Principles")}</Large>
            </Col> */}
            {/* <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large to="/">{t("Support Center")}</Large>
              <Large to="/">{t("Customer Support")}</Large>
            </Col> */}
            {/* <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t('Company')}</Title>
              <Large to="/">{t('About')}</Large>
              <Large to="/">{t('Blog')}</Large>
              <Large to="/">{t('Press')}</Large>
              <Large to="/">{t('Careers & Culture')}</Large>
            </Col> */}
          </Row>
          {/* <Row justify="space-between"> */}
          {/* <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>Rancho Santa Margarita</Para>
              <Para>2131 Elk Street</Para>
              <Para>California</Para>
            </Col> */}
          {/* <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Large to="/">{t("About")}</Large>
              <Large to="/">{t("Blog")}</Large>
              <Large to="/">{t("Press")}</Large>
              <Large to="/">{t("Careers & Culture")}</Large>
            </Col> */}
          {/* <Col lg={6} md={6} sm={12} xs={12}>
            <Label htmlFor="select-lang">{t('Language')}</Label>
            <LanguageSwitchContainer>
              <LanguageSwitch onClick={() => handleChange('en')}>
                <SvgIcon src="united-states.svg" aria-label="homepage" width="30px" height="30px" />
              </LanguageSwitch>
              <LanguageSwitch onClick={() => handleChange('es')}>
                <SvgIcon src="spain.svg" aria-label="homepage" width="30px" height="30px" />
              </LanguageSwitch>
            </LanguageSwitchContainer>
          </Col> */}
          {/* </Row> */}
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row justify="space-between" align="middle" style={{ paddingTop: '3rem' }}>
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon src="logo.svg" aria-label="homepage" width="201 px" height="50 px" />
              </LogoContainer>
            </NavLink>
            <Link to="https://www.linkedin.com/company/augure-io/">
              <LogoContainer>
                <SvgIcon src="linkedin.svg" aria-label="linkedin" width="40 px" height="40 px" />
              </LogoContainer>
            </Link>
          </Row>
        </Container>
      </Extra>
    </>
  )
}

export default withTranslation()(Footer)
