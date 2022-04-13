import {useState} from 'react'
import './App.css';
<<<<<<< HEAD
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
=======
>>>>>>> 1bcbe43047cbd3e7986ad05aa4197df1e74085b1
import User from './Components/User';

function App() {
  const [myName, setmyName] = useState("")
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <button onClick={()=>{setmyName("Murali Krishna")}}>Change Name</button> */}
     {/* <User myName={myName}/> */}
    <HoverCounter/>
    <hr/>
    <ClickCounter/>
=======
      <button onClick={()=>{setmyName("Murali Krishna")}}>Change Name</button>
     <User myName={myName}/>
     
>>>>>>> 1bcbe43047cbd3e7986ad05aa4197df1e74085b1
    </div>
  );
}

export default App;
