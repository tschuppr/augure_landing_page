import styled from "styled-components";

export const TestimonyBlockSection = styled("section")`
  background: #E2F1F3;
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
`;

export const Title = styled("h6")`
    font-family: 'Figtree', serif;
    font-weight: 600;
    color:#2e186a;
    font-size: 56px;
    line-height: 1.18;

    @media only screen and (max-width: 890px) {
        font-size: 47px;
    }
    
    @media only screen and (max-width: 414px) {
        font-size: 32px;
    }
`


export const ContentWrapper = styled("div")`
  max-width: 100%;

  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;


export const CardWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

`;

export const MinPara = styled("p")`
  font-size: 24px;
  line-height: 1rem;
  padding: 0.5rem 0;
  color:#5271FF;
  font-family: "Figtree", sans-serif;
  font-weight: 300;
`;

export const Name = styled("p")`
  font-size: 16px;
  color:rgb(0, 0, 0);
`;