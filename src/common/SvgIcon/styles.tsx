import styled from 'styled-components'

export const StyledImg = styled('img')<{
  width?: string
  height?: string
}>`
  height: ${(p) => p.height || '100%'};
  width: ${(p) => p.width || '100%'};

  max-width: 500px;
  margin: 0 auto;
  display: block;

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 45px);
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 22px);
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
  }
`
