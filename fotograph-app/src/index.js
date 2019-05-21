import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

import './styles/index.scss';
import App from './App';

// const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(<App />, document.getElementById('root'));


