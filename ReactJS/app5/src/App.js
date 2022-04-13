import {useState} from 'react'
import './App.css';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import User from './Components/User';

function App() {
  const [myName, setmyName] = useState("")
  return (
    <div className="App">
      {/* <button onClick={()=>{setmyName("Murali Krishna")}}>Change Name</button> */}
     {/* <User myName={myName}/> */}
    <HoverCounter/>
    <hr/>
    <ClickCounter/>
    </div>
  );
}

export default App;
