import React from 'react'
import { useEffect } from 'react'
import { Container, } from '../../styled-components'
import Carrousel from './Carrousel'
import data from './data'
import * as S from './styles'
const Projects = () => {


  useEffect(() => {
    console.log('here!')
    setTimeout(() => window.scroll(0, 100), 1000)
  })

  return (
    <Container>
      <S.CustomHeader>My Recent Works</S.CustomHeader>
      <Carrousel data={data} />
    </Container>
  )
}

export default Projects
