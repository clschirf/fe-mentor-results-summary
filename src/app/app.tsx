import styled from '@emotion/styled';
import { injectGlobal } from '@emotion/css';

import Card from './components/Card';

/*
    @font-face {
        font-family: "Hanken Grotesk";
        src: local('../assets/fonts/static/HankenGrotesk-Medium.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Hanken Grotesk";
        src: local('../assets/fonts/static/HankenGrotesk-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: "Hanken Grotesk";
        src: local('../assets/fonts/static/HankenGrotesk-ExtraBold.ttf') format('truetype');
        font-weight: 800;
        font-style: normal;
    }
*/

injectGlobal`
    * {
        box-sizing: border-box;
        font-family: "Hanken Grotesk";
    }

    html,
    body {
        width: 100%;
        height: 100%;
        min-height: 100%;
        padding: 0;
        margin: 0;
        font-size: 18px;
    }
`;

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export function App() {
  return (
    <StyledApp>
      <Card />
    </StyledApp>
  );
}

export default App;
