import React, {useState, useEffect} from "react";
import axios from "axios";
import SoccerCleatsForm from '../components/SoccerCleatsForm';
import trash from '../Images/trash_can.png';
import update from '../Images/update.png';
import {Link} from '@reach/router';


const Main = (props) => {

    const [soccerCleats, setSoccerCleats] = useState([]);

    useEffect(()=>{
      axios.get('http://localhost:8000/api/soccer-cleats')
        .then(res=> setSoccerCleats(res.data.soccerCleats))
        .catch(err=> console.log(err))
    }, [soccerCleats])
  
    const onDeleteHandler = (_id, i) => {
      console.log(_id)
      axios.delete(`http://localhost:8000/api/soccer-cleats/delete/${_id}`)
        .then( setSoccerCleats(soccerCleats.slice(0, i), soccerCleats.slice(i+1, soccerCleats.length)))
        .catch(err=> console.log(err))
    }
  
    return (
        <div className="mainContainer">
            <header className='bg-dark text-light p-2'>
                <h1 className='display-1'>Soccer Cleats</h1>
            </header>
            <div className='d-flex'>        
                <table className='table w-75 mx-auto center m-3'>
                    <thead className='bg-dark text-light'>
                        <tr>
                            <th>Style</th>
                            <th>Color</th>
                            <th>Material</th>
                            <th>Weight</th>
                            <th>Price</th>
                            <th>Update</th>
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
                                        <td><Link to={`/update/${item._id}`}><img src={update} alt="update icon" className='w-25'  /></Link></td>
                                        <td><img onClick={()=>onDeleteHandler(item._id, i)} src={trash} alt="trash can icon" className='w-25'  /></td>
                                    </tr>
                        })
                    }
                    </tbody>
                </table>
                <SoccerCleatsForm />
            </div>
        </div>
    )
}

export default Main;