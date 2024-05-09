import React from "react";
import { Link } from "react-router-dom";
import img2 from "../../public/img/피짱즈.png";
import styled from "styled-components";

const Main = () => {
  return (
    <MainWrapper>
      <MainContainer>
        <img src={img2} alt="피짱즈이미지" width="200rem" />
        <button type="button">내정보</button>
        <Link to="/join">
          <button type="button">회원가입</button>
        </Link>
      </MainContainer>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5dad2;
  font-size: 2rem;
`;

const MainContainer = styled.div`
  width: 10rem;
`;
