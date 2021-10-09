import React from 'react'
import styled from 'styled-components'
import resume from '../img/img.jpg'
import Primarybutton from './primarybutton'
function Imagesection() {
    return (
        <ImagesectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume img" />
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>Lorem ipsum</span></h4>
                </div>
                <p className="paragraph">
                    lorem ipsum dolor sit amet convfvriv ofbuvfb ioicv mkhifefc obfhgugfrkof hiovfgriofvn ifgjibvkvn goibhvnkmvkdghugvmckvmrihgivlvm oiufhgfmbc uhgvncb uirv j b   rvgbui oivu fjkldh cfrf  uiv f iournv rvjiue.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Language</p>
                        <p>Location</p>
                        <p>Services</p>
                    </div>
                    <div className="info">
                        <p>Lorem ipsum</p>
                        <p>22</p>
                        <p>spanish</p>
                        <p>Spanish, Franch,English</p>
                        <p>London</p>
                        <p>Freelance</p>
                    </div>
                </div>

                <Primarybutton title="Download CV" />
            </div>
        </ImagesectionStyled>
    )
}
const ImagesectionStyled = styled.div`
margin-top: 5rem;
display: flex;
justify-content: space-between;
.left-content{
    width: 50%;
    img{
        width: 90%;
        object-fit: cover;
    }
}
.right-content{
    width: 50%;
    h4{
        font-size: 1.4rem;
        color: var(--white-color);
        span{
            font-size: 2rem;
        }
    }
    .paragraph{
        padding: .7rem 0;
        font-size: 1rem;

    }
    .about-info{
        display: flex;
        padding-bottom: 1.4rem;
        .info-title{
            padding-right: 3rem;
            p{
                font-weight: 400;
                font-size: 1rem;

            }
        }
        .info-title, .info{
            p{
                padding:.3rem 0;
                font-size: 1rem;

            }
        }
    }
}
`
export default Imagesection
