import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios, { AxiosError } from "axios";

function My() {
  const { memberId } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const [previousPassword, setPreviousPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordVerification, setNewPasswordVerification] = useState("");

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const userInfoData = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/member/info`,
          { headers: { memberId: memberId } }
        );
        console.log(userInfoData);

        setUserInfo(userInfoData);
        console.log({ userInfo });
      } catch (e) {
        console.error(e);
      }
    };
    dataFetch();
  }, [memberId]);

  const handleSubmit = async () => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_APP_BASE_URL}/member/password`,
        {
          previousPassword: previousPassword,
          newPassword: newPassword,
          newPasswordVerification: newPasswordVerification,
        },
        {
          headers: { memberId: memberId },
        }
      );
      console.log(response); //알림창이랑 페이지 이동 구현해야함
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.message);
      }
    }
  };

  return (
    <>
      <MyWrapper>
        <MyContainer>
          {/* <UserText>id:{userInfo.data.data.authenticationId}</UserText>

          <UserText>닉네임:{userInfo.data.data.nickname}</UserText>

          <UserText>전화번호:{userInfo.data.data.phone}</UserText> */}
          <details>
            <summary>비밀번호 변경</summary>
            <ul>
              <li>현재 비밀번호</li>
              <input
                type="text"
                value={previousPassword}
                onChange={(e) => setPreviousPassword(e.target.value)}
              />
              <li>새 비밀번호</li>
              <input
                type="text"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <li>비밀번호 확인</li>
              <input
                type="text"
                value={newPasswordVerification}
                onChange={(e) => setNewPasswordVerification(e.target.value)}
              />
              <button type="button" onClick={handleSubmit}>
                비밀번호 변경
              </button>
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
