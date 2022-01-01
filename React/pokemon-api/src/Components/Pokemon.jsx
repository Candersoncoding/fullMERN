import React, {useState, useEffect} from "react";
import axios from 'axios';


const Pokemon = (props) => {

    const [pokeNames, setPokeNames] = useState([]);
    const [offSet, setOffSet] = useState(0)

    useEffect(()=> {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offSet}`)
            .then(res=> setPokeNames(res.data.results))
            .catch(err=> console.log(err.data))
    }, [offSet]);

    const handleNext = (event) =>{
        // below is another "vanilla javascript way of disabling the button on condition"
        // if(offSet+10 > 1118){
        //     document.getElementById('nextButton').disabled = true;
        // }
        setOffSet(offSet+10);
    }

    const handlePrev = (event) =>{
        setOffSet(offSet-10);
    }

    return(
        <div>
            {
                Object.values(pokeNames).map((item, i)=>{
                    return <p>{`${offSet+i+1}: `} {`${item.name}`.charAt(0).toUpperCase().concat(item.name.slice(1))}</p>
                })
            }
            <div className="d-flex m-3 justify-content-between">
                {offSet-10 < 0 ? 
                    <button className="btn btn-dark" onClick={handlePrev} disabled >Previous 10</button> : 
                    <button className="btn btn-primary" onClick={handlePrev} >Previous 10</button>}
                {offSet+10 > 1118 ? 
                    <button className="btn btn-dark" onClick={handleNext} id="nextButton" disabled >Next 10</button> :
                    <button className="btn btn-success" onClick={handleNext} id="nextButton" >Next 10</button>}
            </div>
            
        </div>
    )
}

export default Pokemon;