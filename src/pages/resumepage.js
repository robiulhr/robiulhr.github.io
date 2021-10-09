import React from 'react'
import Resume from '../components/resume'
import Skills from '../components/skills'
import { MainLayout } from '../styles/layouts'

function resumepage() {
    return (
        <MainLayout>
            <Skills />
            <Resume />
        </MainLayout>


    )
}

export default resumepage
