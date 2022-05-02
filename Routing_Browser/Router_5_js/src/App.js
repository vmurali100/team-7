import React from "react";
import { Routes, Route} from "react-router-dom";
import { BigHotel } from "./Management/BigHotel";
import { Home4 } from "./Management/Home4";
import { Hotel } from "./Management/Hotel";
import { Layout4 } from "./Management/Layout4";
import { MinHotel } from "./Management/MinHotel";
import { More } from "./Management/More";



function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Layout4/>}>
          <Route index element={<Home4/>} />
          <Route path="BigHotel" element={<BigHotel/>} />
          <Route path="Hotel" element={<Hotel/>} />
          <Route path="MinHotel" element={<MinHotel/>} />
          <Route path="More" element={<More/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
