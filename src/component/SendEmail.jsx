import styled from "styled-components"
import graphic from '../assets/Graphic_Elements.svg'
import messeage from '../assets/message.svg'

function SendEmail() {
  return (
    <MainContent>
        <Pic><img src={graphic} aria-hidden /></Pic>
        <TextContent>
            <p>subscribe to our newsletter</p>
            <h3>Prepare yourself & let’s explore the beauty of the world</h3>
        </TextContent>
        <InputContent>
        <img src={messeage} aria-hidden />
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
        </InputContent>
    </MainContent>
  )
}

const MainContent = styled.div `

padding: 3rem;
text-align: center;
position: relative;
background-color: rgba(250, 205, 73, 0.08);
@media screen and (min-width: 1152px) {
    max-width: 1000px;
    margin: 5rem auto;
}
`
const Pic = styled.div`
display: none;
@media screen and (min-width: 1980px){
    display: block;
}
`
const TextContent = styled.div `
p{
    color: #F85E9F;
}
h3{
    font-size: 2rem;
    margin: 1rem 0;
}
`
const InputContent = styled.div `
display: flex;
flex-direction: column;
img{
    position: absolute;
    left: 55px;
    top: 325px;
}
@media screen and (min-width: 768px) {
    img{
    position: absolute;
    left: 55px;
    top: 205px;
}}
@media screen and (min-width: 1152px) {
    img{
    position: absolute;
    left: 55px;
    top: 165px;
}
@media screen and (min-width: 1980px) {
    img{
    position: absolute;
    left: 55px;
    top: 166px;
}
}
}

input{
    color: rgba(25, 24, 37, 0.75);
    margin: 1rem 0;
    padding: 1rem 2rem;
    border-radius: 5px;
    border: none;
    &:focus{
        border: none;
    }
}
button{
    color: #fff;
    border-radius: 15px;
    border: none;
    background-color: #5D50C6;
    padding: 1rem 0;
    &:hover{
        background-color: #3d3385;
    }
}
`;

export default SendEmail