import styled from 'styled-components'

export const MiddleBlockSection = styled('section')`
  position: relative;
  padding: 7.5rem 0 7rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    padding: 4rem 0 4rem;
  }
`

export const Content = styled('p')`
  padding: 0.75rem 0 0.75rem;
  font-weight: 500;
`

export const ContentWrapper = styled('div')`
  max-width: 900px;

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
export const ListContainer = styled('ul')`
  list-style-type: none;
  padding: 0;
`

export const ListItem = styled('li')<{ alignRight: string }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.alignRight ? 'flex-end' : 'flex-start')};
  // justify-content: flex-start;
`
export const ListContent = styled('p')<{ font_weight?: string; color?: string }>`
  max-width: 500px;
  text-align: left;
  margin: 0;
  float: left;
  // font-size: 28px;
  color: ${(p) => p.color};
  text-justify: inter-word;
  text-align: justify;
  font-weight: ${(p) => p.font_weight};
  font-family: 'Figtree', sans-serif;
`

export const ListContentWrapper = styled('div')`
  max-width: 600px;
  margin: 1rem 0 1rem 0;
  @media only screen and (max-width: 400px) {
    max-width: 100%;
  }
`
