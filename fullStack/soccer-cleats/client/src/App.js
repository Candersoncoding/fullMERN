import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Router} from '@reach/router';
import Main from './views/Main';
import Edit from './views/Edit';



function App() {


  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Edit path="/update/:id" />
      </Router>
    </div>
  );
}

export default App;
