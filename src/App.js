import React from 'react';
import './App.css';
import TennisGame from './component/TennisGame';
import { Constants } from './constants/Constants';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{Constants.Header}</h1>
      </header>
      <TennisGame />
    </div>
  );
}

export default App;
