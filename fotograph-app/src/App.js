import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from "./components/Authentication/PrivateRoute";

import NavBar from './components/Navigation/NavBar';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import Home from './components/Public/PopularPage';
import UserHomePage from './components/UserProfile/UserHomePage';
import ArtistsPage from './components/Public/RecentPage';
import CreateNewPostForm from './components/UserProfile/CreateNewPostForm';
import SinglePost from './components/Public/SinglePost';
import PopularPosts from './components/Public/PopularPosts';

import './styles/App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        
        <Route exact path='/' component={Home} />
        <Route exact path='/post/:photoId' component={SinglePost} />
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
