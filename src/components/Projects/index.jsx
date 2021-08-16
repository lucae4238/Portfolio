import React, {useState, useEffect} from 'react'
import { Container } from '../../styled-components'
import * as S from './styles'
const Projects = () => {

  // const [index, setIndex] = useState(0)

// useEffect(() => {
//   let newIndex = index === 2 ? 0 : index + 1
//   setTimeout(() => setIndex(newIndex), 3000)
// }, [index])

  //hacer un estado que controle el carrousel
  //hacer un array con cada projecto(media + info)
  //el estado determina cual se muestra por index
  //transicion ease out
  return (
    <Container>
      <h1>some of my projects</h1>
<S.Content>
<S.Media>

    <h1>media</h1>
</S.Media>


<S.Details>
  <h1>details</h1>
</S.Details>
</S.Content>

    </Container>
  )
}

export default Projects
