import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './Components/ToDo.jsx';

function App() {

  const [formInput, setFormInput] = useState("");

  return (
    <div className="App bg-dark text-light">
      <header className="App-header">
        <h1 className='display-1'><strong>Make A To-Do List</strong></h1>
      </header>
      <div className='d-flex justify-content-between'>
        <nav className='col-2'>
          <h3>Current Lists:</h3>
          <button className='btn btn-outline-light btn-lg w-75 m-3'>List 1</button>
          <button className='btn btn-outline-light btn-lg w-75 m-3'>List 2</button>
        </nav>
        <div className='col-10'>
          <form className=''>
            <div className='form-floating col-8 mx-auto text-dark'>
              <input className='form-control' type="text" placeholder="Default input" name="ToDo"></input>
              <label htmlFor="floatingToDo">To-Do's</label>
            </div>
            <input className="btn btn-light m-3" type="submit" value="Add New List"></input>
          </form>
          <ToDo />
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
