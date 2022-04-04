require('file-loader?name=[name].[ext]!./index.html');
import store from './store/Store';
import { addBug, removeBug, resolveBug  } from './store/Bugs/Slice';
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
store.dispatch(addBug({ description: "First bug" })); 
store.dispatch(addBug({ description: "Second bug" }));
store.dispatch(removeBug({ id : 1 }));
store.dispatch(resolveBug ({ id: 2}));
console.log(store.getState());