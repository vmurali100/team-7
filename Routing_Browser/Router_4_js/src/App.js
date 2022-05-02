import React from "react";
import { Routes, Route} from "react-router-dom";
import { Area } from "./Contacts/Area";
import { Home3 } from "./Contacts/Home3";
import { Layout3 } from "./Contacts/Layout3";
import { Local } from "./Contacts/Local";
import { National } from "./Contacts/National";
import { Nonlocal } from "./Contacts/Nonlocal";



function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Layout3/>}>
          <Route index element={<Home3/>} />
          <Route path="Area" element={<Area/>} />
          <Route path="Local" element={<Local/>} />
          <Route path="National" element={<National/>} />
          <Route path="NonLocal" element={<Nonlocal/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
