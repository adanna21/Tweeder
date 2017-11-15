import React, { Component } from 'react';
import AddForm from './components/AddForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TWEEDER</h1>
          <p>What Ya Thinking?</p>
        </header>
        <AddForm />
      </div>
    );
  }
}

export default App;
