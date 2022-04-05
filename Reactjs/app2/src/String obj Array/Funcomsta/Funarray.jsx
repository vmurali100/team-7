import{useState} from "react"
export default function Funarray(){
    const [friend,setfriend] = useState([])
    const showfriend=()=>{
        setfriend(["vijay", "ajith", "surya", "rajini"])
    }
  return <>
    <button onClick={showfriend}>Show Friends</button>
            <ul>
                {friend.map((frd, i) => {
                    return <li key={i}>{frd}</li>
                })}
            </ul>
  </>  
}