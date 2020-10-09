import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Typography, Box, Button, CircularProgress, Fade, Modal  } from '@material-ui/core'
import JobListStyle from '../styles/JobList.style'
import altImage from '../assets/NAORIG.png' 

import {fetchJobInfoByIDSuccess} from '../store/Actions'



import JobInfo from './JobInfo'



const JobList = () => {

    const [modalStatus, setModalStatus] = useState(false)

    const dispatch = useDispatch()
    const cls = JobListStyle()

    const getValueOfStore = useSelector(rootReducer => rootReducer.Reducer)
    const jobs = getValueOfStore[0]? Object.values(getValueOfStore[0]) : undefined 


    const postInfoToDisplay = ( postID ) => {
        const setter = jobs.filter(job => job.id === postID)
        dispatch( fetchJobInfoByIDSuccess(setter) )
        setModalStatus(true)
    }

    return (
        <>  

        

            
            <Box className={cls.container}>
                {
                jobs!==[] && jobs?    
                    jobs.map( list=>
                        <Fade in={true}> 
                        <Box component={Button} onClick={()=>postInfoToDisplay(list.id)} key={list.id} className={cls.jobsContainer} > 
                            <img className={cls.jobImage} src={list.company_logo? list.company_logo : altImage} alt='logo' width='70em' height='auto'/>
                            <Box className={cls.jobTexts}>
                                <Typography className={cls.jobTitle} variant='h6'>{list.title.substring(0,25)}</Typography>
                                <Typography className={cls.jobInfos}>{list.company.substring(0,35)}</Typography>
                                <Typography className={cls.jobInfos}>{list.location.substring(0,35)}</Typography>
                                <Typography className={cls.jobInfos}>{list.created_at}</Typography>
                            </Box>   
                        </Box>
                        </Fade>
                    )
                    : 
                    <Box style={{height:'100%'}} display='flex' justifyContent='center' alignItems='center'>
                        <CircularProgress />
                    </Box>
                    }
            </Box>
            
            <Box mx='auto'>
            <Modal open={modalStatus} onClose={()=> setModalStatus(false)} className={cls.modalStyle}>
                <Box className={cls.modalItem}>
                <JobInfo/>
                </Box> 
            </Modal>
            </Box>
        </>
    )
}

export default JobList
