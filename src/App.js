import React from "react";
import styled from "styled-components";

import PlayingField from "./pages/playing-field.component";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container className="App">
      <PlayingField />
    </Container>
  );
}

export default App;
