import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/layouts'
import Smalltitle from './smalltitle'
import Title from './title'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Resumeitem from './resumeitem'
import SchoolIcon from '@mui/icons-material/School';
function Resume() {
    const briefcase = <BusinessCenterIcon />;
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={"Resume"} span={"Resume"} />
            <InnerLayout>
                <div className="small-title">
                    <Smalltitle icon={briefcase} title={'Working Experience'} />

                </div>
                <div className="resume-content">
                    <Resumeitem year={'2015 - 2020'}
                        title={'Computer Science'}
                        subTitle={'Sussex University'}
                        text={'kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn hkjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h'}
                    />
                    <Resumeitem year={'2015 - 2020'}
                        title={'Computer Science'}
                        subTitle={'Sussex University'}
                        text={'kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn hkjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h'}
                    />
                    <Resumeitem year={'2015 - 2020'}
                        title={'Computer Science'}
                        subTitle={'Sussex University'}
                        text={'kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn hkjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h'}
                    />
                </div>
                <div className="small-title small-title-margin">
                    <Smalltitle icon={school} title={'Working Experience'} />

                </div>
                <div className="resume-content">
                    <Resumeitem year={'2015 - 2020'}
                        title={'Computer Science'}
                        subTitle={'Sussex University'}
                        text={'kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn hkjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h'}
                    />
                    <Resumeitem year={'2015 - 2020'}
                        title={'Computer Science'}
                        subTitle={'Sussex University'}
                        text={'kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn hkjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h'}
                    />
                    <Resumeitem year={'2015 - 2020'}
                        title={'Computer Science'}
                        subTitle={'Sussex University'}
                        text={'kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn hkjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}
const ResumeStyled = styled.section`
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
