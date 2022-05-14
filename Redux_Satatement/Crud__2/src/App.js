import React from "react";
import { Route, Routes } from "react-router-dom";
import Crud_test from "./Sub/Crud_Router4";
import { Homethre } from "./Sub/Homethree";
import { Info } from "./Sub/Info";
import { Layoutthre } from "./Sub/Layoutthree";
import { Menu } from "./Sub/Menu";


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Layoutthre/>}>
         <Route index element={<Homethre/>}/>
         <Route path="info" element={<Info/>}/>
         <Route path="menu" element={<Menu/>}/>
         <Route path="crudtest" element={<Crud_test/>}/>
       </Route>
     </Routes>
    </div>
  );
}

export default App;