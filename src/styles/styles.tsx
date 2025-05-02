import { createGlobalStyle } from 'styled-components'

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Figtree";
        font-weight: 300 900;
        src: url("/fonts/Figtree-VariableFont_wght.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Figtree italic";
        font-weight: 300 900;
        src: url("/fonts/Figtree-Italic-VariableFont_wght.ttf") format("truetype");
        font-style: italic;
    }



    
    body,
    html,
    a {
        font-family: 'Figtree', sans-serif;
        font-weight : 400;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #5271FF;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
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
    }
        
    li,
    p {
        color: #5271FF;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`
