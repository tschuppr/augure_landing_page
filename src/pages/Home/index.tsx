import { lazy } from 'react'
import IntroContent from '../../content/IntroContent.json'
import MiddleBlockContent from '../../content/MiddleBlockContent.json'
import AboutContent from '../../content/AboutContent.json'
import MissionContent from '../../content/MissionContent.json'
import ProductContent from '../../content/ProductContent.json'
import ContactContent from '../../content/ContactContent.json'

const Contact = lazy(() => import('../../components/ContactForm'))
const MiddleBlock = lazy(() => import('../../components/MiddleBlock'))
// const Container = lazy(() => import('../../common/Container'))
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'))
const ContentBlock = lazy(() => import('../../components/ContentBlock'))
const InformationBlock = lazy(() => import('../../components/InformationBlock'))

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <MiddleBlock
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        id="intro"
      />
      <ContentBlock
        direction="left"
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        section={MiddleBlockContent.section}
        icon="documentmieux.svg"
        id="after"
      />
      <ContentBlock
        direction="right"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="file-searchmieux.svg"
        id="about"
      />
      <ContentBlock
        direction="left"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="spreadsheet.svg"
        id="mission"
      />
      <InformationBlock id="information" />
      <Contact title={ContactContent.title} content={ContactContent.text} id="contact" />
    </div>
  )
}

export default Home
