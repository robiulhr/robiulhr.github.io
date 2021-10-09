import React from 'react'
import styled from 'styled-components'
import Navigation from './navigation'
const SidebarStyled = styled.div`
    width : 16.3rem;
    position: fixed;
    height:  100vh;
    background-color: var(--sidebar-dark-color);
`
const Sidebar = function () {

    return (<SidebarStyled >
        <Navigation />
    </SidebarStyled>)

}

export default Sidebar;