import React, { useState } from 'react'
import { Container, Header } from '../../styled-components'
import Carrousel from './components/Carrousel'
import data from './data'
import * as S from './styles'
const Projects = () => {


  return (
    <Container>
      <S.CustomHeader>some of my projects</S.CustomHeader>
      <Carrousel data={data}/> 
    </Container>
  )
}

export default Projects
