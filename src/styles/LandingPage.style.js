import { makeStyles } from '@material-ui/core'

const LandingPageStyle = makeStyles( theme => ({
    container : {
        height : '45em',
        width : '90%',
        display : 'flex',
        flexDirection : 'row',
        [theme.breakpoints.down('sm')]: {
            height : '40em',
            width : '100%',
        },
        
    },
    leftPanel : {
        width : '50em',
        marginRight : '1em'
    },
    rightPanel : {
        width : '70em',
        marginLeft : '1em',
        [theme.breakpoints.down('sm')]: {
            display : 'none'
        },
    },

})   
)

export default LandingPageStyle