import Title from '../components/title'
import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/layouts'
import Primarybutton from '../components/primarybutton'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AddressLocationIcon from '@mui/icons-material/AddLocation';
import Contactitem from '../components/contactitem'
function contactpage() {
    const Phone = <PhoneIcon />
    const Email = <EmailIcon />
    const Address = <AddressLocationIcon />
    return (
        <MainLayout>

            <Title title={'Contact'} span={'Contact'} />
            <ContactpageStyled>
                <InnerLayout className="Contact-section">
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get in Touch</h4>
                        </div>
                        <form className="form">
                            <div className="form-feild">
                                <label htmlFor="name" >Enter Your Name</label>
                                <input type="text" id="name" autoComplete="off" />
                            </div>
                            <div className="form-feild">
                                <label htmlFor="email" >Enter Your Email</label>
                                <input type="email" id="email" autoComplete="off" />
                            </div>
                            <div className="form-feild">
                                <label htmlFor="subject" >Enter Your subject</label>
                                <input type="text" id="subject" autoComplete="off" />
                            </div>
                            <div className="form-feild">
                                <label htmlFor="">Enter your Massege</label>
                                <textarea name="textarea" id="textarea" cols="30" row="10" autoComplete="off"></textarea>
                            </div>
                            <div className="form-feild">
                                <Primarybutton title="Submit" />
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <Contactitem icon={Phone} title={"phone"} contact1={'0798979879023890'} contact2={'+789437130987'} />
                        <Contactitem icon={Email} title={"phone"} contact1={'0798979879023890'} contact2={'+789437130987'} />
                        <Contactitem icon={Address} title={"phone"} contact1={'0798979879023890'} contact2={'+789437130987'} />
                    </div>
                </InnerLayout>
            </ContactpageStyled >
        </MainLayout >
    )
}
const ContactpageStyled = styled.section`
.Contact-section{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 2rem;
    .right-content{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .contact-title{
        h4{
            color: var(--white-color);
            padding: 1rem 0;
            font-size: 1.8rem;
        }
    }
    .form{
        width: 100%;
        .form-feild{
            margin-top: 2rem;
            position: relative;
            width: 100%;
            label{
                position: absolute;
                left: 20px;
                top: -19px;
                display: inline-block;
                background-color: var(--background-dark-color);
                padding: 0 .5rem;
                color: inherit;
            }
            input{
                border: 1px solid var(--border-color);
                outline: none;
                background: transparent;
                height: 50px;
                padding: 0 15px;
                width: 100%;
                color: inherit;
            }
            textarea{
                background-color: transparent;
                border: 1px solid var(--border-color);
                outline: none;
                color: inherit;
                width: 100%;
                max-width: 100%;
                padding: .8rem 1rem;
                resize: inherit;
            }
        }
        
    }
}
`
export default contactpage
