import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainForm from './Components/MainForm.jsx';
import PizzaForm from './Views/PizzaForm.jsx';

function App() {
  return (
    <div className="App bg-secondary">
      <header className="App-header bg-primary p-4 text-light border border-light border-top-0 border-right-0 border-left-0">
        <h1>Welcome to Pizza Man!</h1>
      </header>
      <MainForm />
      <PizzaForm />
    </div>
  );
}

export default App;
