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
                    <Progressbar title={'HTML 5'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <Progressbar title={'CSS'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <Progressbar title={'BOOTSTRAP'}
                        width={'95%'}
                        text={'95%'}
                    />
                    <Progressbar title={'JAVASCRIPT'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <Progressbar title={'REACT JS'}
                        width={'40%'}
                        text={'40%'}
                    />
                    <Progressbar title={'NODE JS'}
                        width={'30%'}
                        text={'30%'}
                    />
                    <Progressbar title={'C'}
                        width={'70%'}
                        text={'70%'}
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
`
export default Skills
