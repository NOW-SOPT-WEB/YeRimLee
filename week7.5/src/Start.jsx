import styled from "styled-components";

export function Start() {
  return (
    <Article>
      <Description>원하는 추천 방식을 골라줘!</Description>
      <OptionBox>
        <Option1>
          <br />
          <br />
          취향대로 추천
        </Option1>
        <Option2>
          <br />
          <br />
          랜덤 추천
        </Option2>
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
