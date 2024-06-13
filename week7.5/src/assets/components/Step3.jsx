import styled from "styled-components";

export function Step3({ setStep, goBack, setSoup }) {
  //선택값 저장

  const getSoup = (e) => {
    setSoup(e);
    console.log(e);
  };
  return (
    <Article>
      <Description>마지막으로 골라줘!</Description>
      <OptionBox>
        <Option1
          onClick={() => {
            getSoup("국물0");
            setStep(4);
          }}
        >
          <br />
          <br />
          국물0
        </Option1>
        <Option2
          onClick={() => {
            getSoup("국물X");
            setStep(4);
          }}
        >
          <br />
          <br />
          국물X
        </Option2>
        <ButtonBox>
          <BackButton onClick={goBack}>이전으로</BackButton>
          <NextButton onClick={setStep}>다음으로</NextButton>
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
const Option1 = styled.div`
  margin: 4rem;
  text-align: center;
  width: 14rem;
  height: 14rem;
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
  width: 14rem;
  height: 14rem;
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