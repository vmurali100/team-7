import React from "react";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./Sample/Contact";
import { Gallary } from "./Sample/Gallary";
import { Home } from "./Sample/Home";
import { Layout } from "./Sample/Layout";
import { Menu } from "./Sample/Menu";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="Gallary" element={<Gallary/>}/>
          <Route path="Menu" element={<Menu/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
