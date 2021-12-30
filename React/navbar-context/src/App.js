import React, {useState, useContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form.jsx';
import FormWrapper from './Components/FormWrapper.jsx';
import Navbar from './Components/Navbar.jsx';
import Wrapper from './Components/Wrapper.jsx';




function App() {

  
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <FormWrapper />
      </Wrapper>
    </div>
  );
}

export default App;
