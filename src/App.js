import './App.css';
import { LoginPage } from './components/login/Login';
import { Dashboard } from './components/dashboard/Dashboard'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      {!loggedIn ?
        <LoginPage ducky='hello' logIn={setLoggedIn} setUsername={setUsername} setPassword={setPassword}/> :
        <Dashboard username={username} password={password}/>
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