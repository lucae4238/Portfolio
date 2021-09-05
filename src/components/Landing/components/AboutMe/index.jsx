import React from 'react'
import IMG from '../../../../assets/Creative_Person.png'
import Contact from '../../../Contact'
import {  /*LogosDiv,*/ Container, Content, ImageContainer, TextArea, CustomImg, CenteredHeader, ContactDiv } from './styles'

const AboutMe = () => {
  return (
    <>
      <CenteredHeader>Get to know me</CenteredHeader>
      <Container>
        <Content>
          <TextArea>
            <p>I‘m a Fullstack Developer passionate for tech. Trained in technologies like React, Typescript, Express and agile methodologies like SCRUM.</p>
            <p>I like to learn new things through challenges and <strong>improve</strong> myself everyday.
              What sets me apart is my ability to adapt to any sitution with ease. </p>
            <p> I exceed the most in Front end development</p>
            <p>If you need a developer who’s <strong>creative</strong>, likes to solve problems and always has a smile on his face,
              you can <strong>contact</strong> me here: </p>
            <br />
            <ContactDiv>
              <Contact fontSize="70px" position="inherit" />
            </ContactDiv>
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
