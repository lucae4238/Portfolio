import React from 'react'
import {Container} from './styles'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
const DownloadCV = () => {
  return (
    <Container as="a"
    
      download="Resume.pdf"
      href="/resume.pdf"
    >
      < GetAppRoundedIcon fontSize="inherit"/>
     <p>Resume</p>
    </Container>
  )
}

export default DownloadCV
