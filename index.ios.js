/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import AppContainer from './src/containers/App';
import reducer from './src/store/reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default class MemeGenerator extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MemeGenerator', () => MemeGenerator);
