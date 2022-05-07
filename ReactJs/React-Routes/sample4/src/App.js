import React from "react";
import { Routes, Route} from "react-router-dom";
import { A } from "./Allowed/A";
import { B } from "./Allowed/B";
import { C } from "./Allowed/C";
import { D } from "./Allowed/D";
import { Home7 } from "./Allowed/Home7";
import { Layout7 } from "./Allowed/Layout7";



function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Layout7/>}>
          <Route index element={<Home7/>} />
          <Route path="A" element={<A/>} />
          <Route path="B" element={<B/>} />
          <Route path="C" element={<C/>} />
          <Route path="D" element={<D/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
