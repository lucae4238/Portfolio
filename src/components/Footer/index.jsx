import React from 'react'
import { Link } from 'react-router-dom'
import { GridContainer } from './styles'

const Footer = () => {
  return (
    <GridContainer container>
      <Link to="/" >
      <h3>contact me</h3>
      </Link>
    </GridContainer>
  )
}

export default Footer


