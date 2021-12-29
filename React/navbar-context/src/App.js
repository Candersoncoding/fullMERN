import React, {useState, useContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form.jsx';
import FormWrapper from './Components/FormWrapper.jsx';
import Navbar from './Components/Navbar.jsx';
import Wrapper from './Components/Wrapper.jsx';
import WrapperContext from './Context/WrapperContext';


function App() {

  const [currentName, setCurrentName] = useState("");

  return (
    <div className="App">
      <Wrapper.Provider value={{currentName, setCurrentName}}>
        <Navbar />
        <FormWrapper />
      </Wrapper.Provider>
    </div>
  );
}

export default App;
