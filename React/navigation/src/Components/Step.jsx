import React from "react";
import leftArrow from '../Images/leftArrow.png';
import rightArrow from '../Images/rightArrow.png';
import upArrow from '../Images/upArrow.png';
import uturnArrow from '../Images/uturnArrow.png';
import initial from '../Images/initialWaiting.png';



const Step = (props) => {



    return(
        <div className="bg-dark text-light p-3 m-3 rounded">
            
                <img src={props.direction === "right" ? 
                        rightArrow : 
                        props.direction === "left" ?
                        leftArrow : 
                        props.direction === "forward" ?
                        upArrow :
                        props.direction === "uturn" ? 
                        uturnArrow : initial
                        } alt={props.direction} />
            {props.direction === "right" ? <h3>{`Turn right at ${props.text}.`}</h3> :
            props.direction === "left" ? <h3>{`Turn left at ${props.text}.`}</h3> :
            props.direction === "forward" ? <h3>{`Continue straight on ${props.text}.`}</h3> : 
            props.direction === "uturn" ? <h3>{`Make a U-turn at ${props.text}.`}</h3> :
            <p></p>}
        </div>
    )
}

export default Step;