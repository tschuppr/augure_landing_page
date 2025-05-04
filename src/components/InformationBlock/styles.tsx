import styled from 'styled-components'

export const MiddleBlockSection = styled('section')`
  position: relative;
  padding: 4rem 0 4rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    padding: 4rem 0 4rem;
  }
`
export const ContentWrapper = styled('div')`
  @media screen and (max-width: 1000px) {
    padding: 0 0 2rem;
  }
`
export const StyledPNumberUnit = styled('p')`
  margin: 0 0.7rem 0 0;
  color: #2e186a;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: 'Figtree italic', sans-serif;
`
