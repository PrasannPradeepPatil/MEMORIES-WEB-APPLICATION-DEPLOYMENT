//IMPORT EXTERNAL MODULES
import React from 'react';                                        //sudo npx create-react-app client
import ReactDOM from 'react-dom';                                //sudo npx create-react-app client
import { Provider } from 'react-redux';                         //sudo npm install react-redux
import { createStore, applyMiddleware, compose } from 'redux'; //sudo npm install react-redux
import thunk from 'redux-thunk';                               //sudo npm install redux-thunk
//IMPORT MODULE
import { reducers } from './reducers';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

//RENDER,STORE
/*
const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(                            -->converts REACT ELEMENT(VIRTUAL DOM) returned by app.js into HTML ELEMENT(ACTUAL DOM) of public/index.html     
  <Provider store={store}>                  -->provide app.js with redux store 
    <App />                        
  </Provider>,                    
  document.getElementById('root')  
);
*/
const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


//REPORTWEBVITAS
/* #region Main */
/* 
If you want to start measuring performance in your app, pass a function
to log results (for example: reportWebVitals(console.log))
or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
*/
/* #endregion */
reportWebVitals();









