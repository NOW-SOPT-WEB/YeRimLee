import img6 from "../public/img/6.png";
import Header from "./Header";
import styled from "styled-components";
import CARD_IMG_LIST from "./assets/card";
import { useState } from "react";

//카드 랜덤으로 섞기
const CARD_LIST = [...CARD_IMG_LIST, ...CARD_IMG_LIST];
CARD_LIST.sort(() => 0.5 - Math.random());

const CardGame = () => {
  //카드상태
  const [isOpen, setOpen] = useState(Array(10).fill(false));

  const OpenCard = (id) => {
    //isOpen[id]를 활용하자..!
    //console.log(id);
    //console.log("온클릭 함수 작동");
    const arr = [...isOpen];
    //console.log(arr);
    arr[id] = true;
    console.log(arr);
    setOpen(arr);

    //console.log(arr);
  };

  return (
    <div>
      <Header />
      <CardWrapper>
        {CARD_LIST.map((item, id) => {
          return (
            <PairCard key={id} onClick={() => OpenCard(id)}>
              <CardImg className="showCard_img" src={item.imgSrc} />
              {!isOpen[id] && <CoverImg className="closed_card" src={img6} />}
            </PairCard>
          );
        })}
      </CardWrapper>
    </div>
  );
};
export default CardGame;

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
