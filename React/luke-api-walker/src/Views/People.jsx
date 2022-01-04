import React, {useEffect, useState} from "react";
import Form from '../Components/Form.jsx';
import axios from 'axios';


const People = (props) => {

    const [peopleData, setPeopleData] = useState({});
    // useEffect(()=>{
    //     axios.get(`https://swapi.dev/api/${props.select}/${props.selectedId}`)
    //         .then(res=> {setPeopleData(res.data)})
    //         .catch(err=> console.log(err.data))
    // })
    
    
    
    return(
        <div>
            <div class="jumbotron">
                <h1 class="display-3">{props.peopleData.name}</h1>
                <hr class="my-2"></hr>
                <p>{props.peopleData.height}</p>
                <p>{props.peopleData.mass}</p>
                <p>{props.peopleData.hair_color}</p>
                <p>{props.peopleData.skin_color}</p>
            </div>
        </div>
    )
}

export default People;