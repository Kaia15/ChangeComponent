import logo from './logo.svg';
import './App.css';
import { AuthContext } from '../src/BE/context/UserContext'
import Login from './FE/auth/login/login';
import Dashboard from './FE/pages/dashboard';
import React, {useContext} from 'react'

function App() {
  
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
