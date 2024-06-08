import styled from "styled-components";
import { menuArr } from "./MenuList";
import { useState } from "react";

//사진 랜덤 첨부기능 추가하기
export function RandomEnd({ goStart }) {
  //이미지 랜덤 관련 상태
  const [randomPic, setRandomPic] = useState();

  //기존 랜덤 이미지 로직
  // const randomIndex = Math.floor(Math.random() * menuArr.length);
  // console.log(randomIndex);

  // const menuImg = menuArr[randomIndex];
  return (
    <>
      <Description>오늘의 추천음식은 바로!!</Description>
      <OptionBox>
        <Image src={menuImg} />
        <ButtonBox>
          <ReturnBtn onClick={goStart}>다시하기</ReturnBtn>
        </ButtonBox>
      </OptionBox>
    </>
  );
}

const Description = styled.p`
  padding: 2rem;
  text-decoration: none;
  text-align: center;
`;

const OptionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Image = styled.div`
  margin: 3.5rem;
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
  margin: 0.6rem;
  width: 4rem;
  height: 1rem;
  background-color: #e1afd1;
  border: none;
  &:hover {
    background: #f3d0d7;
    color: white;
  }
`;
