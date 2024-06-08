import styled from "styled-components";
import { Start } from "./assets/components/Start";
import { Step0 } from "./assets/components/Step0";
import { Step1 } from "./assets/components/Step1";
import { Step2 } from "./assets/components/Step2";
import { Step3 } from "./assets/components/Step3";
import { End } from "./assets/components/End";
import { useState } from "react";
import { Random5 } from "./assets/components/Random5";
import { CountDown } from "./assets/utils/CountDown";
// import { RandomEnd } from "./RandomEnd";

function App() {
  const [step, setStep] = useState(-1);

  return (
    <>
      <Header>
        <Title>🧃야리무의 메뉴추천🧃</Title>
        <Reset onClick={() => setStep(-1)}>처음으로</Reset>
      </Header>
      {step === -1 && (
        <Start setStep={() => setStep(0)} goRandom={() => setStep(5)} />
      )}
      {step === 0 && <Step0 setStep={() => setStep(1)} />}
      {step === 1 && (
        <Step1 setStep={() => setStep(2)} goBack={() => setStep(-1)} />
      )}
      {step === 2 && (
        <Step2 setStep={() => setStep(3)} goBack={() => setStep(1)} />
      )}
      {step === 3 && (
        <Step3 setStep={() => setStep(4)} goBack={() => setStep(2)} />
      )}
      {step === 4 && <End goStart={() => setStep(-1)} />}
      {step === 5 && <Random5 setStep={() => setStep(6)} />}
      {step === 6 && <CountDown setStep={() => setStep(7)} />}
      {/* {step === 7 && (
        <RandomEnd setStep={() => setStep(8)} goStart={() => setStep(-1)} />
      )} */}
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
