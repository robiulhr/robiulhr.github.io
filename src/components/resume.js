import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/layouts'
import Smalltitle from './smalltitle'
import Title from './title'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Resumeitem from './resumeitem'
import SchoolIcon from '@mui/icons-material/School';
import education from '../data/education';
import experience from '../data/experience'


function Resume() {
    const briefcase = <BusinessCenterIcon/> ;
    const school = <SchoolIcon/>
        return ( <ResumeStyled >
            <Title title = { "Resume" }
            span = { "Resume" }
            />
                <InnerLayout >
                <div className = "small-title" >
                    <Smalltitle icon = { briefcase }
                    title = { 'Education' }
                    />

                </div> 
                <div className = "resume-content" >
                    <Resumeitem year = { education[0].year }
                    title = { education[0].subject }
                    subTitle = { education[0].institute }
                    text = { education[0].description }
                    /> 
                    <Resumeitem year = { education[1].year }
                    title = { education[1].subject }
                    subTitle = { education[1].institute }
                    text = { education[1].description }
                    />  
                    <Resumeitem year = { education[2].year }
                    title = { education[2].subject }
                    subTitle = { education[2].institute }
                    text = { education[2].description }
                    />  
                </div> 
            <div className = "small-title small-title-margin" >
            <Smalltitle icon = { school }
            title = { 'Working Experience' }
            />

            </div> 
            <div className = "resume-content" >
                    <Resumeitem year = { experience[0].year }
                    title = { experience[0].subject }
                    subTitle = { experience[0].institute }
                    text = { experience[0].description }
                    /> 
                    <Resumeitem year = { experience[1].year }
                    title = { experience[1].subject }
                    subTitle = { experience[1].institute }
                    text = { experience[1].description }
                    />  
                    <Resumeitem year = { experience[2].year }
                    title = { experience[2].subject }
                    subTitle = { experience[2].institute }
                    text = { experience[2].description }
                    />  
             </div> 
             </InnerLayout> 
             </ResumeStyled >
        )
}
const ResumeStyled = styled.section `
.small-title{
    padding-bottom: 3rem;
}
.small-title-margin{
    margin-top: 4rem;
}
.resume-content{
    border-left: 2px solid var(--border-color);
}
`
export default Resume