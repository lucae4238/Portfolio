import React from 'react'
import { useEffect } from 'react'
import useResetScorll from '../../common/resetScroll'
import Carrousel from './Carrousel'
import data from './data'
import * as S from './styles'
const Projects = () => {


  useResetScorll()
  // useEffect(() => {
  //   setTimeout(() => window.scroll(0, 100), 1000)
  // })

  return (
    <S.Container>
      <S.CustomHeader>My Recent Works</S.CustomHeader>
      <Carrousel data={data} />
    </S.Container>
  )
}

export default Projects
