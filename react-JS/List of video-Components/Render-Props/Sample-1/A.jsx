import React,{useState} from 'react'
import { B } from './B'
import { C } from './C'
import { D } from './D'

export const A = () => {
    const [mySilver,setmySliver] = useState("Iam Committed")
  return (
    <div>
        <B boss={mySilver}/>

        <C guru={(gone)=>{ return "Iam Single Persons" +(gone)}}/>

        <C  sami ={(went)=>{ return <D guru={went}/>}}/>

    </div>
  )
}
