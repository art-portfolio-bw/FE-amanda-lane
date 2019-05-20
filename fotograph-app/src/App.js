import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/Navigation/NavBar';
import SignUp from './components/Authentication/SignUp';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />


      <Route path='/sign-up' component={SignUp} />
    </div>
  );
}

export default App;
