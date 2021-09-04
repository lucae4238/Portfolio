import React from 'react'
import { useTranslation } from "react-i18next";
import {Container} from './styles'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
const DownloadCV = () => {
  const { t, i18n } = useTranslation('common');
  return (
    <Container as="a"
    
      download={ `${t("resume")}.pdf` }
      href={ `/${i18n.language}-resume.pdf` }
    >
      < GetAppRoundedIcon fontSize="inherit"/>
     <p>{ t("resume") }</p>
    </Container>
  )
}

export default DownloadCV
