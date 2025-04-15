import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import {thunk} from 'redux-thunk'; 
import { userReducer } from './userReducer';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
