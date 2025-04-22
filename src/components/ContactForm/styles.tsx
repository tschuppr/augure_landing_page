import styled from 'styled-components'

export const ContactContainer = styled('div')`
  padding: 4rem 0 4rem;

  @media only screen and (max-width: 1000px) {
    padding: 2rem 0 2rem;
  }
`

export const FormGroup = styled('form')`
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 1000px) {
    max-width: 100%;
    // margin-top: 2rem;
  }
`

export const Span = styled('span')`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  // height: 0.775rem;
  padding: 0.5rem 0.675rem;
  // margin-bottom: 0.25rem;
`

export const ButtonContainer = styled('div')`
  text-align: end;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`
