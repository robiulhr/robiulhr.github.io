import React from 'react'
import styled from 'styled-components'
import { MainLayout } from '../styles/layouts'
import Title from '../components/title'
import Imagesection from '../components/imagesection'
import Servicessection from '../components/servicessection'
import Reviewssection from '../components/reviewssection'
function Aboutpage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
                <Imagesection />
                <Servicessection />
                <Reviewssection />
            </AboutStyled>
        </MainLayout>
    )
}
const AboutStyled = styled.section`

`
export default Aboutpage
