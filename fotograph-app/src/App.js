import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from "./components/Authentication/PrivateRoute";

import NavBar from './components/Navigation/NavBar';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import Home from './components/Home/Home';
import UserHomePage from './components/UserProfile/UserHomePage';
import ArtistsPage from './components/Home/ArtistsPage';
import CreateNewPostForm from './components/UserProfile/CreateNewPostForm';
import SinglePost from './components/Home/SinglePost';

import './styles/App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        
        <Route exact path='/' component={Home} />
        <Route path='/post/:id' component={SinglePost} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/artists' component={ArtistsPage} />
        <Route path='/create-post' component={CreateNewPostForm} />

        <PrivateRoute path='/user' component={UserHomePage} />
      </div>
    </Router>
  );
}

export default App;
