import React from 'react'
import Styled from 'styled-components'
function Servicecard({ Image, title, paragraph }) {
    return (
        <ServicecardStyled>
            <div className="container">
                {Image}
                <h4 >{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServicecardStyled>

    )
}
const ServicecardStyled = Styled.div`
    background-color:var(--background-dark-gray);
    border-left:1px solid var(--border-color);
    border-top:8px solid var(--border-color);
    border-right:1px solid var(--border-color);
    border-bottom:1px solid var(--border-color);
    transition: all .4s ease-in-out;
    

    &:hover{
    border-top:8px solid var(--primary-color);
    transform: translateY(3px)
    }
    svg{
        font-size:5rem;
    }
    div.container{
         padding: 1.2rem;
            img{
                width:8rem;
            }
            h4{
                color: var(--white-color);
                font-size:1.6rem;
                padding: 1rem 0 ;
                position: relative;
                text-transform:capitalize;

                &::after{
                    content: '';
                    width: 2rem;
                    background: var(--border-color);
                    height:4px;
                    position:absolute;
                    left:0;
                    bottom: 0;
                    border-radius: 10px ;
                   
                }
            }
            p{
                 padding: .8rem;
                 text-transform:capitalize;
            }
    }
 

`
export default Servicecard
