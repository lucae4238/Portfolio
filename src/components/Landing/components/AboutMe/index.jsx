import React from 'react'
import IMG from '../../../../assets/Creative_Person.png'
import {Container, Content, ImageContainer, TextArea, CustomImg, CenteredHeader} from './styles'

const AboutMe = () => {
  return (
    <>
      <CenteredHeader>Get to know me</CenteredHeader>
    <Container>
      <Content>
        <TextArea>
          Text Area
          <p>I fell in love with web development after taking a class in college</p>
          <p> I exceed the most in Front end development</p>
          <p>I‘m fluent in JavaScript and TypeScript</p>
          <p>additional</p>
          <p>text</p>
          <p>xd</p>
        <br />
          <div>
          <h3>lets get in touch!</h3>
            linkedIn
            mail
            github
          </div>
          </TextArea>

        <ImageContainer>
          <CustomImg src={IMG} />
        </ImageContainer>
      </Content>
    </Container>
    </>
  )
}

export default AboutMe
