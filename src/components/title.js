import React from 'react'
import styled from 'styled-components'

function Title({ title, span }) {
    return (
        <TitleStyled>
            <h2>{title}<b><span>{span}</span></b></h2>
        </TitleStyled>
    )
}
const TitleStyled = styled.div`
position: relative;
h2{
    color: var(--white-color);
    font-size: 2.1rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: .7rem;
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        width: 6rem;
        height: .33rem;
        background-color: var(--background-light-color-2);
        border-radius: 15px;
    }
     &::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 3rem;
        height: .33rem;
        background-color: var(--primary-color );
        border-radius: 15px;
    }
    span{
        font-weight: 700;
        color: var(--title-shadow-text-color);
        font-size: 5rem;
        position: absolute;
        left: 3%;
        top: 20%;
        z-index: -1;
    }
}
@media screen and (max-width: 800px){
    span{
        font-size: 4rem;
    }
}
@media screen and (max-width: 700px){
    span{
        font-size: 3.5rem !important;
    }
}
@media screen and (max-width: 500px){
    span{
        font-size: 3rem !important;
    }
}
`
export default Title
