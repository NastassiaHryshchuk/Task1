import React, { Component } from 'react';
import ReactCreateElement from './methods/method_1';
import ReactComponent from './methods/method_2';
import FunctionalComponents from './methods/method_3';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Creation of components in different ways:</h1>
        <ReactCreateElement />
        <ReactComponent />
        <FunctionalComponents />
      </div>
    );
  }
}

export default App;
