import React, {useState, useEffect} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import Planets from '../Views/Planets.jsx';
import People from '../Views/People.jsx';


const Form = (props) =>{


    const [selected, setSelected] = useState("");
    const [id, setId] = useState();
    const [go, setGo] = useState(0);

        
    const handleSubmission = (event) =>{
        event.preventDefault();
        setGo(go+1);       
        navigate(`/${selected}/${id}`);
    };

    return(
        <div>
            <form className="d-flex mx-auto center justify-content-evenly " name="formData" onSubmit={handleSubmission}>
                <select className="custom-select col-4 rounded" name="selected" onChange={(event)=>setSelected(event.target.value)}>
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
            
            {/* <p>{currentData.name}</p> */}
            {/* {selected === "people" &  go > 0 ? <People select={selected} selectedId={id}/> :
            selected === "planets" & go > 0 ? <Planets select={selected} selectedId={id}/> :
            console.log("type in an id and select people or planets.")} */}
        </div>
    )
}

export default Form;