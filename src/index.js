require('file-loader?name=[name].[ext]!./index.html');
import store from './store/Store';
import { addBug, getBugsByMemberId, getUnresolvedBugs, removeBug, resolveBug  } from './store/bugs/Slice';
import { addProject, removeProject } from './store/projects/Slice';
import { addMember, getMemberId } from './store/members/Slice';
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
const member1 = { name : 'Sridhar' };

store.dispatch(addMember({ name: member1.name }));

store.dispatch(addProject({name: "First project"}));
const memberId = getMemberId(store.getState().entities.members, member1.name);
store.dispatch(addBug({ description: "First bug", assignedToMemberId: memberId })); 
store.dispatch(addBug({ description: "Second bug" }));
store.dispatch(addBug({ description: "Third bug" }));
// store.dispatch(removeBug({ id : 1 }));
store.dispatch(resolveBug ({ id: 2}));
store.dispatch(addProject({name: "second project"}));
store.dispatch(removeProject({id: 1}));
console.log(store.getState());
console.log("Get unresolved bugs");
const x = getUnresolvedBugs(store.getState().entities.bugs);
console.log(x);
console.log(`Get bugs assigned to ${member1.name}`);
console.log(getBugsByMemberId(store.getState().entities.bugs, memberId));