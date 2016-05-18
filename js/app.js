import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import like from './reducers/like';
import LikeApp from './components/LikeApp';

let store = createStore(like)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LikeApp />
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
