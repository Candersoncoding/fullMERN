import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {

  const [soccerCleats, setSoccerCleats] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8000/api/soccer-cleats')
      .then(res=> setSoccerCleats(res.data.soccerCleats))
      .catch(err=> console.log(err))
  }, [])


  return (
    <div className="App">
      <h1 className='display-1'>Soccer Cleats</h1>
      <table className='table w-75 mx-auto center'>
        <thead className='bg-dark text-light'>
          <tr>
            <th>Style</th>
            <th>Color</th>
            <th>Material</th>
            <th>Weight</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            soccerCleats.map((item, i)=>{
              return  <tr key={i} className='table-secondary'>
                        <td>{item.styleName}</td>
                        <td>{item.color}</td>
                        <td>{item.material}</td>
                        <td>{item.weight}</td>
                        <td>${item.price}</td>
                      </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
