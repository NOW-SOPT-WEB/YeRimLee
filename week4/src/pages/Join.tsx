import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

function Join() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userNickName, setNickName] = useState("");
  const [userPhoneNumber, setPhoneNumber] = useState("");
  const submitForm = async () => {
    try {
      const postJoinData = await axios.post("base_url/member/join/posts", {
        userId: userId,
        userPw: userPw,
        userNickName: userNickName,
        userPhoneNumber: userPhoneNumber,
      });
      //console.log("postJoinData");
    } catch (e) {
      alert("어허이~!");
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
          </div>
          <Link to="/login">
            <button type="button" onClick={submitForm}>
              회원가입
            </button>
          </Link>
          <button onClick={submitForm}>뒤로가기</button>
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
