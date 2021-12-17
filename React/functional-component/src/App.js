import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FunctionalTime from './Components/FunctionalTime';


function App() {
  return (
    <div className="App bg-dark">
      <header className="App-header bg-primary p-3">
        <h1>Hey this is the Header with a Functional Component Under!</h1>
      </header>
      <FunctionalTime message="coming from the functional component" subMessage="Also, a side note is that state is going to be used on this page too!" />
    </div>
  );
}

export default App;
