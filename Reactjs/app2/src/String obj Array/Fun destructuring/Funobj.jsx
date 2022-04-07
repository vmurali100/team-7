import{useState} from "react"
export default function Funobj(){
    const[person,setperson]=useState("")
    const showperson=()=>{
        setperson({
            Happy:'Be happy',
            Sad:'so sad'
        })
    }
  return <>
    <button onClick={showperson}>Show Person</button>
     <ul>
             {Object.values(person).map((val,i)=>{
                return <li key={i}>{val}</li>
             })}
         </ul> 
  </>  
}