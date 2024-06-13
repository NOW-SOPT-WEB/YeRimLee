import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
// import { RandomEnd } from "../components/RandomEnd";

export function CountDown({ setStep }) {
  const [time, setTime] = useState(3);
  useEffect(() => {
    if (time === 0) {
      setStep();
      return; // 밑에 실행하지 않고 종료
    }

    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time, setStep]);

  return (
    <Article>
      <Description>{time}</Description>
    </Article>
  );
}

const Article = styled.div`
  margin: 5rem 12rem 0rem 12rem;
  width: 60rem;
  height: 40rem;
  background-color: #ffeae3;
  border-radius: 2%;
`;

const Description = styled.h2`
  padding: 4rem;
  text-decoration: none;
  text-align: center;
`;
