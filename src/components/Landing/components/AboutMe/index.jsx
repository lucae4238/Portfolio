import React from 'react'
import IMG from '../../../../assets/Creative_Person.png'
import {  /*LogosDiv,*/ Container, Content, ImageContainer, TextArea, CustomImg, CenteredHeader, ContactDiv } from './styles'

const AboutMe = () => {
  return (
    <>
      <CenteredHeader>Get to know me</CenteredHeader>
      <Container>
        <Content>
          <TextArea>
            <p>I‘m a Full Stack Developer passionate for tech. Trained in technologies like React, Typescript, Express and agile methodologies like SCRUM.</p>
            <p>I‘m passionate about everything I do and although I like being as efficient as possible, I‘m also very detail oriented. </p>
            <p>To me, a problem is an opportunity to <strong>learn</strong> new things.</p>
            <p> I exceed the most in Front end development</p>
            <p>I‘m fluent in JavaScript and TypeScript</p>
            <br />

            <ContactDiv>

              <h2>lets get in touch!</h2>
              {/* <LogosDiv>
                <img width="30px"src={GH} alt="github" />
                <img src={GM} alt="gmail" />
                <img src={LI} alt="linkedin" />
              </LogosDiv> */}
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
