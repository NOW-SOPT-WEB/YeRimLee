import styled from "styled-components";

export function End({ goStart }) {
  return (
    <Article>
      <Description>오늘의 추천음식은 바로!!</Description>
      <OptionBox>
        <Menu>메뉴사진</Menu>
        <ButtonBox>
          <ReturnBtn onClick={goStart}>다시하기</ReturnBtn>
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
const Menu = styled.div`
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

const ReturnBtn = styled.button`
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
