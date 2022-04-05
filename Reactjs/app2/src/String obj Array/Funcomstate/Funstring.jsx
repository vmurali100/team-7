import{useState} from "react"
export default function Funstring(){
    const [myName,setmyName] = useState("")
    const Changename=()=>{
        setmyName("Balaji Kidambi")
    }
  return <>
    <button onClick={ Changename}>Change Name</button>
     <h2>Full Name is : {myName}</h2>
  </>  
}