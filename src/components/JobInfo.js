import React from 'react'
import { useSelector } from 'react-redux'
import {Typography, Box, Fade, Link } from '@material-ui/core'
import JobInfoStyle from '../styles/JobInfo.style'
import EMPTYPLACEHOLDER from '../assets/EMPTY-PLACEHOLDER.png'
import altImage from '../assets/NAORIG.png' 


const JobInfo = () => {
    const cls = JobInfoStyle()

    const displayJobInfo = useSelector(rootReducer => rootReducer.JobsInfoByIDReducer)
    const infos = displayJobInfo[0]? displayJobInfo[0] : undefined

    return (
        <>
            {infos?
                <Fade in={true}>
                <Box className={cls.container} display='flex' flexDirection='column'>
                    <Box className={cls.header} display='flex' flexDirection='row'>
                        <Box className={cls.imageContainer}>
                            <img src={infos.company_logo? infos.company_logo : altImage} alt='companyimage' className={cls.jobImage}/>
                        </Box>
                        <Box className={cls.headerBox}>
                            <Typography className={cls.headerText}>{infos.title}</Typography>
                            <Link href={infos.company_url} className={cls.headerText}>{infos.company}</Link> 
                            <Typography className={cls.headerText}>{infos.location} - <b>{infos.type}</b></Typography>
                            <Typography className={cls.headerText} variant='body2'>{infos.created_at}</Typography>
                        </Box>   
                    </Box>

                    <Box className={cls.toApplyContainer}>
                        <Typography className={cls.toApply}>To apply, click the link below to visit the application form:</Typography>
                        <Typography className={cls.toApply} dangerouslySetInnerHTML={{ __html: infos.how_to_apply }}/>
                    </Box>
                    <Typography className={cls.infos} dangerouslySetInnerHTML={{ __html: infos.description }}/>
                </Box>
                </Fade>
                : <Box className={cls.EmptyPlaceholder}>
                    <img src={EMPTYPLACEHOLDER} alt='' className={cls.EmptyPlaceholderImage}/>
                    <Typography>Wonderful Opportunities Await</Typography>
                  </Box>
            }

            



        </>
    )
}

export default JobInfo
