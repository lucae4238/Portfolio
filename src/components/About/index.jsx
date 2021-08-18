import React from 'react'
import { Container, Header } from '../../styled-components'
import { ContainerImg, Content, CustomImg, Info, SkillsDiv, SkillsGrid, SkillItem} from './styles'
import CreativePerson from '../../assets/Creative_Person.png'
const About = () => {
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
              <li>Anywhere as long as I have a team! (?)</li>
            </ul>
        </Info>
        <ContainerImg>
          <CustomImg src={CreativePerson} />
        </ContainerImg>
      </Content>
      <SkillsDiv>
        <h1>Professional Skillset</h1>
        <SkillsGrid>
          <SkillItem>react</SkillItem>
          <SkillItem>redux</SkillItem>
          <SkillItem>JS</SkillItem>
          <SkillItem>TS</SkillItem>
          <SkillItem>MUI</SkillItem>
          <SkillItem>HTML</SkillItem>
          <SkillItem>CSS</SkillItem>
          <SkillItem>Expres</SkillItem>
          <SkillItem>Node</SkillItem>
          <SkillItem>Seque</SkillItem>
          <SkillItem>Postres</SkillItem>
          <SkillItem>Git</SkillItem>
          <SkillItem>scrum</SkillItem>
        </SkillsGrid>
      </SkillsDiv>
    </Container>
  )
}

export default About
