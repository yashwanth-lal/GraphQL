

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Preferences from '../src/components/Preferences/Preferences';
import './App.css';
import Login from '../src/components/Login/Login';
import useToken from '../src/components/App/useToken';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;