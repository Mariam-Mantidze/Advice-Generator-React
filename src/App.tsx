import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.ts";
import { useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

interface IAdviceTypes {
  slip: {
    id: number;
    advice: string;
  };
}

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Card />
    </>
  );
}

export default App;
