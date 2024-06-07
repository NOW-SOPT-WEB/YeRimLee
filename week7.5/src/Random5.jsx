import styled from "styled-components";
import { useEffect } from "react";

export function Random5({ setStep }) {
  const [time, setTime] = useEffect(3);
  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);

  return (
    <Article>
      <Description>원하는 추천방식을 골라줘!</Description>
      <OptionBox>
        <Ment>랜덤 추천!</Ment>

        <ButtonBox>
          <StartBtn onClick={setStep}>시작하기</StartBtn>
        </ButtonBox>
      </OptionBox>
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

const OptionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Ment = styled.div`
  margin: 4rem;
  text-align: center;
  width: 40rem;
  height: 14rem;
  border-radius: 8%;
  background-color: #f6f5f2;
  font-size: 2rem;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const StartBtn = styled.button`
  text-align: center;
  margin: 5rem;
  width: 4rem;
  height: 1rem;
  background-color: #e1afd1;
  border: none;
`;
