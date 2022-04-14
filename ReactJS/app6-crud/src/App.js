import logo from './logo.svg';
import './App.css';
import User from './Components/User';
import NewUser from './Components/NewUser';
import UsersTable from './Components/UsersTable';
import AllUsers from './Components/AllUsers';
import JyothiComponent from './Components/JyothiComponent';

function App() {
  return (
    <div className="App">
     <User/>
     {/* <NewUser/> */}
     {/* <UsersTable/> */}
     {/* <AllUsers/> */}
     <JyothiComponent/>
    </div>
  );
}

export default App;
