import React from 'react'
import styled from 'styled-components'
import resume from '../img/img.jpg'
import { InnerLayout } from '../styles/layouts'
import Primarybutton from './primarybutton'
function Imagesection () {
  return (
    <InnerLayout>
      <ImagesectionStyled>
        <div className='left-content'>
          <img src={resume} alt='resume img' />
        </div>
        <div className='right-content'>
          <div className='sub-title'>
            <h4>
              I am <span>Robiul H.</span>
            </h4>
          </div>
          <p className='paragraph'>
            Hi,
            <br />I am a Web designer and junior label front End web developer.
            I have over two years of experience working as a web designer and
            front-end developer. I am an expert at HTML, CSS, javascript,
            jquery, bootstrap, react js, Material-UI, git(version controlling),
            and some other technologies. also have a basic understanding of MERN
            Stack(React js, Nodejs, Express js, Mongo DB) , Rest APIs and c
            language. I passionate about writing reusable code, to get my skill
            better level I developed a few javascript libraries which are
            available on npm(node package manager). I did many projects with
            100% of my client's satisfaction. Also, I am experienced in making
            extensions for browsers like Chrome, Mozilla, and Brave.
          </p>
          <div className='about-info'>
            <div className='info-title'>
              <p>Full Name</p>
              <p>Nationality</p>
              <p>Language</p>
              <p>Location</p>
            </div>
            <div className='info'>
              <p>Robiul H.</p>
              <p>Bangladeshi</p>
              <p>Bangla, English, Hindi, Urdu</p>
              <p>Dhaka,Kishoregonj,Bhairab,Bangladesh</p>
            </div>
          </div>

          <Primarybutton title='Download CV' />
        </div>
      </ImagesectionStyled>
    </InnerLayout>
  )
}
const ImagesectionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  .left-content {
    width: 50%;
    img {
      width: 90%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 50%;
    h4 {
      font-size: 1.4rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 0.7rem 0;
      font-size: 1rem;
      text-transform: capitalize;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 400;
          font-size: 1rem;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
          font-size: 1rem;
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .right-content {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      margin-top: 3rem;
      padding: 1rem;
    }
  }
`
export default Imagesection
