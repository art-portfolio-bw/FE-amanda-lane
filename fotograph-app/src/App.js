import React from 'react';
import { Route } from 'react-router-dom';

import SignUp from './components/Authentication/SignUp';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <nav>Nav Bar</nav>


      <Route path='/sign-up' component={SignUp} />
    </div>
  );
}

export default App;
