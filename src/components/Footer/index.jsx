import React, { useState, useRef } from 'react'
import useOutSideClick from "../NavBar/useOutsideClick"
import GitHub from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import { Container, ContactContainer } from './styles'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const contactRef = useRef(null)
  
  const test = () => {
  setIsVisible(!isVisible) 
  }
  
  const hook = () => {
    setIsVisible(false)
  }
  
  useOutSideClick(contactRef, hook)
  return (
    <Container ref={contactRef} >
      {
        isVisible &&
        <ContactContainer >
          <GitHub onClick={() => window.open( "https://github.com/lucae4238", "_blank")} fontSize="inherit" />
          <LinkedInIcon onClick={() => window.open( "https://www.linkedin.com/in/luca-casasola/", "_blank")} fontSize="inherit" />
          <MailIcon onClick={() => window.open( "mailto:lucacasasola82@gmail.com", "_blank")} fontSize="inherit" />
        </ContactContainer>
      }
      <div ref={contactRef} onClick={test}>

        <h3 >contact me</h3>
      </div>

    </Container>
  )
}

export default Footer


