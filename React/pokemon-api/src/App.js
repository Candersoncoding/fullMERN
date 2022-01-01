import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemon from './Components/Pokemon.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon List</h1>
      </header>
      <Pokemon />
    </div>
  );
}

export default App;
