import React from 'react'
import { Header } from '../../../../styled-components'
import { SkillsDiv, SkillsGrid, SkillItem} from './styles'

const Skills = () => {
  return (
      <SkillsDiv>
        <Header>Professional Skillset</Header>
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
          <SkillItem>SCRUM</SkillItem>
        </SkillsGrid>
      </SkillsDiv>
  )
}

export default Skills
