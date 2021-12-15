import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cars from './Components/Cars.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Demolition Derby!</h1>
      </header>
      <div className='mainCarContainer'>
        <Cars />
        <Cars />
        <Cars   />
       {/* crushStatus='fine2' title='' picture={} car={}*/} 
      </div>
      
    </div>
  );
}

export default App;
