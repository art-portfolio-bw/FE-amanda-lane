import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/Navigation/NavBar';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />


      <Route path='/sign-up' component={SignUp} />
      <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
