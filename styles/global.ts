import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --tints_primary_100: #d51517;
    --tints_secondary_100: #d51517;
    --tints_green_100: #2AB773;
    --tints_red_100: #FF4C4C;
    --tints_yellow_100: #F3B359;

    --neutrals_light_100: #FFFFFF;
    --neutrals_light_200: #EFEFEF;
    --neutrals_gray_100: #AAAAAA;
    --neutrals_dark_100: #1C1C1C;
    --neutrals_dark_200: #000000;


    --font_primary: "Raleway", sans-serif;
    font-size: 62.5% !important;
  };

  ::selection {
    background: var(--neutrals_light_200);
    color: var(--neutrals_dark_100);
  };

  ::-webkit-scrollbar {
    width: 8px;
  };
  ::-webkit-scrollbar-track {
    background: var(--neutrals_light_200);
  };
  ::-webkit-scrollbar-thumb {
    background: var(--neutrals_dark_100);
    border-radius: 2px;
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    color: var(--neutrals_light_100);
    background: var(--neutrals_dark_100);
  }
  main{
    position: relative;
    padding-bottom: 10rem;
  }
`;

export default GlobalStyles;
