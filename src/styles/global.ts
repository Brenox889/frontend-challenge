import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
  :root {
    --white: #fff;
    --black: #000;
    --gray: #868686;
    --green: #4F9419;
    --green-dark: #006C18;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--white);
    
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  button, input {
    cursor: pointer;
  }
  `