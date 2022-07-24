
import styled from 'styled-components'
import React from 'react'

function Contactitem({ icon, title, contact1, contact2 }) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                <p>
                    {icon}
                </p>
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact1}</p>
                <p>{contact2}</p>
            </div>
        </ContactItemStyled>
    )
}
const ContactItemStyled = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-gray);
    display: flex;
    align-items: center;
    &:not(::last-child){
    margin-bottom: 2.5rem;
    }
    .left-content{
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg{
            font-size: 2.3rem;
        }

    }
    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
        p{
            padding: .1rem 0;
        }
    }

    @media screen and (max-width: 900px){
         &:not(:first-child){
            margin-top: 1.5rem ;
         }  
        &:first-child{
            margin-top: 5rem;
        }   
    }
    @media screen and (max-width: 900px){
        padding: .5rem 1rem;

    }
    @media screen and (max-width: 600px){
        padding: .5rem .1rem;

    }
`
export default Contactitem

