import Title from '../components/title'
import Progressbar from '../components/progressbar'
import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/layouts'
function Skills() {
    return (
        <SkilssStyled>
            <Title title="Skills" span={'Skills'} />
            <InnerLayout>
                <div className="skills">
                    <Progressbar title={'Web Design'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <Progressbar title={'Front End Development'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <Progressbar title={'Website Maintenance And Bug Fixing'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <Progressbar title={'Back End Development'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <Progressbar title={'Problem Solving'}
                        width={'40%'}
                        text={'40%'}
                    />
                    <Progressbar title={'Extension Development'}
                        width={'60%'}
                        text={'60%'}
                    />
                    
                </div>
            </InnerLayout>
        </SkilssStyled>
    )

}
const SkilssStyled = styled.div`
    .skills{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 2rem;

    }
    @media screen and (max-width: 950px){
        .skills{
        grid-template-columns: none;

    } 

}
`
export default Skills
