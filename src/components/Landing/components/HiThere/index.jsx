import React from 'react'
import { CustomImg, Container, Content, ContainerImg, Info, DynamicText } from './styles'
import HomeImg from '../../../../assets/Home.svg'
import { Header } from '../../../../styled-components'

const HiThere = () => {
  
  return (
    <Container>
      <Content>
        <Info>
          <h3>Hello There!</h3>
          <Header>I‘m Luca</Header>
          <DynamicText />
        </Info>
        <ContainerImg>
          <CustomImg alt="developer" src={HomeImg} />
        </ContainerImg>
      </Content>
    </Container>
  )
}

export default HiThere


