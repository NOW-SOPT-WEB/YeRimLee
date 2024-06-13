import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import img1 from "../../public/img/포챠코.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [uniqueId, setUniqueId] = useState("");

  const navigate = useNavigate();

  const handleClickLogin = async () => {
    try {
      const postData = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/member/login`,
        {
          authenticationId: userId,
          password: userPw,
        }
      );
      const memberId = postData.headers.location;
      navigate(`/my/${memberId}`);

      setUniqueId(uniqueId);
      // console.log(postData);
      // console.log(memberId);
    } catch (error) {
      alert("아이디,비밀번호를 입력하세요");
      console.log(error);
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

          <button type="button" onClick={handleClickLogin}>
            로그인
          </button>

          <button type="button" onClick={() => navigate("/join")}>
            회원가입
          </button>
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
