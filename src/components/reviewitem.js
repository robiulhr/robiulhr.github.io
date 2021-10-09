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
height: 15vh;
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
`
export default Reviewitem
