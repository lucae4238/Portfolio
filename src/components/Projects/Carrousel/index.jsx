import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Techs from './Techs'
import RA from '../../../assets/rightArrow.png'
import LA from '../../../assets/leftArrow.png'
import * as S from './styles'

const Carrousel = ({ data }) => {
  const [index, setIndex] = useState(0)
  const handleIndex = () => {
    let newIndex = index === data.length -1 ? 0 : index + 1
    setIndex(newIndex)
  }
  return (
    <S.Div>
      <S.Arrow position="left" onClick={handleIndex}>
        <img width="130%" src={LA} alt="left arrow" />
      </S.Arrow>
      <S.Content>
        <S.Media>
          {
            data[index].videoUrl ?

              <ReactPlayer
                url={data[index].videoUrl}
                //max-width
                controls={false}
                playing={true}
                loop={true}
              /> : <img src={data[index].imgUrl} alt="media" />
          }
        </S.Media>
        <S.Details>
          <h1>{data[index].title}</h1>
          <S.TextArea>
            <div>
              {data[index].description.map(e => <p>{e}</p>)}
            </div>
          </S.TextArea>
          <Techs array={data[index].technologies} />
          <S.GLink>Check it out <a href={data[index].link}>here!</a></S.GLink>
        </S.Details>
      </S.Content>
      <S.Arrow position="right" onClick={handleIndex}>
        <img width="130%" src={RA} alt="right arrow" />
      </S.Arrow>

    </S.Div>
  )
}

export default Carrousel