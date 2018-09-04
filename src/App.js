import React, { Component } from 'react';
import './App.css';
import Square from './components/Square/Square';
import Knight from './components/Knight/Knight';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Square black>
          <Knight />
        </Square>
      </div>
    );
  }
}

export default App;
