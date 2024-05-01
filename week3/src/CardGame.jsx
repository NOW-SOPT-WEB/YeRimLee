import img6 from "../public/img/6.png"
import Header from "./Header";
import styled from "styled-components";
import CARD_LIST from "./assets/card";
import { useState } from 'react'


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
`
const CardImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;

    border-radius: 8%;
`;

const  CoverImg = styled(CardImg)`
    position: absolute;
    left: 0;
`
const MixedCardList = CARD_LIST.sort(() => 0.5 - Math.random());
console.log(MixedCardList);




const CardGame = () => { 
    const [isOpen, setOpen] = useState(false); 

    const OpenCard = () => {
        setOpen(true);
    }

    return (
        <div>
            <Header  />
            <CardWrapper>
                {
                    CARD_LIST.map((item, index) => {
                        return (
                            <PairCard key={index}>
                                <CardImg className="showCard_img" src={item.imgSrc} />
                                {isOpen ? <></> : <CoverImg className="closed_card" onClick={OpenCard} src={img6} />}
                            </PairCard>

                        )
                    })
                }
            </CardWrapper>
        </div>
    );
};
export default CardGame;
