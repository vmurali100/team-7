import { useState} from "react";
import Sample from "./Sample";

export default function Sample1(){
const[myname,setmyname]=useState("")
return(
   <>
    <button onClick={()=>{setmyname("Balaji Kidambi")}}>Change Name</button>
    <Sample myname={myname}/>
   </>
)
}