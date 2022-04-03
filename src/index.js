require('file-loader?name=[name].[ext]!./index.html');
import store from './redux/Store';
import actions from './redux/Actions';
/*
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './App.scss';

const appElement = document.getElementById('app');
ReactDOM.render(<App />, appElement);
*/
store.dispatch(actions.addBug("First bug"));
store.dispatch(actions.addBug("Second bug"));
store.dispatch(actions.removeBug(1));

console.log(store.getState());