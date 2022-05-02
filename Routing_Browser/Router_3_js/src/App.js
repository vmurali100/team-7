import React from "react";
import { Routes, Route} from "react-router-dom";
import { Degoo } from "./Informations/Degoo";
import { Deny } from "./Informations/Deny";
import { Home2 } from "./Informations/Home2";
import { Layout2 } from "./Informations/Layout2";
import { Lion } from "./Informations/Lion";
import { Machine } from "./Informations/Machine";



function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Layout2/>}>
          <Route index element={<Home2/>} />
          <Route path="Degoo" element={<Degoo/>} />
          <Route path="Deny" element={<Deny/>} />
          <Route path="Lion" element={<Lion/>} />
          <Route path="Machine" element={<Machine/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
