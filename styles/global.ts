import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --tints_primary_100: #1F184D;
    --tints_secondary_100: #439B3B;
    --tints_green_100: #2AB773;
    --tints_red_100: #FF4C4C;
    --tints_yellow_100: #F3B359;

    --neutrals_light_100: #FFFFFF;
    --neutrals_light_200: #F8F8F8;
    --neutrals_gray_100: #C9C9C9;
    --neutrals_gray_200: #77808B;
    --neutrals_gray_300: #8E8E8E;
    --neutrals_dark_100: #000000;
    --neutrals_dark_200: #1C1C1C;


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
    color: var(--neutrals_gray_200);
    background: var(--neutrals_light_100);
  }
  main{
    position: relative;
    padding-bottom: 10rem;
  }
`;

export default GlobalStyles;
