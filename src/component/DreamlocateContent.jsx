import styled from "styled-components";
import travel from "../assets/travel-pic.png";

function DreamlocateContent() {
  return (
    <MainContent>
      <PicContent>
        <img src={travel} alt="travel" />
      </PicContent>

      <TextContentControll>
        <TextContent>
          <p>T r a v e l &nbsp; P o i n t</p>
          <h3>We helping you find your dream location</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </TextContent>
        <ScoreController>
          <Score>
            <p>500+</p>
            <p>Holiday Package</p>
          </Score>

          <Score>
            <p>100</p>
            <p>Luxury Hotel</p>
          </Score>

          <Score>
            <p>7</p>
            <p>Premium Airlines</p>
          </Score>

          <Score>
            <p>2k+</p>
            <p>Happy Customer</p>
          </Score>

        </ScoreController>
      </TextContentControll>
    </MainContent>
  );
}

const MainContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;
const PicContent = styled.div`
  margin: 2rem 0;
  img {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    position: relative;
    right: 10rem;
    img {
    width: 130%;
  }
  @media screen and (min-width: 1152px) {
    position: relative;
    right: 18rem;
    img {
    width: 130%;
  }
  }
`;
const TextContentControll = styled.div``;
const TextContent = styled.div`
  :nth-child(1) {
    color: #f85e9f;
  }
  :nth-child(2) {
    margin: 1rem 0;
    font-size: 2rem;
  }
  :nth-child(3) {
    color: rgba(25, 24, 37, 0.5);
  }
`;
const ScoreController = styled.div`
margin: 2rem 0;
@media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const Score = styled.div`
border: 1px solid rgba(25, 24, 37, 0.10);
margin: 1rem;
padding: 2rem;
border-radius: 15px;

:nth-child(1){
    font-weight: bold;
    color: #FF5722;
    font-size: 2rem;
    margin-bottom: 0.5rem;
}
`;

export default DreamlocateContent;
