import React from "react";
import { Routes, Route} from "react-router-dom";
import { Address } from "./DataBase/Address";
import { City } from "./DataBase/City";
import { Home1 } from "./DataBase/Home1";
import { Layout1 } from "./DataBase/Layout1";
import { Name } from "./DataBase/Name";
import { Number } from "./DataBase/Number";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout1/>}>
          <Route index element={<Home1/>} />
          <Route path="address" element={<Address/>} />
          <Route path="city" element={<City/>} />
          <Route path="name" element={<Name/>} />
          <Route path="number" element={<Number/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
