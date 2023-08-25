import styled from "styled-components"
import star from '../assets/star.svg'
import sea from '../assets/top-destination-1.jpg'
import fish from '../assets/top-destination-2.jpg'
import mountain from '../assets/top-destination-3.jpg'

function TopdesContent() {
  return (
    <MainContent>
        <MainText>
            <p>T O P &nbsp; D E S T I N A T I O N</p>
            <h3>Explore top destination</h3>
        </MainText>
        <TableControll>
            <Table>
                <img src={sea} alt="image" />
                <TextinTable>
                <p>$550.16</p>
                <p>Paradise Beach, Bantayan Island</p>
                <p>Rome, Italy</p>
                <PriceText>
                <p>4.8 <span><img src={star} alt="star" /></span></p>
                </PriceText>
                </TextinTable>
            </Table>

            <Table>
                <img src={fish} alt="image" />
                <TextinTable>
                <p>$20.99</p>
                <p>Ocean with full of Colors</p>
                <p>Maldives</p>
                <PriceText>
                <p>4.5 <span><img src={star} alt="star" /></span></p>
                </PriceText>
                </TextinTable>
            </Table>

            <Table>
                <img src={mountain} alt="image" />
                <TextinTable>
                <p>$150.99</p>
                <p>Mountain View, Above the cloud</p>
                <p>United Arab Emeries </p>
                <PriceText>
                <p>5.0 <span><img src={star} alt="star" /></span></p>
                </PriceText>
                </TextinTable>
            </Table>
        </TableControll>
    </MainContent>
  )
}

const MainContent = styled.div `
text-align: center;
margin: 1rem 0;
`
const MainText = styled.div `
p{
    color: #F85E9F;
}
h3{
    font-size: 2rem;
}
`
const TableControll = styled.div `
    text-align: -webkit-center;
    margin: 2rem 0;

@media screen and (min-width: 768px) {
    display: flex;
    place-content: center;
    gap: 2rem;
}
`
const Table = styled.div `
margin: 1rem 0;
text-align: start;
width: 20rem;
border-radius: 15px;
overflow: hidden;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
p{
    margin: 1rem 0;
}
img{
    object-fit: cover;
    width: 100%;
    height: 213px;
}
`
const TextinTable = styled.div `
padding: 1rem;
:nth-child(1){
    font-weight: bold;
    color: #F85E9F;
}
:nth-child(2){
    font-weight: bold;
}
:nth-child(3){
    color: rgba(25, 24, 37, 0.75);
}
`
const PriceText = styled.div `

p{
    display: flex;
    align-items: center;
    color: #FF5722 !important;
    span{
        margin-left: 0.5rem;
    }
    img{
        aspect-ratio: 1;
        width: 22px !important;
        height: 22px !important;
    }
}
`

export default TopdesContent