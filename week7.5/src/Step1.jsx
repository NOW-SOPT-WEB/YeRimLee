import styled from "styled-components";

export function Step1({ goBack, setStep }) {
  return (
    <Step1Wrapper>
      <Description>오늘은 어떤 종류가 먹고 싶어?</Description>
      <OptionBox>
        <Option1 onClick={setStep}>
          <br />
          한식
        </Option1>
        <Option2 onClick={setStep}>
          <br />
          중식
        </Option2>
        <Option3 onClick={setStep}>
          <br />
          일식
        </Option3>
        <ButtonBox>
          <BackButton onClick={goBack}>이전으로</BackButton>
          <NextButton onClick={setStep}>다음으로</NextButton>
        </ButtonBox>
      </OptionBox>
    </Step1Wrapper>
  );
}

const Step1Wrapper = styled.div`
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
const Option1 = styled.div`
  margin: 4rem;
  text-align: center;
  width: 10rem;
  height: 10rem;
  border-radius: 8%;
  background-color: #f6f5f2;
  &:hover {
    background: #f3d0d7;
    color: white;
  }
  font-size: 2rem;
`;

const Option2 = styled.div`
  margin: 4rem;
  text-align: center;
  width: 10rem;
  height: 10rem;
  background-color: #f6f5f2;
  border-radius: 8%;
  &:hover {
    background: #f3d0d7;
    color: white;
  }
  font-size: 2rem;
`;

const Option3 = styled.div`
  margin: 4rem;
  text-align: center;
  width: 10rem;
  height: 10rem;
  background-color: #f6f5f2;
  border-radius: 8%;
  &:hover {
    background: #f3d0d7;
    color: white;
  }
  font-size: 2rem;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const BackButton = styled.button`
  text-align: center;
  margin: 5rem;
  width: 4rem;
  height: 1rem;
  background-color: #e1afd1;
  border: none;
  &:hover {
    background: #f3d0d7;
    color: white;
  }
`;

const NextButton = styled.button`
  text-align: center;
  margin: 5rem;
  width: 4rem;
  height: 1rem;
  background-color: #e1afd1;
  border: none;
  &:hover {
    background: #f3d0d7;
    color: white;
  }
`;
