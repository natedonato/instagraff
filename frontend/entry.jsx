import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//test functions
import * as ApiUtil from './util/session_api_util';
import * as Actions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root');


    //bootstrap current user:
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    //test functions
    window.ApiUtil = ApiUtil;
    window.Actions = Actions;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    

    ReactDOM.render(<Root store={ store } />, root);
});
