import React from 'react'
import styled from 'styled-components'
function Nomatchpage() {
    return (
        <NomatchpageStyled>
            <h1>404 <span>Page not found</span></h1>
        </NomatchpageStyled>
    )
}
const NomatchpageStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    h1{
        font-size: 5rem;
    }
`
export default Nomatchpage
