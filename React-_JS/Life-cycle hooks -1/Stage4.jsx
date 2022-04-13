import { useState} from "react";
import Mycomp from "./Satge3";

export default function Stage4(){

const[christmas,setchristmas] = useState("Have A Wonderful Life In this SUNLINE")
return(
   <div>

    <button onClick={()=>{setchristmas("Hii All Welcome to Sunline IT Instions")}}>Reset Appilications</button>

    <Mycomp christmas={christmas}/>

    <h2>Give the Rateing On TEACHING in Sunline IT INSTUSTIONS</h2>

   </div>
);
}