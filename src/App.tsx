import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Card from "./components/Card";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Card></Card>
    </>
  );
}

export default App;
