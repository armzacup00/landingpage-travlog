import styled from "styled-components";
import travel from "../assets/travel-pic2.png";
import location from "../assets/location.svg";
import calendar from "../assets/calendar.svg";
import ticket from "../assets/ticket.svg";

function OfferComponent() {

  return (
    <MainContent>
      <ImageContent>
        <img src={travel} alt="image" />
      </ImageContent>
      <TextContent>
        <Text>
          <p>K e y &nbsp; f e a t u r e s</p>
          <h3>We offer best services</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </Text>
        <OfferContent>
          <Offer>
            <ImageOffer $inputColor="#FF5722">
              <img src={location} alt="image" />
            </ImageOffer>
            <OfferText>
              <p>We offer best services</p>
              <p>Lorem Ipsum is not simply random text</p>
            </OfferText>
          </Offer>

          <Offer>
            <ImageOffer $inputColor="#FACD49">
              <img src={calendar} alt="image" />
            </ImageOffer>
            <OfferText>
              <p>We offer best services</p>
              <p>Lorem Ipsum is not simply random text</p>
            </OfferText>
          </Offer>

          <Offer>
            <ImageOffer $inputColor="#F85E9F">
              <img src={ticket} alt="image" />
            </ImageOffer>
            <OfferText>
              <p>We offer best services</p>
              <p>Lorem Ipsum is not simply random text</p>
            </OfferText>
          </Offer>
        </OfferContent>
      </TextContent>
    </MainContent>
  );
}

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  
  @media screen and (min-width: 1152px) {
    flex-direction: row-reverse;
    gap: 10rem;
  }
`;
const ImageContent = styled.div`
  img {
    width: 21rem;
  }
  @media screen and (min-width: 1152px) {
    img {
      width: 100%;
    }
  }
`;
const TextContent = styled.div`
  margin: 1rem 0;
  @media screen and (min-width: 1152px) {
    text-align: start;
  }
`;
const Text = styled.div`
  :nth-child(1) {
    color: #f85e9f;
  }
  :nth-child(2) {
    font-size: 2rem;
    margin: 0.5rem 0;
  }
  :nth-child(3) {
    color: rgba(25, 24, 37, 0.5);
  }
`;
const OfferContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  margin: 2rem 0;
`;
const Offer = styled.div`
  padding: 2rem;
  text-align: start;
  border: 1px solid rgba(25, 24, 37, 0.1);
  border-radius: 2rem;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;
const OfferText = styled.div`
  :nth-child(1) {
    margin: 1rem 0;
    font-weight: bold;
  }
  :nth-child(2) {
    color: rgba(25, 24, 37, 0.5);
  }
`;
const ImageOffer = styled.div`
  display: flex;
  place-content: center;
  
  width: 6.5rem;
  height: 6.5rem;
  background-color: ${(props) => props.$inputColor};
  border-radius: 30px;
  text-align-last: center;
  img {
    width: 3rem;
  }
`;

export default OfferComponent;
