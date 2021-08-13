import React from 'react'
// import { Link } from 'react-router-dom'
import { GridContainer } from './styles'

const NavBar = () => {
  return (
    <GridContainer container>
      logo 
      <h4>home</h4>
      <h4>about</h4>
      <h4>projects</h4>
      <h4>resume</h4>
    </GridContainer>
  )
}

export default NavBar
