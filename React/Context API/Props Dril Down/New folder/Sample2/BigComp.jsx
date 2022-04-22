import React,{ useState }from 'react'
import { BiggerComp } from './BiggerComp'

export const BigComp = () => {
    const [Fds, setFds] = useState("Raju Sadik Deena And Surya")
  return (
    <div>
        <h2>Big Component</h2>
        <BiggerComp Friends={Fds}/>
    </div>
  )
}
