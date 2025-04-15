import styled from 'styled-components'

export const StyledContainer = styled('div')<{
  border?: boolean
}>`
  position: relative;
  width: 100%;
  max-width: 1700px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 120px;
  border-top: ${(p) => (p.border ? '1px solid #CDD1D4' : '')};

  @media only screen and (max-width: 1378px) {
    max-width: calc(100% - 135px);
    padding: 0 50px;
  }

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 90px);
    padding: 0 40px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 45px);
    padding: 0 25px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 10px;
  }
`
