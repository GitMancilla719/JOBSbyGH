import { makeStyles } from '@material-ui/core'

const JobInfoStyle = makeStyles( theme => ({
    container : {
        paddingTop : '5.5em',
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
            background: '#888',
            height : '5em'
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop : '1em'
        },
    },
    header : {
        borderBottom : '2px solid #DCDCDC',
        height : '7em',
        paddingBottom : '5em',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        marginRight : '1em',
        paddingLeft : '1em',
        [theme.breakpoints.down('xs')]: {
            flexDirection : 'column',
            height : 'auto',
            paddingBottom : '1em',
        },
    },
    headerText : {
        lineHeight : '1.5em',
        
        color : '#4E4E4E',
        fontSize : '11.5pt',
        [theme.breakpoints.down('xs')]: {
            marginLeft : '0em'
        },
        '&:nth-child(1)' : {
            color : '#4B5B97',
            fontWeight : 'Bold',
            fontSize : 'clamp(11pt, 3vw ,14pt)'
        },
        '&:nth-child(2)' : {
            fontWeight : 'bold',
            color : '#4B5B97'
        },
        '&:nth-child(4)' : {
            fontSize : '9pt'
            
        },
    },
    headerBox : {
        marginLeft : '1em',
        [theme.breakpoints.down('xs')]: {
            marginLeft : '0em'
        },
    },
    jobImage : {
        width : '10em',
        height : 'auto',
        [theme.breakpoints.down('xs')]: {
            width : '7em',
        },
    },
    imageContainer : {
        height : '100%',
        width : '10em',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
    },
    infos : {
        padding : '2em',
        fontSize : '10pt',
        color : '#4E4E4E'
    },
    toApply : {
        fontSize : '10pt',
        lineHeight : '1.2em',
        '&:nth-child(1)' : {
            fontWeight : 'bold',
        }
    },
    toApplyContainer : {
        padding : '1.5em 1em 0.5em 1.5em',
        borderBottom : '2px solid #DCDCDC',
        overflowWrap: 'break-word'
        
    },
    EmptyPlaceholder : {
        height : '100%',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        color : '#BCBCBC'
    },
    EmptyPlaceholderImage : {
        width : '20em',
        height : 'auto'
    }
})   
)

export default JobInfoStyle