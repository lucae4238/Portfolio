import React, { useState} from 'react'
import ReactPlayer from 'react-player'
import * as S from './styles'

const Carrousel = ({data}) => {
  const [index, setIndex] = useState(0)
  const handleIndex = () => {
    let newIndex = index === 1 ? 0 : index + 1 
    setIndex(newIndex)
  }
  return (
      
    <>
    <S.Arrow position="right" onClick={handleIndex}>
<p>R</p>
    </S.Arrow>
    <S.Arrow position="left"onClick={handleIndex}>
<p>L</p>
    </S.Arrow>
      <S.Content>
        <S.Media>

          <ReactPlayer
            url={data[index].videoUrl}
            //max-width
            width='100%'
            height='100%'
            controls={false}
            playing={true}
            loop={true}
          />
        </S.Media>


        <S.Details>
          <h1>{data[index].title}</h1>
          <h1>{data[index].description}</h1>
          <S.GLink>Check it out on <a href={data[index].link}>Github</a></S.GLink>
        </S.Details>
      </S.Content>
      </>
  )
}

export default Carrousel