import{useState} from "react"
export default function Funstring(){
    const [myName,setmyName] = useState("")
    const Changename=()=>{
        setmyName("Thalapathy Vijay")
    }
  return <>
    <button onClick={ Changename}>Change Name</button>
     <h2>Full Name is : {myName}</h2>
  </>  
}