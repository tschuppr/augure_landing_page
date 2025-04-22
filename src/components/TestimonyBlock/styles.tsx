import styled from 'styled-components'
import { Carousel } from 'antd'

export const TestimonyBlockSection = styled('section')`
  width: 100%;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 4rem 0 4rem;

  @media only screen and (max-width: 1024px) {
    padding: 2rem 0 2rem;
  }
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
  .slick-dots {
    bottom: initial !important;
  }

  .slick-dots li {
    height: 10px;
  }

  .slick-dots li button {
    background-color: #2e186a;
    height: 10px;
    &:hover {
      color: #fff;
      border: 1px solid rgb(255, 130, 92);
      background-color: rgb(255, 130, 92);
    }
  }
  .slick-dots li::after {
    background-color: #2e186a;
    height: 10px;
  }
`
