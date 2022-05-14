import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./Gang/About";
import Crud_Sam from "./Gang/Crud_Router-2";
import { Data } from "./Gang/Data";
import { Home2 } from "./Gang/Hometwo";
import { Layout2 } from "./Gang/Layouttwo";



function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Layout2/>}>
         <Route index element={<Home2/>}/>
         <Route path="crudsam" element={<Crud_Sam/>}/>
         <Route path="data" element={<Data/>}/>
         <Route path="about" element={<About/>}/>
       </Route>
     </Routes>
    </div>
  );
}

export default App;