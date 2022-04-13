import { useState } from "react";

function Samavesam(){

    const[Name,setName]=useState("Super Sunline-IT");
   return(
       
       <div>
           <button onChange={()=>{setName("Sunline IT Instustions")}}>Change Content</button>
           <h2>This Is Functions To Change Concept</h2>
       </div>
   );
}
export default Samavesam;