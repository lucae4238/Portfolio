import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { GridContainer, Div, PopUp, StyledDiv, StyledIcon, TranslateDiv } from './styles'
import { useTranslation } from "react-i18next";
import GoogleTranslate from "../../assets/Google_Translate.png"
import MenuIcon from  "../../assets/menu-icon.png"
import useOutsideClick from './useOutsideClick';

const NavBar = () => {
  const { t, i18n } = useTranslation('common');
  const [language, setLanguage] = useState("English")
  const mobileMenuRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguae = () => {
    if (i18n.language === 'es') {
      setLanguage("English")
      i18n.changeLanguage('en')
    } else {
      setLanguage("Español")
      i18n.changeLanguage('es')
    }
  }
  useOutsideClick(mobileMenuRef, () => setIsOpen(false))


  return (
    <GridContainer container ref={mobileMenuRef}>
      <StyledDiv>

        logo
        <StyledIcon src={MenuIcon} onClick={() => setIsOpen(isOpen ? false : true)}/>
      </StyledDiv>

      <Div>
        <TranslateDiv onClick={handleLanguae}>

          <img alt="Translate Icon" src={GoogleTranslate} />
          <h4>{language}</h4>
        </TranslateDiv>
        <Link to="/" >
          <h4>home</h4>
        </Link>
        <Link to="/about">
          <h4>about</h4>
        </Link>
        <Link to="/projects">
          <h4>projects</h4>
        </Link>
      </Div>

      <PopUp isVisible={isOpen} ref={mobileMenuRef}>

        {/* <PopUp> */}
          {/* <div>

            <StyledButton onClick={handleLanguae}>{language}</StyledButton>
          </div> */}
        <TranslateDiv onClick={handleLanguae}>

          <h4>{language}</h4>
          <img alt="Translate Icon" src={GoogleTranslate} />
        </TranslateDiv>
          <Link to="/" onClick={() => setIsOpen(false)}>
            <h4>Home</h4>
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            <h4>About</h4>
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            <h4>Projects</h4>
          </Link>
        </PopUp>
      {/* </MenuContainer> */}

    </GridContainer>
  )
}

export default NavBar
