import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import avatar from '../img/img01.jpg';
import Tilty from 'react-tilty';

function Navigation() {

    return (
        <NavigationStyled>
               
                    <div className="avatar">
                        <Tilty style={{ transformStyle: 'preserve-3d' }}>
                                <img src={avatar} style={{ transform: 'translateZ(50px)' }} alt=""></img>
                        </Tilty>

                    </div>
                    
           
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="active-class" exact>Portfolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class" exact>Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contacts</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>
                    @ 2022 My  portfolio Website
                </p>
            </footer>
        </NavigationStyled>
    )
}
const NavigationStyled = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
border-right: 1px solid var(--border-color);
position: relative;
       
    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
            
        }
    }
    .nav-items{
        width: 100%;
        text-align:center;
        .active-class{
            background-color: var(--primary-color);
        }
        li{
            display: block;
            a{
                display:block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                    &:hover{
                        cursor: pointer;
                        color: var(--primary-color);
                    }
                &::before{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 50%;
                    background-color:var(--primary-color) ;
                    transition: var( --cubic-bezier-transition);
                    z-index: 3;
                    opacity: 0.21;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }
footer{
    border-top: 1px solid var(--border-color);
    width: 100%;
    p{
        padding: 2rem 0;
        font-size: 1rem;
        display: block;
        text-align: center;
    }
}

`
export default Navigation;
