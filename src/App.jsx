import styled from "styled-components"
import Nav from "./component/Nav"
import HeadContent from "./component/HeadContent"
import ClientIcon from "./component/ClientIcon"
import CarouselContent from "./component/CarouselContent"
import TopdesContent from "./component/TopdesContent"
import DreamlocateContent from "./component/DreamlocateContent"
import OfferComponent from "./component/OfferComponent"
import UserReview from "./component/UserReview"
import SendEmail from "./component/SendEmail"
import FooterContent from "./component/FooterContent"


function App() {

  return (
    <Main>
      <Container>
        <Nav/>
        <HeadContent/>
        <ClientIcon/>
        <CarouselContent/>
        <TopdesContent/>
        <DreamlocateContent/>
        <OfferComponent/>
        <UserReview/>
        <SendEmail/>
        <FooterContent/>
      </Container>
    </Main>
  )
}
const Main = styled.main`
  
`

const Container = styled.div `
  max-width: 350px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1152px) {
    max-width: 1000px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1980px) {
    max-width: 1500px;
    margin: 0 auto;
  }
`

export default App
