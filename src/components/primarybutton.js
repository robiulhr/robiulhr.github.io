import React from 'react'
import Styled from 'styled-components'
function Primarybutton({ title }) {
    return (
        <PrimarybuttonStyled href="../resume/Robiul Hasan-Resume.pdf" download={true}>
            {title}
        </PrimarybuttonStyled>
    )
}
const PrimarybuttonStyled = Styled.a`
    background-color: var(--primary-color);
    padding: .5rem 2rem;
    color: white;
    cursor:pointer;
    display: inline-block;
    font-size:inherit;
    text-transform:uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    &::after{
        content: '';
        width: 0%;
        position: absolute;
        height: .2rem;
        background: var(--white-color);
        transition:  var(--cubic-bezier-transition);
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    &:hover::after{
         width: 100%;
    }
`
export default Primarybutton
