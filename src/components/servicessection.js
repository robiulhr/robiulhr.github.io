import React from 'react'
import { InnerLayout } from '../styles/layouts'
import Styled from 'styled-components'
import Title from '../components/title'
import Servicecard from '../components/servicecard'
import Design from '../img/logo.jpg'
function Servicessection() {
    return (
        <InnerLayout>
            <ServicessectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <Servicecard
                        image={Design}
                        title={'web design'}
                        paragraph={'Lorem ipsum kdvhwojf dfhisvx ugv odvbs nfhsvn '}
                    />
                    <div className="mid-cart">

                        <Servicecard
                            image={Design}
                            title={'web Development'}
                            paragraph={'Lorem ipsum kdvhwojf dfhisvx ugv odvbs nfhsvn '}
                        />

                    </div>

                    <Servicecard
                        image={Design}
                        title={'web design'}
                        paragraph={'Lorem ipsum kdvhwojf dfhisvx ugv odvbs nfhsvn '}
                    />

                </div>
            </ServicessectionStyled>

        </InnerLayout>
    )
}
const ServicessectionStyled = Styled.section`
    .services{
        margin-top:5rem;
        display:flex;
        justify-content:space-between;
        .mid-cart{
            margin: 0 1.2rem;
        }
    }
`
export default Servicessection
