import styled from "styled-components";
import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import arrow from "../assets/arrow-circle-down.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function FooterContent() {
  const [company, setCompany] = useState(false);
  const [contact, setContact] = useState(false);
  const [meetus, setMeetus] = useState(false);

  const companyHandle = () => setCompany(!company);
  const contactHandle = () => setContact(!contact);
  const meetusHandle = () => setMeetus(!meetus);

  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <MainContent>
      <TextContent>
        <LogoContent>
          <img src={logo} alt="logo" />
          <p>Travlog</p>
        </LogoContent>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <InIcon>
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="facebook" />
          <img src={instagram} alt="facebook" />
        </InIcon>
      </TextContent>

      <Wrap>
        <FooterNav>
          <button onClick={companyHandle}>
            Company
            <span>
              <img src={arrow} aria-hidden />
            </span>
          </button>
          {isDesktop && (
            <CompanyContent>
              <ListContent>
                <a href="#">About</a>
              </ListContent>
              <ListContent>
                <a href="#">Career</a>
              </ListContent>
              <ListContent>
                <a href="#">Mobile</a>
              </ListContent>
            </CompanyContent>
          )}
          {company ? (
            <CompanyContent_Active>
              <ListContent>
                <a href="#">About</a>
              </ListContent>
              <ListContent>
                <a href="#">Career</a>
              </ListContent>
              <ListContent>
                <a href="#">Mobile</a>
              </ListContent>
            </CompanyContent_Active>
          ) : (
            <CompanyContent_Deactive>
              <ListContent>
                <a href="#">About</a>
              </ListContent>
              <ListContent>
                <a href="#">Career</a>
              </ListContent>
              <ListContent>
                <a href="#">Mobile</a>
              </ListContent>
            </CompanyContent_Deactive>
          )}
        </FooterNav>

        <FooterNav>
          <button onClick={contactHandle}>
            Contact
            <span>
              <img src={arrow} aria-hidden />
            </span>
          </button>
          {isDesktop && (
            <ContactContent>
              <ListContent>
                <a href="#">Why Travlog?</a>
              </ListContent>
              <ListContent>
                <a href="#">Partner with us</a>
              </ListContent>
              <ListContent>
                <a href="#">FAQ’s</a>
              </ListContent>
              <ListContent>
                <a href="#">Blog</a>
              </ListContent>
            </ContactContent>
          )}
          {contact ? (
            <ContactContent_Active>
              <ListContent>
                <a href="#">Why Travlog?</a>
              </ListContent>
              <ListContent>
                <a href="#">Partner with us</a>
              </ListContent>
              <ListContent>
                <a href="#">FAQ’s</a>
              </ListContent>
              <ListContent>
                <a href="#">Blog</a>
              </ListContent>
            </ContactContent_Active>
          ) : (
            <ContactContent_Deactive>
              <ListContent>
                <a href="#">Why Travlog?</a>
              </ListContent>
              <ListContent>
                <a href="#">Partner with us</a>
              </ListContent>
              <ListContent>
                <a href="#">FAQ’s</a>
              </ListContent>
              <ListContent>
                <a href="#">Blog</a>
              </ListContent>
            </ContactContent_Deactive>
          )}
        </FooterNav>

        <FooterNav>
          <button onClick={meetusHandle}>
            Meet Us{" "}
            <span>
              <img src={arrow} aria-hidden />
            </span>
          </button>
          {isDesktop && (
            <MeetContent>
             
              <p>+00 92 1234 56789</p>
              <p>info@travlog.com</p>
              <p>205. R Street, New York</p>
              <p>BD23200</p>
            </MeetContent>
          )}
          {meetus ? (
            <MeetContent_Active>
              
              <p>+00 92 1234 56789</p>
              <p>info@travlog.com</p>
              <p>205. R Street, New York</p>
              <p>BD23200</p>
            </MeetContent_Active>
          ) : (
            <MeetContent_Deactive>
              
              <p>+00 92 1234 56789</p>
              <p>info@travlog.com</p>
              <p>205. R Street, New York</p>
              <p>BD23200</p>
            </MeetContent_Deactive>
          )}
        </FooterNav>
      </Wrap>
    </MainContent>
  );
}

const MainContent = styled.footer`
  margin: 2rem 0;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const TextContent = styled.div`
  margin: 1rem 0;
  p {
    color: rgba(25, 24, 37, 0.5);
    margin: 1rem 0;
  }
`;
const LogoContent = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  p {
    color: #000;
    font-size: 24px;
    font-weight: bold;
  }
`;
const InIcon = styled.div`
  img {
    margin-right: 1rem;
  }
`;

const Wrap = styled.div `
margin: 1rem 0;
@media screen and (min-width: 768px) {
  display: flex;
  text-align-last: start;
  justify-content: space-between;
  }
`

const CompanyContent = styled.ul`
  color: rgba(25, 24, 37, 0.5);
`;
const CompanyContent_Active = styled.ul`
  color: rgba(25, 24, 37, 0.5);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const CompanyContent_Deactive = styled.ul`
overflow: hidden;
height: 0;
  color: rgba(25, 24, 37, 0.5);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ContactContent = styled.ul`
  color: rgba(25, 24, 37, 0.5);
`;
const ContactContent_Active = styled.ul`
  color: rgba(25, 24, 37, 0.5);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const ContactContent_Deactive = styled.ul`
overflow: hidden;
height: 0;
  color: rgba(25, 24, 37, 0.5);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MeetContent = styled.ul`
  color: rgba(25, 24, 37, 0.5);
  p{
    margin: 1rem 0;
  }
`;
const MeetContent_Active = styled.ul`
  color: rgba(25, 24, 37, 0.5);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const MeetContent_Deactive = styled.ul`
overflow: hidden;
height: 0;
  color: rgba(25, 24, 37, 0.5);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ListContent = styled.li`
margin: 1rem 0;
  list-style: none;
  a {
    color: rgba(25, 24, 37, 0.5);
    text-decoration: none;
  }
`;
const FooterNav = styled.div`
    text-align: -webkit-center;
button{
  background-color: transparent;
  border: none;
  @media screen and (max-width: 768px) {
  width: 7rem;
  justify-content: space-between;
  display: flex;
  align-items: center;

  }
  span{
    margin: 0 0.5rem;
    @media screen and (min-width: 768px) {
    display: none;
  }
  }
}
`;

export default FooterContent;
