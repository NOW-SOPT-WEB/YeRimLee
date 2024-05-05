import img6 from "../public/img/6.png";
import Header from "./Header";
import styled from "styled-components";
import CARD_LIST from "./assets/card";
import { useState } from "react";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5rem;
  width: 60rem;
`;
const PairCard = styled.div`
  position: relative;
  width: 10rem;
  height: 16rem;
  padding: 0.5rem;
`;
const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;

  border-radius: 8%;
`;

const CoverImg = styled(CardImg)`
  position: absolute;
  left: 0;
`;
//카드 랜덤으로 섞기
CARD_LIST.sort(() => 0.5 - Math.random());

const CardGame = () => {
  //카드상태
  const [isOpen, setOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const OpenCard = (index) => {
    //isOpen[index]를 활용하자..!
    //console.log(index);
    //console.log("온클릭 함수 작동");
    const arr = [...isOpen];
    //console.log(arr);
    arr[index] = true;
    console.log(arr);
    setOpen(arr);

    //console.log(arr);
  };

  return (
    <div>
      <Header />
      <CardWrapper>
        {CARD_LIST.map((item, index) => {
          return (
            <PairCard key={index} onClick={() => OpenCard(index)}>
              <CardImg className="showCard_img" src={item.imgSrc} />
              {isOpen[index] ? (
                <></>
              ) : (
                <CoverImg className="closed_card" src={img6} />
              )}
            </PairCard>
          );
        })}
      </CardWrapper>
    </div>
  );
};
export default CardGame;
