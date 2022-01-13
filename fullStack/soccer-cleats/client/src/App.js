import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {

  useEffect(()=>{
    axios.get('http://localhost:8000/api/soccer-cleats')
      .then(res=> console.log(res.data))
      .catch(err=> console.log(err))
  }, [])
  return (
    <div className="App">
      <h1>the front is here</h1>
    </div>
  );
}

export default App;
