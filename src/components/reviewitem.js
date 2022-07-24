import React from 'react'
import Styled from 'styled-components'
function Reviewitem({ text }) {
    return (
        <ReviewitemStyled>
            <p>{text}</p>
        </ReviewitemStyled>
    )
}
const ReviewitemStyled = Styled.div`
max-height: 150px;
padding: 2rem 1rem;
border-left: 6px solid var(--border-color);
background: var(--background-dark-gray);
position: relative;
width: 50%;
padding: 0.5rem;
&:not(:first-child){
    margin-left:1rem;
}
&::after{
    content: '';
    left: 2rem;
    border-width: .8rem;
    top: 100%;
    border-style:solid;
    border-color:var(--background-dark-gray) transparent transparent var(--background-dark-gray);
}
p{
    padding: 0.5rem;

}
@media screen and (max-width: 1000px){
width: 80%;
 &:not(:first-child){
    margin-left:0;
    margin-top:3rem
 }

}
@media screen and (max-width: 700px){
width: 100%;
height: 250px;
    p{
        font-size:1.2rem;

    }

}
@media screen and (max-width: 500px){
width: 100%;
height: 200px;
    p{
     font-size:.9rem;

    }
}
@media screen and (max-width: 400px){
    height: 350px;
}

`
export default Reviewitem
