import React from 'react'
import { useTranslation } from "react-i18next";
import useResetScorll from '../../common/resetScroll'
import Carrousel from './Carrousel'
import MoreExamples from "./MoreExamples"
import data from './data'
import * as S from './styles'
const Projects = () => {

  const { t } = useTranslation('common');

  useResetScorll()

  return (
    <S.Container>
      <S.CustomHeader>{t("Projects.recent")}</S.CustomHeader>
      <Carrousel data={data} />
      <MoreExamples/>
    </S.Container>
  )
}

export default Projects
