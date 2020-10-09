import React from 'react'
import { Box } from '@material-ui/core'
import JobList from './JobList'
import JobInfo from './JobInfo'
import NavBar from './NavBar'
import LandingPageStyle from '../styles/LandingPage.style'


const LandingPage = () => {
    const cls = LandingPageStyle()

    return (
        <>
            <NavBar/>
            <Box className={cls.container} mx='auto'>
                <Box className={cls.leftPanel}>
                    <JobList/>
                </Box>
                <Box className={cls.rightPanel}>
                    <JobInfo/>
                </Box>
            </Box>

        </>
    )
}

export default LandingPage



