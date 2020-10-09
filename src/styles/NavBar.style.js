import { makeStyles } from '@material-ui/core'

const NavBarStyle = makeStyles( theme => ({
    bar : {
        width : '100%',
        height : '5em',
        backgroundColor : '#616D7E',//'#333640'
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:'10em',
        marginBottom:'1em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft:'1em',
        },
    },
    textFields : {
        width : '20em',
        margin : '0 0.2em 0 0.2em',
        backgroundColor : 'rgb(255, 255, 255)',
        [theme.breakpoints.down('xs')]: {
            display : 'none',
        },
    },
    image : {
        width : '11em',
        height : 'auto',
        cursor : 'pointer',
        [theme.breakpoints.down('xs')]: {
            width : '9em',
            margin : 'auto'
        },
    },
    searchBtn : {
        color : 'white',
        [theme.breakpoints.down('xs')]: {
            display : 'none',
        },
    },

    mobileBar : {
        width : '100%',
        display : 'none',
        [theme.breakpoints.down('xs')]: {
            display : 'flex',
            justifyContent : 'center',
            //paddingLeft : '1em'
        },
    },
    mobileTextField : {
        width : '15em',
    },

})   
)

export default NavBarStyle

