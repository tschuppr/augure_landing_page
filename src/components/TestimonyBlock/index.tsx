import { Row, Col, Carousel, Card } from 'antd'
import { withTranslation } from 'react-i18next'
import { TFunction } from 'i18next'
import { Slide } from 'react-awesome-reveal'
import {
  TestimonyBlockSection,
  ContentWrapper,
  CardWrapper,
  MinPara,
  Name,
  Title,
  CarouselWrapper
} from './styles'
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
        <Slide direction="up" triggerOnce>
          <Row justify="center" align="middle" id={id}>
            <ContentWrapper>
              <Title>{t(title)}</Title>
              <CarouselWrapper
                pauseOnDotsHover={true}
                slidesToShow={3}
                autoplay={true}
                autoplaySpeed={10000}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1,
                      infinite: true,
                      dots: true
                    }
                  }
                ]}
              >
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
                        <Col key={id} lg={18} md={18} sm={18} xs={18}>
                          <MinPara>{t(item.text)}</MinPara>
                          <Name>{t(item.name)}</Name>
                        </Col>
                      )
                    }
                  )}
                {/* <div>
                  <p>1</p>
                </div>
                <div>
                  <p>2</p>
                </div>
                <div>
                  <p>3</p>
                </div>
                <div>
                  <p>4</p>
                </div>
                <div>
                  <p>5</p>
                </div>
                <div>
                  <p>6</p>
                </div>
                <div>
                  <p>7</p>
                </div> */}
              </CarouselWrapper>
              {
                // <CardWrapper>
                //   <Row justify="space-evenly" align="middle">
                //     {typeof elements === 'object' &&
                //       elements.map(
                //         (
                //           item: {
                //             name: string
                //             text: string
                //           },
                //           id: number
                //         ) => {
                //           return (
                //             <Col key={id} lg={10} md={10} sm={10} xs={10}>
                //               <MinPara>{t(item.text)}</MinPara>
                //               <Name>{t(item.name)}</Name>
                //             </Col>
                //           )
                //         }
                //       )}
                //   </Row>
                // </CardWrapper>
              }
            </ContentWrapper>
          </Row>
        </Slide>
      </Container>
    </TestimonyBlockSection>
  )
}

export default withTranslation()(TestimonyBlock)
