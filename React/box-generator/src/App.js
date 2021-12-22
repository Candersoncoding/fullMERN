import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './Components/Box.jsx';


function App() {

  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);


  const onSubmitHandled = (event) =>{
    event.preventDefault();
    setBoxes([...boxes,color])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Box Generator</h1>
      </header>
      <form className='newBox' onSubmit={onSubmitHandled}>
                <div className="form-floating">
                    <input className="form-control" type="text" name="backgroundColor" onChange={(event)=> setColor(event.target.value)} placeholder="Default input" />
                    <label htmlFor="floatingBackgroundColor">Color:</label>
                </div>
                <input type="submit" value="Add New Colored Square!" className="btn btn-outline-success m-3" />
      </form>
      {   
        boxes.map((item, i) =>{
          return <Box color={item}/> // item is referring to the individual instance's color. 
          // if color is used instead of item, the color will update for all the boxes and will be the same.
        })  
          
      }
        
    </div>
  );
}

export default App;
