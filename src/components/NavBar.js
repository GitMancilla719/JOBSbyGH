import React, {useState} from 'react'
import { Box, TextField, Button, createMuiTheme, ThemeProvider, InputAdornment  } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import NavBarStyle from '../styles/NavBar.style'
import fetchJobs from '../store/Actions'
import JobsLogo from '../assets/JOBSLogo.png'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#89A4FF',
      },
      secondary: {
        main: '#FFFFFF',
      },
    },
  })

const NavBar = () => {
    const cls = NavBarStyle()
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')

    const toSearch = (e) => {
      setSearchValue(e.target.value)
    }
    const handleSubmit = (e) => {
      if(searchValue){
        dispatch( fetchJobs(searchValue) )
        setSearchValue('')
      }
      else{
        dispatch( fetchJobs() )
      }
      e.preventDefault()
    }
    return (
        <ThemeProvider theme={theme}>

            <Box className={cls.bar}>
              <img src={JobsLogo} alt="" className={cls.image} onClick={handleSubmit}/>  
              <form onSubmit={handleSubmit}>
              <TextField className={cls.textFields} placeholder="Search by title, skill or company" onChange={toSearch} InputProps={{startAdornment: (<InputAdornment position="start"><Search/></InputAdornment>)}}/>
              <Button className={cls.searchBtn} type="submit"  size="small">Search</Button>
              </form>
            </Box>

            <Box className={cls.mobileBar}>
            <form onSubmit={handleSubmit} className={cls.mobileBar}>
              <TextField className={cls.mobileTextField} placeholder="Search by title, skill or company" onChange={toSearch} InputProps={{startAdornment: (<InputAdornment position="start"><Search/></InputAdornment>)}}/>
              <Button className={cls.mobileSearchBtn} type="submit" >Search</Button>
            </form>
            </Box>
            
        </ThemeProvider>
    )
}

export default NavBar
