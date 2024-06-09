import styled from "styled-components";
import { menuArr } from "../../MenuList";
export function End({ goStart, country, soup, category }) {
  const filteredMenu = menuArr.filter(
    (menu) =>
      menu.country === country &&
      menu.soup === soup &&
      menu.category === category
  );
  // console.log(filteredMenu[0].name);
  // console.log(country);
  // setEndMenu(filteredMenu[0]);
  // const [endMenu, setEndMenu] = useState({});

  return (
    <Article>
      <Description>오늘의 추천음식은 바로!!</Description>
      <OptionBox>
        <Menu src={filteredMenu[0].Image} />
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
const Menu = styled.img`
  margin: 4rem;
  text-align: center;
  width: 40rem;
  height: 20rem;
  border-radius: 8%;
  background-color: #f6f5f2;
  font-size: 2rem;
  object-fit: cover;
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
