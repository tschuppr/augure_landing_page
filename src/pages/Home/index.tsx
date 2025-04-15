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

const Home = () => {
  return (
    <div>
      {/* <svg          style={{
          position: "absolute",
          top: 0,
         left: 0,
         width: "100%",
         height: "100%",
         pointerEvents: "none"
       }}> */}
      {/* <polygon points="0,0 0,500 500,500 500,0" color="dark"/> */}
      {/* <circle  cx={0} cy={0}  r={200}/> */}
      {/* </svg> */}
      <ScrollToTop />
      <MiddleBlock
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        id="intro"
      />
      {/* <svg  style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none"
        }}>
        <polygon points="0,0 0,500 500,500 500,0" color="dark"/>
        <circle  cx={1300} cy={500}  r={200} color="red"/>
      </svg> */}
      <ContentBlock
        direction="right"
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        icon="developer.svg"
        id="after"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact title={ContactContent.title} content={ContactContent.text} id="contact" />
    </div>
  )
}

export default Home
