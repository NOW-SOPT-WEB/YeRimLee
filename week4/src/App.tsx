import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function App() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const submitForm = async () => {
    try {
      //const postData = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          userId: userId,
          userPw: userPw,
        }
      );
      console.log("postData");
    } catch (e) {
      alert("아이디,비밀번호를 입력하세요");
    }
  };

  return (
    <>
      <AppWrapper>
        <AppContainer>
          <span>Sign-in</span>
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
          <button onClick={submitForm}>Next</button>
        </AppContainer>
      </AppWrapper>
    </>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffb1b1;
  font-size: 2rem;
`;

const AppContainer = styled.div`
  width: 10rem;
`;
