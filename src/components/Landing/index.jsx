import React from 'react'
import HiThere from './components/HiThere'
import AboutMe from './components/AboutMe'
import useResetScroll from '../../common/resetScroll'
import {Container} from './styles'

const Landing = () => {
  useResetScroll()
  return (
    <Container>
<HiThere />
<AboutMe />
    </Container>
  )
}

export default Landing
