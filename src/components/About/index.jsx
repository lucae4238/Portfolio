import React from 'react'
import { Container, Header } from '../../styled-components'
import { ContainerImg, Content, CustomImg, Info, } from './styles'
import useResetScroll from '../../common/resetScroll'
import CreativePerson from '../../assets/phone.png'
import Skills from './components/Skills'
const About = () => {
  useResetScroll()
  return (
    <Container>
      <Content>
        <Info>
          <Header>Hi! Nice to meet you. </Header>
          <p>Hi! My name is luca. I‘m a fullstck developer looking to improve myself everyday</p>
          <p>I‘m passionate about everything I do and although I like being as efficient as possible,
            I‘m also very detail oriented. To me, a problem is an opportunity to learn new things.</p>
          <h3>the areas that intrest me the most</h3>
          <ul>
            <li>Front End Development</li>
            <li>UX Desgin</li>
            <li className={"hover"} onClick={() => window.open("https://www.a11yproject.com/", "_blank")}><strong>A11y</strong> design</li>
            <li>Anywhere as long as I have a team! (?)</li>
          </ul>
        </Info>
        <ContainerImg>
          <CustomImg src={CreativePerson} />
        </ContainerImg>
      </Content>
      <Skills />
    </Container>
  )
}

export default About
