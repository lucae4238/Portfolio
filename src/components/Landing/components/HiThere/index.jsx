import React from 'react'
import {CustomImg, Container, Content, ContainerImg, Info, DynamicText} from './styles'
import HomeImg from '../../../../assets/Home.svg'
import { Header } from '../../../../styled-components'

const HiThere = () => {
  return (
    <Container>
    <Content>
      <Info>
      <Header>Hi there</Header>
      <h1>Im Luca</h1>
      <DynamicText/>
      </Info>
      <ContainerImg>
      <CustomImg alt="developer" src={HomeImg}/>
      </ContainerImg>
      </Content> 
    </Container>
  )
}

export default HiThere


