import React from 'react'

import { useTranslation } from "react-i18next";
import { CustomImg, Container, Content, ContainerImg, Info, DynamicText } from './styles'
import HomeImg from '../../../../assets/Home.svg'
import { Header } from '../../../../styled-components'

const HiThere = () => {
  

  const { t, i18n } = useTranslation('common');
  return (
    <Container>
      <Content>
        <Info>
          <h4>{t("welcome.hello")}</h4>
          <Header>{ t("welcome.luca") }</Header>
          <DynamicText />
        </Info>
        <ContainerImg>
          <CustomImg alt="developer" src={HomeImg} />
        </ContainerImg>
      </Content>
    </Container>
  )
}

export default HiThere


