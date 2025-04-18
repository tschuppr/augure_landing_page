import { Row } from 'antd'
import styled from 'styled-components'

export const ContentSection = styled('section')`
  position: relative;
  padding: 4rem 0 4rem;

  @media only screen and (max-width: 1024px) {
    // max-width: calc(100% - 400px);
    padding: 2rem 0 2rem;
  }
  // @media only screen and (max-width: 768px) {
  //   max-width: calc(100% - 100px);
  //   padding: 2rem 0 2rem;
  // }
  // @media only screen and (max-width: 414px) {
  //   max-width: calc(100% - 100px);
  //   padding: 2rem 0 2rem;
  // }
`

export const Content = styled('p')`
  margin: 1.5rem 0 2rem 0;
  text-align: justify;
  text-justify: inter-word;
`

export const StyledRow = styled(Row)<{ direction: 'left' | 'right' }>`
  flex-direction: ${({ direction }: { direction: 'left' | 'right' }) =>
    direction === 'left' ? 'row' : 'row-reverse'};
`

export const ContentWrapper = styled('div')`
  position: relative;
  max-width: 540px;
  justify-content: left;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`

export const ServiceWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`

export const MinTitle = styled('h6')`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: 'Figtree', sans-serif;
  font-weight: 400;
`

export const MinPara = styled('p')`
  font-size: 13px;
`

export const ButtonWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`

export const StyledSVG = styled('svg')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointerevents: none;
`
