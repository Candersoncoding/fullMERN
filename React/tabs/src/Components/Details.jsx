import React, {useState, useEffect} from 'react';
import Champions from '../Images/Champions.jpg';
import DerbyStar from '../Images/DerbyStar.jpg';
import NikeFlight from '../Images/NikeFlight.jpg';
import Puma from '../Images/Puma.jpg';


const Details = (props) => {

    const [ballPicture, setBallPicture] = useState("");

    const ballStyle = {
        height: 500,
        width: 500
    }

    useEffect(()=>{
        if(props.ballDetails.ballName === "Adidas Pro-Storm"){
            setBallPicture(`${Champions}`);
        }
        else if(props.ballDetails.ballName === "Select Derbystar"){
            setBallPicture(`${DerbyStar}`);
        }
        else if(props.ballDetails.ballName === "Nike Flight"){
            setBallPicture(`${NikeFlight}`);
        }
        else if(props.ballDetails.ballName === "Puma Accelerate"){
            setBallPicture(`${Puma}`);
        }

    })

    return(
        <div className='bg-primary col-7 mx-auto center p-5 rounded m-3'>
            
            <div className='d-flex justify-content-evenly'>
                <div className='d-flex-columns'>
                    <h3 className='display-4 p-3'>Ball Details:</h3>
                    <h5>Name: {props.ballDetails.ballName}</h5>
                    <h5>Color: {props.ballDetails.color}</h5>
                    <p>Retail Price: {props.ballDetails.price}</p>
                    <p>Used By: {props.ballDetails.usedIn}</p>
                </div>
                <img style={ballStyle} src={ballPicture} alt={props.ballDetails.ballName} />
            </div>
        </div>
    )
}

export default Details;