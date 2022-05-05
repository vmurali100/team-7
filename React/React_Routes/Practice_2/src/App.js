import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout1 } from "./Sample 1/Layout1";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout1/>}>
          <Route index element={<Home1/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
