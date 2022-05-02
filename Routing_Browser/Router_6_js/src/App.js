import React from "react";
import { Routes, Route} from "react-router-dom";
import { Bangloore } from "./Branch/Bangloore";
import { Chennai } from "./Branch/Chennai";
import { Chittoor } from "./Branch/Chittoor";
import { Home5 } from "./Branch/Home5";
import { Kadapa } from "./Branch/Kadapa";
import { Layout5 } from "./Branch/Layout5";



function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Layout5/>}>
          <Route index element={<Home5/>} />
          <Route path="Bangloore" element={<Bangloore/>} />
          <Route path="Chennai" element={<Chennai/>} />
          <Route path="Chittoor" element={<Chittoor/>} />
          <Route path="kadapa" element={<Kadapa/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
