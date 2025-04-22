import styled from 'styled-components'
import { Carousel } from 'antd'

export const TestimonyBlockSection = styled('section')`
  // background: #e2f1f3;
  //   background: #FFF0EB;

  width: 100%;
  position: relative;
  padding: 5rem 0;
  text-align: center;
  display: flex;
  justify-content: center;

  //   @media screen and (max-width: 1024px) {
  //     padding: 5.5rem 0 3rem;
  //   }
`

export const Title = styled('h6')`
  font-family: 'Figtree', serif;
  font-weight: 600;
  color: #2e186a;
  font-size: 56px;
  line-height: 1.18;

  @media only screen and (max-width: 890px) {
    font-size: 47px;
  }

  @media only screen and (max-width: 414px) {
    font-size: 32px;
  }
`

export const ContentWrapper = styled('div')`
  max-width: 100%;

  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
`

export const CardWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`

export const MinPara = styled('p')`
  font-size: 24px;
  line-height: 1rem;
  padding: 0.5rem 0;
  color: #5271ff;
  font-family: 'Figtree', sans-serif;
  font-weight: 300;
`

export const Name = styled('p')`
  font-size: 16px;
  color: rgb(0, 0, 0);
`
export const CarouselWrapper = styled(Carousel)`
  slidesToShow: 2;
  // .ant-carousel .slick-dots ul {
  //   height: 30px;
  // }
  slidesToShow={3}
  .slick-dots li button {
    // height: 30px;
    background-color: #2e186a;
  }
  .slick-dots li::after {
    // height: 30px;
    background-color: #2e186a;
  }
  @media only screen and (max-width: 768px) {
    slidesToShow: 1
  }
`
