import {useState} from 'react'
import './App.css';
import User from './Components/User';

function App() {
  const [myName, setmyName] = useState("")
  return (
    <div className="App">
      <button onClick={()=>{setmyName("Murali Krishna")}}>Change Name</button>
     <User myName={myName}/>
     
    </div>
  );
}

export default App;
