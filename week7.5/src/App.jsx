import styled from "styled-components";
import { Start } from "./Start";
import { Step0 } from "./Step0";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { End } from "./End";
import { useState } from "react";
import { Landom5 } from "./Random5";

function App() {
  const [step, setStep] = useState(-1);

  return (
    <>
      <Header>
        <Title>🧃야리무의 메뉴추천🧃</Title>
        <Reset>처음으로</Reset>
      </Header>
      {step === -1 && (
        <Start setStep={() => setStep(0)} goRandom={() => setStep(5)} />
      )}
      {step === 0 && <Step0 setStep={() => setStep(1)} />}
      {step === 1 && <Step1 setStep={() => setStep(2)} />}
      {step === 2 && <Step2 setStep={() => setStep(3)} />}
      {step === 3 && <Step3 setStep={() => setStep(4)} />}
      {step === 4 && <End />}
      {step === 5 && <Landom5 />}
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
