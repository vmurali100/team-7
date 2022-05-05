import React from "react";
import { Route, Routes } from "react-router-dom";
import { Director } from "./Sample_3/Director";
import { Heroens } from "./Sample_3/Heroens";
import { Heroes } from "./Sample_3/Heroes";
import { Title } from "./Sample_3/Title";
import { Villain } from "./Sample_3/Villain";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Title/>}>
          <Route index element={<Director/>}/>
          <Route path="Villain" element={<Villain/>}/>
          <Route path="Heroes" element={<Heroes/>}/>
          <Route path="Herones" element={<Heroens/>}/>
          {/* <Route path="musicDirector" element={</>}/> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
