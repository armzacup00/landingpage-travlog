import styled from "styled-components";
import logo from "../assets/logo.svg";
import menu from "../assets/menu11.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const showMenuHandle = () => setShowMenu(!showMenu);

  const isDesktop = useMediaQuery({
    query: "(min-width:1152px)",
  });

  return (
    <Navbar>
      <LogoContent>
        <img src={logo} alt="logo" />
        <p>Travlog</p>
      </LogoContent>
      {isDesktop && (
        <UlContent>
          <LiContent>
            <a href="">Home</a>
          </LiContent>
          <LiContent>
            <a href="">Discover</a>
          </LiContent>
          <LiContent>
            <a href="">Special Deals</a>
          </LiContent>
          <LiContent>
            <a href="">Contact</a>
          </LiContent>
        </UlContent>
      )}
      {showMenu ? (
        <UlContent_Active>
          <LiContent>
            <a href="">Home</a>
          </LiContent>
          <LiContent>
            <a href="">Discover</a>
          </LiContent>
          <LiContent>
            <a href="">Special Deals</a>
          </LiContent>
          <LiContent>
            <a href="">Contact</a>
          </LiContent>

          <Button_in_Ul>
            <button>Login</button>
            <button>Sign Up</button>
          </Button_in_Ul>
        </UlContent_Active>
      ) : (
        <UlContent_Deactive>
          <LiContent>
            <a href="">Home</a>
          </LiContent>
          <LiContent>
            <a href="">Discover</a>
          </LiContent>
          <LiContent>
            <a href="">Special Deals</a>
          </LiContent>
          <LiContent>
            <a href="">Contact</a>
          </LiContent>

          <Button_in_Ul>
            <button>Login</button>
            <button>Sign Up</button>
          </Button_in_Ul>
        </UlContent_Deactive>
      )}

      <Signbutton>
        <button>Login</button>
        <button>Sign Up</button>
      </Signbutton>

      <MenuButton onClick={showMenuHandle}>
        <img src={menu} alt="menu" />
      </MenuButton>
    </Navbar>
  );
}

const Navbar = styled.nav`
height: 80px;
align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const LogoContent = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  p {
    font-size: 24px;
    font-weight: bold;
  }
`;
const UlContent = styled.ul`
display: flex;
li{
    margin: 0 1rem;
    a{
        &:hover{
        color: #000;
    }
    }
}
`;

const UlContent_Deactive = styled.ul`
  display: none;
`;
const UlContent_Active = styled.ul`
position: absolute;
text-align: center;
top: 5rem;
left: 6rem;
background-color: #fff;
border-radius: 15px;
padding: 1rem 3rem;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
z-index: 999;
@media screen and (min-width:768px) {
    left: 15rem;
}
@media screen and (min-width: 1152px) {
    display: none;
}
`;

const LiContent = styled.li`
list-style: none;
margin: 0.5rem 0;
a{
    color: #19182580;
    text-decoration: none;
}

`;
const Button_in_Ul = styled.div`
display: flex;
flex-direction: column;
width: 7rem;
button{
    cursor: pointer;
    border: none;
    border-radius: 20px;
    margin: 0.5rem 0;
    padding: 0.6rem 1rem;
    &:nth-child(1){
        background-color: transparent;
        &:hover{
            color: #fff;
            background-color: #5D50C6;
        }
    }
    &:nth-child(2){
        color: #fff;
        background-color: #5D50C6;
        &:hover{
            background-color: #39317a;
        }
    }
}
@media screen and (min-width: 768px) {
    display: none;
}
`;
const Signbutton = styled.div`
display: none;
@media screen and (min-width: 768px){
 display: flex;
button{
    cursor: pointer;
    border: none;
    border-radius: 20px;
    margin: 0.5rem 1rem;
    padding: 0.6rem 1rem;
    &:nth-child(1){
        background-color: transparent;
        &:hover{
            color: #fff;
            background-color: #5D50C6;
        }
    }
    &:nth-child(2){
        color: #fff;
        background-color: #5D50C6;
        &:hover{
            background-color: #39317a;
        }
    }
}
}
`;
const MenuButton = styled.div`
cursor: pointer;
@media screen and (min-width: 1152px) {
    display: none;
}
`;
export default Nav;
