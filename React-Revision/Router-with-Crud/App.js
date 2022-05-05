import React from "react";

import { Route, Routes } from "react-router-dom";
import { FirstFloor } from "./HouseApparment/FirstFloor";
import { GroundFloor } from "./HouseApparment/GroundFloor";
import { Layout } from "./HouseApparment/Layout";
import { SecondFloor } from "./HouseApparment/SecondFloor";


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Layout/>}>
         <Route index element={<GroundFloor/>}/>
         <Route path="firstfloor" element={<FirstFloor/>}/>
         <Route path="secondfloor" element={<SecondFloor/>}/>
       </Route>
     </Routes>
    </div>
  );
}

export default App;
