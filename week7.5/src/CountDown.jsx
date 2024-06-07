import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { RandomEnd } from "./RandomEnd";

export function CountDown() {
  const [time, setTime] = useState(3);
  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);

  return (
    <Article>
      <Description>{time ? time : <RandomEnd />}</Description>
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
