import React from 'react'
import { useTranslation } from "react-i18next";
import { useEffect } from 'react'
import useResetScorll from '../../common/resetScroll'
import Carrousel from './Carrousel'
import data from './data'
import * as S from './styles'
const Projects = () => {


  useResetScorll()
  // useEffect(() => {
  //   setTimeout(() => window.scroll(0, 100), 1000)
  // })


  const { t } = useTranslation('common');
  return (
    <S.Container>
      <S.CustomHeader>{t("Projects.recent")}</S.CustomHeader>
      <Carrousel data={data} />
    </S.Container>
  )
}

export default Projects
