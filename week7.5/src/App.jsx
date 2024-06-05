import styled from "styled-components";
import { Start } from "./Start";
import { Step0 } from "./Step0";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { End } from "./End";

function App() {
  return (
    <>
      <Header>
        <Title>🧃야리무의 메뉴추천🧃</Title>
        <Reset>처음으로</Reset>
      </Header>
      <Start />
      <Step0 />
      <Step1 />
      <Step2 />
      <Step3 />
      <End />
    </>
  );
}

export default App;
const Header = styled.div`
  height: 7rem;
  display: flex;
  justify-content: center;
  background-color: #ffcbcb;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

const Reset = styled.button`
  text-align: center;
  margin: 5rem;
  width: 4rem;
  height: 1rem;
  background-color: #e1afd1;
  border: none;
`;
