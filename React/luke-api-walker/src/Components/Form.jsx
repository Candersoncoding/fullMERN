import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Form = (props) =>{

    const [currentData, setCurrentData] = useState({})
    const [selected, setSelected] = useState("");
    const [id, setId] = useState();
        
    const handleSubmission = (event) =>{
        event.preventDefault();
        axios.get(`https://swapi.dev/api/${selected}/${id}`)
            .then(res=> setCurrentData(res.data))
            .catch(err=> console.log(err.data))
    };

    return(
        <div>
            <form className="d-flex mx-auto center justify-content-evenly" onSubmit={handleSubmission}>
                <select className="custom-select col-4 rounded" onChange={(event)=>setSelected(event.target.value)}>
                    <option selected>Choose:</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Default input" name="id" onChange={(event=>setId(event.target.value))}/>
                    <label htmlFor="floatingId">ID:</label>
                </div>
                <input type="submit" value="Use the Force" className='btn btn-primary'/>
            </form>
            
            <p>{currentData.name}</p>
        </div>
    )
}

export default Form;