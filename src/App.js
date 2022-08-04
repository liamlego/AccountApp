import './App.css';
import { LoginPage } from './components/login/Login';
import { Dashboard } from './components/dashboard/Dashboard'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      {!loggedIn ?
        <LoginPage ducky='hello' logIn={setLoggedIn}/> :
        <Dashboard />
      }
    </div>
  );
}

export default App;
/*
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage logIn={setLoggedIn}/>} />
          <Route path='/dashboard' element={<Dashboard loggedIn={loggedIn}/>} />
        </Routes>
      </BrowserRouter>
*/