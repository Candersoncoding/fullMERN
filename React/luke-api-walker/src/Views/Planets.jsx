import React, {useEffect, useState} from "react";
import Form from "../Components/Form";
import axios from 'axios';



const Planets = (props) => {

    const [planetData, setPlanetData] = useState({});

    // useEffect(()=>{
    //     axios.get(`https://swapi.dev/api/${props.select}/${props.selectedId}`)
    //         .then(res=> {setPlanetData(res.data)})
    //         .catch(err=> console.log(err.data))
    // })
    



    return(
        <div>
            <div class="jumbotron">
                <h1 class="display-3">{props.planetData.name}</h1>
                <hr class="my-2"></hr>
                <p>{props.planetData.climate}</p>
                <p>{props.planetData.terrain}</p>
                <p>{props.planetData.surface_water}</p>
                <p>{props.planetData.population}</p>
            </div>
        </div>
    )
}

export default Planets;