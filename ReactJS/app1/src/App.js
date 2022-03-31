import Raju from "./AppClass"
import ParentComp from "./Components/ParentComp"

export  function Sadik (){
  return <h2>Hello From Sadik Component</h2>
}

export function Balaji(){
  return <h2>Hello From Balaji Component</h2>
}

export default function Surya(){
  return <h2>Hello From Surya Component</h2>
}

export function Deena(){
  return <div>
    <ParentComp/>
  </div>
}