import React, {useEffect, useState} from "react";
import Form from "../Components/Form";
import axios from 'axios';



const Planets = (props) => {

    const [planetData, setPlanetData] = useState({});

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${props._id}`)
            .then(res=> setPlanetData(res.data))
            .catch(err=> console.log(err.data))
    })
    



    return(
        <div>
            <Form />
            <div class="jumbotron">
                <h1 class="display-3">{planetData.name}</h1>
                <hr class="my-2"></hr>
                <p>climate: {planetData.climate}</p>
                <p>terrain: {planetData.terrain}</p>
                <p>surface water: {planetData.surface_water}</p>
                <p>poplataion: {planetData.population}</p>
            </div>
        </div>
    )
}

export default Planets;