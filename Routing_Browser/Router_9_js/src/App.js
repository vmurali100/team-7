import React from "react";
import { Routes, Route} from "react-router-dom";
import { Home8 } from "./Normal/Home8";
import { Layout8 } from "./Normal/Layout8";
import { Step1 } from "./Normal/step1";
import { Step2 } from "./Normal/step2";
import { Step3 } from "./Normal/step3";
import { Step4 } from "./Normal/step4";



function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Layout8/>}>
          <Route index element={<Home8/>} />
          <Route path="step1" element={<Step1/>} />
          <Route path="step2" element={<Step2/>} />
          <Route path="step3" element={<Step3/>} />
          <Route path="step4" element={<Step4/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
