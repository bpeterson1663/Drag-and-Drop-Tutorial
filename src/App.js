import React, { Component } from 'react';
import './App.css';
import Board from './components/Board/Board';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Board knightPosition={[0,0]} />
      </div>
    );
  }
}

export default App;
