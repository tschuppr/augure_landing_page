import styled from 'styled-components'

export const MiddleBlockSection = styled('section')`
  position: relative;
  padding: 7.5rem 0 4rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    padding: 4rem 0 4rem;
  }
`

export const Content = styled('p')`
  padding: 0.75rem 0 0.75rem;
`

export const ContentWrapper = styled('div')`
  max-width: 700px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`

export const StyledSVG = styled('svg')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointerevents: none;
  // overflow : visible;
`
