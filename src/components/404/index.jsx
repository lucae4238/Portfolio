import React from 'react'
import img from "../../assets/404.png"
import {Container} from "./styles"

const NoMatch = () => {
  return (
    <Container>
      <img src={img} alt="pageNotFound"/>
      </Container>
  )
}

export default NoMatch
