import React from "react";
import { Layout } from "./Comp/Layout";
import { Routes, Route} from "react-router-dom";
import { About } from "./Comp/About";
import { File } from "./Comp/File";
import { Menu } from "./Comp/Menu";
import { Home } from "./Comp/Home";
import { Info } from "./Comp/Info";





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="menu" element={<Menu/>} />
          <Route path="info" element={<Info/>} />
          <Route path="file" element={<File/>} />
          <Route path="about" element={<About/>}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
