import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { F6 } from './Sample_3/F6';
import { G7 } from './Sample_3/G7';
import { A1 } from './Sample_3/A1';
import { B2 } from './Sample_3/B2';
import { C3 } from './Sample_3/C3';
import { D4 } from './Sample_3/D4';
import { E5 } from './Sample_3/E5';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<F6/>}>
          <Route index element={<G7/>}/>
          <Route path='Visakhapatnam' element={<A1/>}/>
          <Route path='Tirupati' element={<B2/>}/>
          <Route path='Vijayawada' element={<C3/>}/>
          <Route path='ArakuValley' element={<D4/>}/>
          <Route path='Srisailam' element={<E5/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
