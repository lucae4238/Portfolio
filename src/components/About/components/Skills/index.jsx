import React from 'react'
import { SkillsDiv, SkillsGrid, SkillItem, CenteredHeader } from './styles'
import techList from '../../../../common/techList'

const Skills = () => {
  console.log(techList)
  return (
    <SkillsDiv>
      <CenteredHeader>Professional Skillset</CenteredHeader>
      <SkillsGrid>
        {
          techList.map(element => (

            <SkillItem >

              <h4>{element.name}</h4>
              <img width={element.name === "CSS" ? "70%" : "100%"} alt={element.name} src={element.url} />
            </SkillItem>
          ))
        }
      </SkillsGrid>
    </SkillsDiv>
  )
}

export default Skills
