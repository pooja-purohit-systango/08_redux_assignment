import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk'

const store =  createStore(userReducer, applyMiddleware(thunk));

export default store