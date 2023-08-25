import styled from "styled-components"
import icon1 from '../assets/icon-1.svg'
import icon2 from '../assets/icon-2.svg'
import icon3 from '../assets/icon-3.svg'
import icon4 from '../assets/icon-4.svg'
import icon5 from '../assets/icon-5.svg'

function ClientIcon() {
  return (
    <MainContent>
        <img src={icon1} alt="icon" />
        <img src={icon2} alt="icon" />
        <img src={icon3} alt="icon" />
        <img src={icon4} alt="icon" />
        <img src={icon5} alt="icon" />
    </MainContent>
  )
}
const MainContent = styled.div`
text-align: center;
img{
    margin: 1rem 0.5rem;
    height: 18px;
}
@media screen and (min-width:768px) {
    img{
        height: 32px;
    }
}
`
export default ClientIcon