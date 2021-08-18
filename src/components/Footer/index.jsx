import React from 'react'
import { Link } from 'react-router-dom'
import { GridContainer } from './styles'

const Footer = () => {
  return (
    <GridContainer container>
      <h1>Footer</h1>
      <Link to="/" >
      <h3>contact me</h3>
      </Link>
    </GridContainer>
  )
}

export default Footer


