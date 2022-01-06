import React, {useEffect, useState} from "react";
import Form from '../Components/Form.jsx';
import axios from 'axios';


const People = (props) => {

    const [peopleData, setPeopleData] = useState({});
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${props._id}`)
            .then(res=> {setPeopleData(res.data)})
            .catch(err=> console.log(err.data))
    })
    
    
    
    return(
        <div>
            <Form />
            <div class="jumbotron">
                <h1 class="display-3">{peopleData.name}</h1>
                <hr class="my-2"></hr>
                <p>height: {peopleData.height}</p>
                <p>mass: {peopleData.mass}</p>
                <p>hair color: {peopleData.hair_color}</p>
                <p>skin color: {peopleData.skin_color}</p>
            </div>
        </div>
    )
}

export default People;