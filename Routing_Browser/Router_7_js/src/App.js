import React from "react";
import { Routes, Route} from "react-router-dom";
import { Apple } from "./System/Apple";
import { Dell } from "./System/Dell";
import { Home6 } from "./System/Home6";
import { HP } from "./System/HP";
import { Layout6 } from "./System/Layout6";
import { Mac } from "./System/Mac";



function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Layout6/>}>
          <Route index element={<Home6/>} />
          <Route path="Apple" element={<Apple/>} />
          <Route path="Dell" element={<Dell/>} />
          <Route path="Hp" element={<HP/>} />
          <Route path="Mac" element={<Mac/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
