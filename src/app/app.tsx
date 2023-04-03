import styled from '@emotion/styled';

import Card from './components/Card';

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
