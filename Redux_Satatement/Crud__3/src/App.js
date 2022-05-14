import React from "react";
import { Route, Routes } from "react-router-dom";
import CrudRo from "./Hello/Crud_Router";
import { Gallery } from "./Hello/Gallery";
import { Homew } from "./Hello/Home4";
import { Layout4 } from "./Hello/Layout4";
import { Sectioned } from "./Hello/Section";



function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Layout4/>}>
         <Route index element={<Homew/>}/>
         <Route path="crudro" element={<CrudRo/>}/>
         <Route path="gallery" element={<Gallery/>}/>
         <Route path="sections" element={<Sectioned/>}/>
       </Route>
     </Routes>
    </div>
  );
}

export default App;