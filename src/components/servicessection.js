import React from 'react'
import { InnerLayout } from '../styles/layouts'
import Styled from 'styled-components'
import Title from '../components/title'
import Servicecard from '../components/servicecard'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
function Servicessection() {
    return (
            <ServicessectionStyled>
                <Title title={'Services'} span={'services'} />
                <InnerLayout>
                <div className="services">
                <div className="first-card">
                    <Servicecard
                            Image={<DesignServicesIcon/>}
                            title={'Web design'}
                            paragraph={'Any kind of html conversion(psd to html, figma to html , etc) or custom design'}
                        />
                </div>
                <div className="pair-div">

                <div className="mid-cart">
                    <Servicecard
                            Image={<CodeIcon/>}
                            title={'Front end development'}
                            paragraph={'Full website using Creation using modern tools like react js, redux, react router, etc '}
                        />

                </div>

                    <Servicecard
                        Image={<WebIcon/>}
                        title={'Website maintenance '}
                        paragraph={'Uploading website to the server, doing small changes, fixing issues, etc'}
                    />
                </div>
                

                </div>
                 </InnerLayout>

            </ServicessectionStyled>

    )
}
const ServicessectionStyled = Styled.section`
    margin-top:5rem;
    .services{
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        width: 100%;
        .first-card{
            width: 33.33%;
        }
        .mid-cart{
            margin: 0 1.2rem;
        }
        .pair-div{
            display: flex;
            justify-content:space-between;
            width: 66.66%;
            &>div{
                width: 50%;

            }
        }
    }
    @media screen and (max-width: 1350px){
       .services{
        flex-direction:column;
         
        .first-card{
            width: 100%;
        }
        .pair-div{
            width: 100%;
            margin-top:3rem;
            flex-wrap:nowrap;
            .mid-cart{
                margin-right: 1rem;
                margin-left:0rem;
            }
            &>div{
                width: 50%;
            }
        }
       }
}
@media screen and (max-width: 700px){
       
        .pair-div{
            flex-direction:column;
            &>div{
                width: 100% !important;
            }
            .mid-cart{
                margin-bottom:3rem !important;
                margin-right: 0 !important;
            }
        }

}
`
export default Servicessection
