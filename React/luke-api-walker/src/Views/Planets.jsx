import React, {useEffect, useState} from "react";



const Planets = (props) => {

    const [planetData, setPlanetData] = useState({});

    return(
        <div>
            <Form />
            <div class="jumbotron">
                <h1 class="display-3">{}</h1>
                <hr class="my-2"></hr>
                <p>{planetData.climate}</p>
                <p>{planetData.terrain}</p>
                <p>{planetData.surface_water}</p>
                <p>{planetData.population}</p>
            </div>
        </div>
    )
}

export default Planets;