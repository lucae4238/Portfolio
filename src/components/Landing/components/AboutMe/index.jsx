import React from 'react'
import {Container, Content, ImageContainer, TextArea} from './styles'
import { Header } from '../../../../styled-components'

const AboutMe = () => {
  return (
    <Container>
      <Header>Get to know me</Header>
      <Content>
        <TextArea>Text Area</TextArea>
        <ImageContainer>
          imagen
        </ImageContainer>
      </Content>
    </Container>
  )
}

export default AboutMe
