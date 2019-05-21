import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/Navigation/NavBar';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import Home from './components/Home/Home';
import UserHomePage from './components/UserProfile/UserHomePage';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path='/' component={Home} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/login' component={Login} />

      <Route path='/user' component={UserHomePage} />
    </div>
  );
}

export default App;
