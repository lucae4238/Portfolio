import {useEffect} from 'react'

export const useResetScorll = () => {
useEffect(() => {
  window.scroll(0,0)
})
}

export default useResetScorll