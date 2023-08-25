import styled from "styled-components";
import image from "../assets/Group1.jpg";
import work from "../assets/work1.svg";
import playButton from '../assets/play-circle.svg'
import boject from '../assets/OBJECTS.svg'

function HeadContent() {
  return (
    <MainContent>
      <ImageContent>
        <img src={image} alt="image" />
      </ImageContent>
      <TextContent>
        <button>
          Explore the world!
          <span>
            <img src={work} alt="work" />
          </span>
        </button>
        <h1>
          Travel <span>top destination </span>of the world
        </h1>
        <p>
          We always make our customer happy by providing as many choices as
          possible{" "}
        </p>
        <ButtonInText>
            <button>Get Started</button>
            <button>
                <img src={playButton} alt="playButton" />
                Watch Demo
            </button>
        </ButtonInText>
      </TextContent>
      <ObjectFloat>
        <img src={boject} alt="object" />
      </ObjectFloat>
    </MainContent>
  );
}

const MainContent = styled.div`
position: relative;
text-align: center;
justify-content: center;
margin: 2rem 0;
@media screen and (min-width: 1152px) {
    align-items: center;
    text-align: start;
    display: flex;
    flex-direction: row-reverse;
    gap: 1rem;
}
`;
const ImageContent = styled.div`
img{
    object-fit: contain;
    width: 100%;
}
`;
const TextContent = styled.div`
display: flex;
flex-direction: column;
button{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    background-color: #fff;
    border-radius: 30px;
    display: flex;
    align-items: center;
    align-self: center;
    padding: 1rem 3rem;
    border: none;
    &:hover{
        color: #fff;
        background-color: #5D50C6;
    }
    img{
        margin: 0 0.5rem;
    }
}
h1{
    margin: 0.5rem 0;
    span{
        color: #F85E9F;
    }
}
p{
    margin: 1rem 0;
    color: rgba(25, 24, 37, 0.50);
}
@media screen and (min-width: 1152px) {
    button{
        align-self: flex-start;
    }
}
`;
const ButtonInText = styled.div `
display: flex;
flex-direction: column;
margin: 1rem 0;
gap: 1rem;

@media screen and (min-width: 1152px) {
    flex-direction: row;
    gap: 5rem;
}

button{
    place-content: center;
    width: 100%;
}
:nth-child(1){
    color: #fff;
    background-color: #5D50C6;
    &:hover{
            background-color: #39317a;
        }
}
:nth-child(2){
    img{
        background-color: transparent;
    }
    &:hover{
            background-color: #39317a;
        }
}
`

const ObjectFloat = styled.div`
    display: none;
    @media screen and (min-width:768px) {
        display: block;
        position: absolute;
    left: -4.5rem;
    top: 55rem;
    }
    @media screen and (min-width:1152px) {
        position: absolute;
    left: -4rem;
    top: 20rem;
    }
`

export default HeadContent;
