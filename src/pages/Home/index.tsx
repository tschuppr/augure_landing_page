import { lazy } from 'react'
import IntroContent from '../../content/IntroContent.json'
import firstParagraph from '../../content/firstParagraph.json'
import secondParagraph from '../../content/secondParagraph.json'
import thirdParagraph from '../../content/thirdParagraph.json'
import fourthParagraph from '../../content/fourthParagraph.json'
import ContactContent from '../../content/ContactContent.json'
import information from '../../content/information.json'
import { info } from 'console'

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
        direction="right"
        title={firstParagraph.title}
        content={firstParagraph.text}
        // section={firstParagraph.section}
        sub_content={firstParagraph.sub_content}
        icon="documentmieux.svg"
        id="after"
      />
      <ContentBlock
        direction="left"
        title={secondParagraph.title}
        content={secondParagraph.text}
        // section={AboutContent.section}
        icon="file-searchmieux.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={thirdParagraph.title}
        content={thirdParagraph.text}
        list={thirdParagraph.list}
        icon="spreadsheet.svg"
        id="mission"
      />
      <MiddleBlock
        title={fourthParagraph.title}
        content={fourthParagraph.text}
        list={fourthParagraph.list}
        id="product"
      />
      <InformationBlock id="information" list={information.list} />
      <Contact title={ContactContent.title} content={ContactContent.text} id="contact" />
    </div>
  )
}

export default Home
