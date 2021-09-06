import React from 'react'
import { useTranslation } from "react-i18next";
import IMG from '../../../../assets/sitting.png'
import Contact from '../../../Contact'
import {  /*LogosDiv,*/ Container, Content, ImageContainer, TextArea, CustomImg, CenteredHeader, ContactDiv } from './styles'

const AboutMe = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <CenteredHeader>{t("Landing.header")}</CenteredHeader>
      <Container>
        <Content>
          <TextArea>
            <p>{t("Landing.about1")}</p>
            <p>{t("Landing.about2.1")} <strong>{t("Landing.about2.2")}</strong> {t("Landing.about2.3")}</p>
            <p>{t("Landing.about3")}</p>
            <p >
              {t("Landing.about4.1")} <strong>{t("Landing.about4.2")}</strong>
              {t("Landing.about4.3")}<strong>{t("Landing.about4.4")}</strong> {t("Landing.about4.5")}
            </p>
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
