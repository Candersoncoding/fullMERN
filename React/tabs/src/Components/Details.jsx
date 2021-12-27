import React, {useState} from 'react';


const Details = (props) => {



    return(
        <div className='bg-primary col-7 mx-auto center p-5 rounded '>
            
            <div className='d-flex justify-content-evenly'>
                <div className='d-flex-columns'>
                    <h3 className='display-4 p-3'>Ball Details:</h3>
                    <h5>Name: {props.ball}</h5>
                    <h5>Color: {props.color}</h5>
                    <p>Retail Price: {props.price}</p>
                    <p>Used By: {props.usedIn}</p>
                </div>
                <img src={props.picture} alt={props.ball} />
            </div>
        </div>
    )
}

export default Details;