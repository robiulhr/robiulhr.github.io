import React from 'react'
import styled from 'styled-components'
import Navigation from './navigation'




const Sidebar = function(props) {

        return ( <SidebarStyled  className={props.sidebarStatus ? 'sidebarhide':""}>
             <Navigation / >
            </SidebarStyled>)

        } 

const SidebarStyled = styled.div `
    width: 16.3rem;
    position: fixed;
    height:  100%;
    z-index:1;
    background-color: var(--sidebar-dark-color);
    transition: all .4s ease-in-out;
    

`
export default Sidebar;