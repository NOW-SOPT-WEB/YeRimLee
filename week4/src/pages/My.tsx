import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function My() {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const userInfoData = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/member/info`,
          { headers: { memberId: 865 } }
        );
        console.log(userInfoData);

        setUserInfo(userInfoData);
        console.log({ userInfo });
      } catch (e) {
        console.error(e);
      }
    };
    dataFetch();
  }, []);
  return (
    <>
      <MyWrapper>
        <MyContainer>
          <UserText>id:{userInfo.data.data.authenticationId}</UserText>

          <UserText>닉네임:{userInfo.data.data.nickname}</UserText>

          <UserText>전화번호:{userInfo.data.data.phone}</UserText>
          <details>
            <summary>비밀번호 변경</summary>
            <ul>
              <li>현재 비밀번호</li>
              <li>현재 비밀번호</li>
              <li>현재 비밀번호</li>
            </ul>
          </details>
        </MyContainer>
      </MyWrapper>
    </>
  );
}

export default My;

const MyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5dad2;
  font-size: 2rem;
`;

const MyContainer = styled.div`
  width: 45rem;
`;

const UserText = styled.p`
  font-size: 4rem;
`;

const Toggle = styled.div`
  width: 45rem;
`;
