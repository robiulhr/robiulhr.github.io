import React from 'react';
import Styled  from 'styled-components';
const Button = (props) => {
   
   return (<ButtonsStyled >
            {props.button.map((but,i)=>{

                    return <ButtonStyled key={i} onClick={()=>{props.filter(but)}}>
                        {but}
                    </ButtonStyled>
                })
            }
            
        </ButtonsStyled>
            
    )
}



const ButtonStyled = Styled.button`
outline:none;
border:none;
background:var(--background-light-color-2);
padding: .8rem 2rem;
font-size:inherit;
color:var(--white-color);
cursor:pointer;
transition: all 0.4s ease-in-out;
&:active,&:focus{
    background: var(--primary-color);
}
&:hover{
    background: var(--primary-color);
}
&:not(:last-child){
    margin-right:.6rem;
}

`
const ButtonsStyled = Styled.div`
margin-bottom:2rem;
display: flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
width: 100%;
margin:2.4rem auto;
height:100px;

@media screen and (max-width: 1350px){
       flex-direction:column;
       overflow-x:scroll;
       overflow-y:hidden;
        &::-webkit-scrollbar{
            width: 9px;
            background-color: #383838;
            height: 9px;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background-color: #6b6b6b;
        }
        &::-webkit-scrollbar-track{
            border-radius: 10px;
            background-color: #383838;
        }
    } 
`
export default Button;
