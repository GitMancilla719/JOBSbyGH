import { makeStyles } from '@material-ui/core'

const JobListStyle = makeStyles( theme => ({
    container : {
        //backgroundColor : '#F23232',
        width : '100%',
        height : '100%',
        overflow : 'scroll',
        overflowX: 'hidden',
        padding : '0 0.5em 0 0.5em',
        "&::-webkit-scrollbar" : {
            width: '10px'
        },
        "&::-webkit-scrollbar-track" : {
            background: '#f1f1f1',
            
        },
        "&::-webkit-scrollbar-thumb" : {
            background: '#8887',
            borderRadius : '5px'
        },
        "&::-webkit-scrollbar-thumb:hover" : {
            background: '#888'
        }
        
    },
    jobsContainer : {
        width : '100%',
        height : '7em',
        overflow : 'hidden',
        borderBottom : '1px solid #DCDCDC',
        paddingLeft : '1em',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        '&:focus' : {
            backgroundColor : '#E7F3FF'
        }
    },
    jobTexts : {
        display : 'flex', 
        flexDirection : 'column', 
        alignItems : 'flex-start'
    },
    jobTitle : {
        color : '#4B5B97',
        lineHeight : '1.5em',
        fontSize : '11pt',
        fontWeight : '900',
        [theme.breakpoints.down('xs')]: {
            fontSize : '10pt',
        },
    },
    jobInfos : {
        color : '#838383',
        lineHeight : '1.5em',
        fontSize : '10pt',
        [theme.breakpoints.down('xs')]: {
            fontSize : '9pt',
        },
        '&:nth-child(1)' : {
            overflow : 'hidden'
        },
        '&:nth-child(4)' : {
            fontSize : '8pt'
        }
    },
    jobImage : {
        display : 'flex',
        alignSelf : 'center',
        margin : '0 1em 0 0.5em',
        [theme.breakpoints.down('xs')]: {
            width : '2em',
            height : 'auto'
        },
    },
    modalStyle : {
        display : 'none',
        width : '90%',
        height : 'auto',
        overflow : 'scroll',
        overflowX: 'hidden',
        [theme.breakpoints.down('sm')]: {
            display : 'block',
            margin : '1em auto 0em auto'
            
        },
    },
    modalItem : {
        backgroundColor : '#FFFFFF',
        
    }


})   
)

export default JobListStyle