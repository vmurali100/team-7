import{useState} from "react"
export default function Fconrender(){
    const [myName,setmyName] = useState("")
    const Changename=()=>{
        setmyName(" Kidambi Maadabusha")
    }
  return <>
    <button onClick={ Changename}>Change Name</button> 
    {myName.length>0 && <h2>Full Name is : {myName}</h2> }
  </>  
}