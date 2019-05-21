import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { setToken } from './components/Authentication/token';

import './styles/index.scss';
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk, setToken))

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
    );


