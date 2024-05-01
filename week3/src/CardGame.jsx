import img6 from "../public/img/6.png"
import Header from "./Header";
import styled from "styled-components";

const CardWrapper = styled.div`
    padding: 5rem;
    width: 60rem;
`;
const CardImg = styled.img`
object-fit: cover;
width: 10rem;
height: 16rem;
padding: 0.5rem;
border-radius: 8%;
`;

const CardGame = () => { 
    return (
        <div>
            <Header />
            <CardWrapper>
                <CardImg src={img6} />
                <CardImg src={img6} />
                <CardImg src={img6} />
                <CardImg src={img6} />
                <CardImg src={img6} />
                <CardImg src={img6} />
                <CardImg src={img6} />
                <CardImg src={img6} />
                <CardImg src={img6} />
                <CardImg src={img6} />
            </CardWrapper>
        </div>
    );
};
export default CardGame;
