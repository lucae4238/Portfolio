import React from 'react'
import { useTranslation } from "react-i18next";
import ReactPlayer from 'react-player/youtube';
import useResetScroll from '../../common/resetScroll'
import CreativePerson from '../../assets/phone.png'
import Skills from './components/Skills'
import { ContainerImg, Content, CustomImg, Info, VideoContainer } from './styles'
import { Container, Header } from '../../styled-components'


const About = () => {
  useResetScroll()
  const { t } = useTranslation("common")
  return (
    <Container>
      <Content>
        <Info>
          <Header>{t("About.title")}</Header>
          <p>{t("About.1")}</p>
          <p>{t("About.2")}</p>
          <h3>{t("About.list.title")}</h3>
          <ul>
            <li>{t("About.list.1")}</li>
            <li>{t("About.list.2")}</li>
            <li className={"hover"} onClick={() => window.open("https://www.a11yproject.com/", "_blank")}>{t("About.list.3")}</li>
            <li>{t("About.list.4")}</li>
          </ul>
        </Info>
        <ContainerImg>
          <CustomImg src={CreativePerson} />
        </ContainerImg>
      </Content>
      <Skills />
      <VideoContainer>
        <ReactPlayer 
        className="react-player"
        // width="80vw"
        // height="20vw"
        url="https://youtu.be/tD4AFL8khp0" 
        />
      </VideoContainer>
    </Container>
  )
}

export default About
