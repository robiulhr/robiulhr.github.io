import React from 'react';
import styled from "styled-components";
import Github from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
const Menu = (props) => {
    return (
        <MenuItemStyled>
            {
                props.menuItem.map((item)=>{

                    return <div className='grid-item' key = {item.id}>
                        <div className='portfolio-content'>
                            <div className='portfolio-image'>
                                <img src={item.image} alt="" />
                                <ul>
                                <li>
                                    <a href={item.link1} target={'_blank'}>
                                    <Github/>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href={item.link2} target={'_blank'}>
                                    <LanguageIcon/>
                                    </a>
                                   
                                </li>
                             </ul>
                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.text}</p>
                        </div>
                    </div>
                    })}
        </MenuItemStyled>
    );
}

const MenuItemStyled =  styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-gap:2rem;
    .grid-item{
        .portfolio-content{
          display   : block;
          position: relative;
          h6{
            font-size: 1.5rem;
            text-transform: capitalize;
            margin: 8px 0;
            &:hover{
                color: var(--primary-color);
            }
          }
          p{
            text-transform: capitalize;
          }
          img{
            width: 100%;
            height: 30vh;
            object-fit: cover;
            object-position: top;

          }
          ul{
            visibility: hidden;
            position: absolute;
            transform: translateY(-100px);
            transition: all 0.4s ease-in-out;
            left: 50%;
            top: 40%;
            opacity: 0;

          }
          .portfolio-image{
            position: relative;
            &::before{
                content: "";
                position: absolute;
                left: 2%;
                top: 4%;
                height: 0;
                width: 0;

            }
          }
        
          .portfolio-image:hover{
            position: relative;
            ul{
                visibility: visible;
                opacity: 1;
                transform: translateY(0px);
                transform: translate(-50%,-50%);
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.4s ease-in-out;
                li{
                    background-color: var(--border-color);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    border-radius: 50%;
                    margin: 0 .5rem;
                    height: 3rem;
                    width: 3rem;
                    transition: all 0.4s ease-in-out;
                    &:hover{
                        background-color: var(--primary-color);
                    }
                    a{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
                li:hover{
                    svg{
                        color: var(--white-color);
                    }
                }
                svg{
                    font-size: 2rem;
                }
            }
            &::before{
                content: "";
                position: absolute;
                left: 2%;
                top: 4%;
                height: calc(100% - 12%);
                width: calc(100% - 4%);
                background-color: var(--primary-color);
                opacity: 0.41;
                transform-origin: left;
                transition: all 0.4s ease-in-out;

            }
          }
        }
    }
    @media screen and (max-width: 1100px){
        grid-template-columns:repeat(2,1fr);
}
@media screen and (max-width: 750px){
        grid-template-columns:repeat(1,1fr);
}
`
export default Menu;
