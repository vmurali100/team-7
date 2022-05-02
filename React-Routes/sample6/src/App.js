import React from "react";
import { Routes, Route} from "react-router-dom";
import { Bad } from "./Postive/Bad";
import { Full } from "./Postive/Full";
import { Good } from "./Postive/Good";
import { Home9 } from "./Postive/Home9";
import { Layout9 } from "./Postive/Layout9";
import { Some } from "./Postive/Some";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout9/>}>
          <Route index element={<Home9/>} />
          <Route path="bad" element={<Bad/>} />
          <Route path="Full" element={<Full/>} />
          <Route path="Good" element={<Good/>} />
          <Route path="Some" element={<Some/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
