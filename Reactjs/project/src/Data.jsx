import React,{useState} from "react";
// import axios from 'axios'


function APElectionsResults(){
  
  const[searchplace,setsearchplace]=useState({})
  return(
      <div>
          <select value={searchplace} onChange={e=>setsearchplace(e.target.value)}>
           <option value="Chodavaram">Chodavaram</option>   
           <option value="V.MADUGULA">V.MADUGULA</option> 
           \<option value="ARAKU VALLEY">ARAKU VALLEY</option>  
          </select>
      </div>
  )

}
export default APElectionsResults
