import React from 'react';
import './style.css';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <GameBoard />
      <GameControls />
    </div>
  );
}

export default App;
