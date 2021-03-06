import React, { useState } from 'react'

import { useTranslation } from "react-i18next";
import Techs from './Techs'
import RA from '../../../assets/rightArrow.png'
import LA from '../../../assets/leftArrow.png'
import * as S from './styles'

const Carrousel = ({ data }) => {
  const [index, setIndex] = useState(0)
  const { t } = useTranslation('common');
  const handleIndex = (direction) => {
    let newIndex;
    if (direction === "right") {
      newIndex = index === data.length - 1 ? 0 : index + 1
    } else {
      newIndex = index === 0 ? data.length - 1 : index - 1
    }
    if (window.outerWidth < 800) window.scroll(0, 0)
    setIndex(newIndex)

  }

  const handleMouse = (e) => {
    const width = window.outerWidth / 6
    // window.alert(`you clickd on ${e.screenX} and should be less than ${width * 2}`)
    if (e.screenX < width * 2) {
      handleIndex('left')
    }
    if (e.screenX > width * 5) {
      handleIndex('right')
    }
  }


  return (
    <S.Div onMouseDown={(e) => handleMouse(e)}>
      <S.Arrow position="left" onClick={() => handleIndex("left")}>
        <img width="130%" src={LA} alt="left arrow" />
      </S.Arrow>
      <S.Content>
        <h1>{data[index].title}</h1>
        <S.Media>
          {
            data[index].videoUrl ?

              <S.StyledReactPlayer
                url={data[index].videoUrl}
                //max-width
                controls={false}
                playing={true}
                loop={true}
              // light={true}
              /> : <img src={data[index].imgUrl} alt="media" />
          }
        </S.Media>
        <S.TextArea>
          {data[index].description.map((e,i) => <p key={i}>{t(`${data[index].title}.${e}`)}</p>)}
        </S.TextArea>
        <S.Details>
          <Techs array={data[index].technologies} />
{ 
          data[index].link && <S.GLink>{ t("Projects.checkout" ) }<a href={data[index].link}>{ t("Projects.here") }!</a></S.GLink>
 }
        </S.Details>
      </S.Content>
      <S.Arrow position="right" onClick={() => handleIndex("right")}>
        <img width="130%" src={RA} alt="right arrow" />
      </S.Arrow>

    </S.Div>
  )
}

export default Carrousel