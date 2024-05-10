import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Join() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userNickName, setNickName] = useState("");
  const [userPhoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const submitForm = async () => {
    try {
      const postJoinData = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/member/join`,
        {
          authenticationId: userId,
          password: userPw,
          nickname: userNickName,
          phone: userPhoneNumber,
        }
      );
      console.log(postJoinData);
      alert("웰컴!");
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <>
      <JoinWrapper>
        <JoinContainer>
          <span>회원가입 페이지</span>
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
            <p>
              비밀번호가 형식(최소 8글자 이상, 숫자, 문자(a-z, A-Z), 특수문자
              포함)
            </p>
          </div>
          <p>닉네임</p>
          <div>
            <input
              type="text"
              value={userNickName}
              onChange={(e) => setNickName(e.target.value)}
            />
          </div>
          <p>전화번호</p>
          <div>
            <input
              type="string"
              value={userPhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <p>전화번호가 형식(010-****-****)</p>
          </div>
          {/* <Link to="/login"> */}
          <button type="button" onClick={submitForm}>
            회원가입
          </button>
          {/* </Link> */}
          <button onClick={() => navigate(-1)}>뒤로가기</button>
        </JoinContainer>
      </JoinWrapper>
    </>
  );
}

export default Join;

const JoinWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5dad2;
  font-size: 2rem;
`;

const JoinContainer = styled.div`
  width: 20rem;
`;
