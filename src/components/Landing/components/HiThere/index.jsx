import React from 'react'
import {CustomImg, Container, Content, ContainerImg, Info} from './styles'
import HomeImg from '../../../../assets/Home.svg'

const HiThere = () => {
  return (
    <Container>
    <Content>
      <Info>
      <h1>Hi there</h1>
      <h2>Im Luca</h2>
      <p>FullStack developer</p>
      <p>Frontend Developer</p>
      <p>PERN Stack Developer</p>
      <p>Developer</p>
      </Info>
      <ContainerImg>
      <CustomImg alt="developer" src={HomeImg}/>
      </ContainerImg>
      </Content> 
    </Container>
  )
}

export default HiThere


