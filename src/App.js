import React from 'react';
import Board from './components/Board/Board';
import './App.css';

function App() {
  return (
    <div className="App">
      <Board knightPosition={[4, 0]}/>
    </div>
  );
}

export default App;
