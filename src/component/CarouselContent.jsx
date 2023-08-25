import arrowRight from '../assets/arrow.svg'
import arrowLeft from '../assets/arrow-left.svg'
import datatext from "./datatext";
import { useState } from "react";
import styled from "styled-components";

function CarouselContent() {
  const [current, setCurrent] = useState(0);
  const lengthImage = datatext.length;

  const previosSlide = () => {
    if (current === 0) {
      setCurrent(lengthImage - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const nextSlide = () => {
    if (current === lengthImage - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <MainContent>
      <MainText>
        <p>S E R V I C E S</p>
        <h2>Our top value categories for you</h2>
        <ButtonInText>
            <button onClick={previosSlide}><img src={arrowLeft} alt="arrow" /></button>
            <button onClick={nextSlide}><img src={arrowRight} alt="arrow" /></button>
        </ButtonInText>
      </MainText>
      <Carousel>
        {datatext.map((data, index) => (
          <>
            {index === current ? (
              <Carousel_selected key={index}>
                <img src={data.image} alt={data.headtext} />
                <h3>{data.headtext}</h3>
                <p>{data.detailtext}</p>
              </Carousel_selected>
            ) : (
              <Carousel_unselected key={index}>
                <img src={data.image} alt={data.headtext} />
                <h3>{data.headtext}</h3>
                <p>{data.detailtext}</p>
              </Carousel_unselected>
            )}
          </>
        ))}
      </Carousel>
    </MainContent>
  );
}

const MainContent = styled.div`
margin: 2rem 0;
text-align: center;
@media screen and (min-width:768px) {
    display: flex;
    flex-direction: column;
}
`;
const MainText = styled.div`
margin: 1rem 0;
p{
    color: #F85E9F;
}
h2{
    font-size: 2rem;
}
@media screen and (min-width:768px) {
}
`;
const ButtonInText = styled.div`
display: none;
button{
    cursor: pointer;
    margin: 1rem 1rem;
    padding: 0.5rem;
    border-radius: 50%;
    border: none;
    background-color: #7a6bed;
    &:hover{
        background-color: #5D50C6;
    }
}
@media screen and (min-width:768px) {
    display: block;
}
`
const Carousel = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 2rem 0;
overflow: hidden;

@media screen and (min-width:768px) {
    flex-direction: row;
    gap: 1rem;
}
`;

const Carousel_selected = styled.div`
border: 1px solid rgba(25, 24, 37, 0.10);
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
padding: 2rem;
margin: 1rem 0;
width: 20rem;
border-radius: 15px;
h3{
    margin: 1rem 0;
}
`;
const Carousel_unselected = styled.div`
border: 1px solid rgba(25, 24, 37, 0.10);
padding: 2rem;
margin: 1rem 0;
width: 20rem;
border-radius: 15px;
h3{
    margin: 1rem 0;
}
`;

export default CarouselContent;
