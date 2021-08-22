import React from 'react'
import techList from '../../../common/techList'
import { TechArea } from './styles'

const Techs = ({ array }) => {
  return (
    <TechArea>
      {array && techList.map(e => (
        array.includes(e.name) && <img width="15%" src={e.url} alt={e.name} />
      ))}
    </TechArea>
  )
}

export default Techs
