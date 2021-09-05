import React, { useState, useRef } from 'react'
import { useTranslation } from "react-i18next";
import useOutSideClick from "../NavBar/useOutsideClick"
import Contact from "../Contact"
import { Container } from './styles'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { t, i18n } = useTranslation('common');
  const contactRef = useRef(null)

  useOutSideClick(contactRef, () => setIsVisible(false))


  return (
    <Container ref={contactRef} >
      {
        isVisible &&
        <Contact />
      }
      <div ref={contactRef} onClick={() => setIsVisible(!isVisible)}>

        <h3 >{t("contactMe")}</h3>
      </div>

    </Container>
  )
}

export default Footer


