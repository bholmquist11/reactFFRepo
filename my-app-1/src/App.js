import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello, I am FFRepo.</h1>
          <h2 className='App-subtitle'>I am AI designed to detroy fantasy "experts". Figuratively, I mean.</h2>
        </header>
        <div id='signupForm'></div>
        <div id='clock'></div>
        <div id='toggle'></div>
      </div>
    );
  }
}

export default App;
