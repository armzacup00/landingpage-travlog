import styled from "styled-components"
import user from '../assets/client1.jpg'
import star from '../assets/star-yellow.svg'

function UserReview() {
  return (
    <MainContent>
        <TextContent>
            <p>T e s t i m o n i a l s</p>
            <h3>Trust our clients</h3>
        </TextContent>
        <UserContent>
            <UserImage>
                <img src={user} alt="image" />
            </UserImage>
            <p>Mark Smith <span>/ Travel Enthusiast</span></p>
            <StarImage>
                <img src={star} alt="image" />
                <img src={star} alt="image" />
                <img src={star} alt="image" />
                <img src={star} alt="image" />
                <img src={star} alt="image" />
            </StarImage>
            <p>
                Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical 
                Latin literature from 45 BC.
            </p>
        </UserContent>
    </MainContent>
  )
}

const MainContent = styled.div `
text-align: center;
margin: 2rem 0;
`
const TextContent = styled.div `
margin: 1rem 0;
p{
    color: #F85E9F;
}
h3{
    font-size: 2rem;
}
`
const UserContent = styled.div `
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
:nth-child(2){
    font-weight: bold;
    color: #FF5722;
    span{
        color: black;
    }
}
:nth-child(4){
    color: rgba(25, 24, 37, 0.75);
}
`
const UserImage = styled.div `
width: 8rem;
height: 8rem;
border-radius: 50%;
overflow: hidden;
img{
    object-fit: cover;
    width: 8rem;
    height: 8rem;
}
`
const StarImage = styled.div `
img{
    margin: 0 1rem;
}
`


export default UserReview