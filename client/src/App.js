import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Login from "./pages/Login";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Registration from './pages/Registration';
import history from './pages/history';
import { useNavigate } from "react-router-dom";


function App() {
/*   let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "./pages/Home"; 
    navigate(path);
  } */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Plant Buddy
        </p>

        <label className="Username-password">
          <p>
            Username
            
          </p>
        <input name="Username"/>
        <p>
          Password
        </p>
        
        <input name="Password"/>
        <button variant="btn btn-success" onClick={() => history.push('/Home')}>
            Login
            <routes />
  
        </button>
{/*         <button variant="btn btn-success" onClick={routeChange}>
            Login
            <routes />
            <redirect to="/Home"/>
        </button> */}
        </label>




      </header>

    </div>

  );
}

export default App;
