import React from 'react'
import GitHub from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import { ContactContainer } from './styles'

const Contact = (props) => {
  const { position, fontSize } = props;
  return (
    <ContactContainer fontSize={fontSize} position={position} >
      <div>
        <GitHub onClick={() => window.open("https://github.com/lucae4238", "_blank")} fontSize="inherit" />
      </div>
      <div>
        <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/luca-casasola/", "_blank")} fontSize="inherit" />
      </div>
      <div>
        <MailIcon onClick={() => window.open("mailto:lucacasasola82@gmail.com", "_blank")} fontSize="inherit" />
      </div>
    </ContactContainer>
  )
}

export default Contact
