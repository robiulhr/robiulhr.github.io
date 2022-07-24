import React from 'react'
import styled from 'styled-components'
import ParticlesContainer from '../components/particles'
import FacebookIcon from '@mui/icons-material/Facebook'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typed from 'typed.js';
import { useEffect, useRef } from "react";


function Homepage() {
    // Create Ref element.
    const element = useRef(null);

    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: ["Robiul Hasan", "A Web Developer", "A Web Designer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return ( <HomepageStyled >
            <div className = "p-particles-js" >
            <ParticlesContainer / >
            </div> 
            <div className = "typography" >
            <h1 className = "waviy" > Hello I 'm <span ref={element}></span></h1> 
            {
            /* <p>
                                Nulla ut quis amet fugiat ad ex aliquip proident ut consequat ut laborum nostrud.

                            </p> */
        } 
        <div className = "icons" >
        <a href = "https://www.facebook.com/robiulhr01" className = "icon i-facebook" >
        <FacebookIcon / >
        </a> 
        <a href = "https://github.com/robiulhasanrohan" className = "icon i-github" >
        <GithubIcon / >
        </a> 
        <a href = "https://www.linkedin.com/in/robiulhr/" className = "icon i-youtube" >
        <LinkedInIcon / >
        </a> 
        </div > 
    </div> 
    </HomepageStyled >
)
}
const HomepageStyled = styled.header `
width: 100%;
height: 100vh;
position: relative;
    .p-particles-js{
        position: absolute;
        top: 0;
        left: 0;
    }
    .typography{
        position: absolute;
        top: 50%;
       left: 50%;
       transform:translate(-50%,-50%) ;
       text-align:center;
       width: 80%;
       .waviy {
            position: relative;
            -webkit-box-reflect: below -10px linear-gradient(transparent, rgba(0,0,0,.2));
            margin-bottom: 1.5rem;
            }
       .icons{
           display: flex;
           justify-content: center;
            margin:1rem;
           .icon{
               border: 2px solid var(--border-color);
               display: inline-block;
               align-items: center;
               justify-content: center;
               border-radius: 50%;
               transition: all .4s ease-in-out;
                cursor: pointer;
                margin:.5rem;
                color: var(--dark-color);

               &:hover{
                   border:2px solid var(--primary-color);
                   color:var(--primary-color);

               }
               &::not(:last-child){
                   margin-right:1rem;

               }
              svg{
                   margin: .5rem .6rem .2rem .6rem;
               }
           }
           .i-youtube{
               &:hover{
                   border:2px solid #0072b1;
                   color:#0072b1;
               }
           }
           .i-github{
               &:hover{
                   border:2px solid #5f4687;
                   color:#5f4687;
               }
           }
       }
    }
`
export default Homepage