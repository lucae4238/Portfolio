import React from 'react'
import { Link } from 'react-router-dom'
import { GridContainer, Div } from './styles'
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation('common');
  const language = i18n.language
  const handleLanguae = () => {
    language === 'es' ? i18n.changeLanguage('en') : i18n.changeLanguage('es')
  }
  return (
    <GridContainer container>
      logo
      <h1>{t('welcome.title')}</h1>
      <button onClick={handleLanguae}>{language}</button>

      <Div>
        <Link to="/">
          <h4>home</h4>
        </Link>
        <Link to="/about">
          <h4>about</h4>
        </Link>
        <Link to="/projects">
          <h4>projects</h4>
        </Link>
      </Div>
    </GridContainer>
  )
}

export default NavBar
