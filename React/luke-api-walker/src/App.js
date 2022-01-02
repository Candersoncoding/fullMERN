import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import Main from './Views/Main.jsx';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Main path="/" />
        <People path="/people/:id"/>
        <Planets path="/planets/:id"/>
      </Router>
    </div>
  );
}

export default App;
