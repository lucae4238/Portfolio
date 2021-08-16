import React from 'react'
import { Link } from 'react-router-dom'
import { GridContainer, Div } from './styles'

const NavBar = () => {
  return (
    <GridContainer container>
      logo
      <Div>

      <Link to="/">
        <h4>home</h4>
      </Link>
      <Link to="/about">
        <h4>about</h4>
      </Link>
      <Link to="/projects">
        <h4>projects</h4>
      </Link>
      </Div>
    </GridContainer>
  )
}

export default NavBar
