require('file-loader?name=[name].[ext]!./index.html');
import store from './store/Store';
import actions from './store/actions/Actions';
/*
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './App.scss';

const appElement = document.getElementById('app');
ReactDOM.render(<App />, appElement);
*/
const unsubscribe = store.subscribe(() => {
    console.log("Store changed.", store.getState());
});
store.dispatch(actions.addBug("First bug")); 
store.dispatch(actions.addBug("Second bug"));
store.dispatch(actions.removeBug(1));
store.dispatch(actions.resolveBug  (2));
console.log(store.getState());