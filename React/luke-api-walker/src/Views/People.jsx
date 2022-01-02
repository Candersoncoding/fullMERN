import React, {useEffect, useState} from "react";
import axios from "axios";


const People = (props) => {

    const [peopleData, setPeopleDate] = useState({});
    
    return(
        <div>
            <div class="jumbotron">
                <h1 class="display-3">{peopleData.name}</h1>
                <hr class="my-2"></hr>
                <p>{peopleData.height}</p>
                <p>{peopleData.mass}</p>
                <p>{peopleData.hair_color}</p>
                <p>{peopleData.skin_color}</p>
            </div>
        </div>
    )
}