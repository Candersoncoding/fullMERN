import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import SoccerCleatsForm from './components/SoccerCleatsForm';
import trash from './Images/trash_can.png';


function App() {

  const [soccerCleats, setSoccerCleats] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/soccer-cleats')
      .then(res=> setSoccerCleats(res.data.soccerCleats))
      .catch(err=> console.log(err))
  }, [soccerCleats])

  const onDeleteHandler = (_id, i) => {
    console.log(_id)
    axios.delete(`http://localhost:8000/api/soccer-cleats/delete/${_id}`)
      .then( setSoccerCleats(soccerCleats.slice(0, i), soccerCleats.slice(i+1, soccerCleats.length-1)))
      .catch(err=> console.log(err))
  }

  return (
    <div className="App">
      <h1 className='display-1'>Soccer Cleats</h1>
      <div className='d-flex'>        
        <table className='table w-75 mx-auto center m-3'>
          <thead className='bg-dark text-light'>
            <tr>
              <th>Style</th>
              <th>Color</th>
              <th>Material</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Remove</th>
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
                          <td><img onClick={()=>onDeleteHandler(item._id, i)} src={trash} alt="trash can icon" className='w-25'  /></td>
                        </tr>
              })
            }
          </tbody>
        </table>
        <SoccerCleatsForm />
      </div>
    </div>
  );
}

export default App;
