import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import Main from './Views/Main.jsx';
import People from './Views/People.jsx';
import Planets from './Views/Planets.jsx';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
      </Router>
      <Form />
      <Router>
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;
