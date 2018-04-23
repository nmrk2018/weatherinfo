import React, { Component } from 'react';
import './App.css';
import Search from './component/search'
import Header from './component/header'
import Result from './component/result'
import {Provider} from 'react-redux';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Header />
        <Search />
        <Result />
      </div>
      </Provider>
    );
  }
}

export default App;
