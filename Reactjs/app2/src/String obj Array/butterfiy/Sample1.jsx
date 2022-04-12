import { useState} from "react";
import Sample from "./Sample";

export default function Sample1(){
const[myname,setmyname]=useState("Baan")
return(
   <>
    <button onClick={()=>{setmyname("Balaji Kidambi")}}>Change Name</button>
    {/* <Sample myname={myname}/>
    <h2>Wellcome to Butterfly</h2> */}
   </>
)
}