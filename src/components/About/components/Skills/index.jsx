import React from 'react'

import { useTranslation } from "react-i18next";
import { SkillsDiv, SkillsGrid, SkillItem, CenteredHeader } from './styles'
import techList from '../../../../common/techList'

const Skills = () => {

  const { t } = useTranslation('common');
  return (
    <SkillsDiv>
      <CenteredHeader>{ t("About.skillset") }</CenteredHeader>
      <SkillsGrid>
        {
          techList.map(element => (

            <SkillItem key={element.name} >

              <h4>{element.name}</h4>
              <img width={element.name === "CSS" ? "70%" : "100%"} alt={element.name} className={element.name === "Tachyons" ? "bg-white" : ""} src={element.url} />
            </SkillItem>
          ))
        }
      </SkillsGrid>
    </SkillsDiv>
  )
}

export default Skills
