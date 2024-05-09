import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import img1 from "../../public/img/포챠코.png";
import { Link } from "react-router-dom";

function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const submitForm = async () => {
    try {
      const postData = await axios.post("base_url/member/login/posts", {
        userId: userId,
        userPw: userPw,
      });
      //console.log("postData");
    } catch (e) {
      alert("아이디,비밀번호를 입력하세요");
    }
  };

  return (
    <>
      <LoginWrapper>
        <LoginContainer>
          <span>로그인</span>
          <img src={img1} alt="포챠코이미지" width="150rem" />
          <p>아이디</p>
          <div>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <p>비밀번호</p>
          <div>
            <input
              type="text"
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
            />
          </div>
          <button onClick={submitForm}>로그인</button>
          <Link to="/join">
            <button type="button">회원가입</button>
          </Link>
        </LoginContainer>
      </LoginWrapper>
    </>
  );
}

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5dad2;
  font-size: 2rem;
`;

const LoginContainer = styled.div`
  width: 10rem;
`;
