import React, {useEffect, useState} from 'react';
import axios from 'axios';

const MovieInfo = (props) => {
    const [info, setInfo] = useState([])
    const [newActor, setNewActor] = useState("")

    useEffect(()=> {
        axios.get(`http://localhost:8000/movie/${props.id}`)
        .then(res => setInfo(res.data.Movie))
        .catch(err => console.log(err))
    }, [props.id])

    const onSubmitActor = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/movie/add/actor/${props.id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    

  return(
        <div>
            <div className="jumbotron text-light">
                <h1 className="display-1 text-primary">{info.title}</h1>
                <p className="lead text-warning">Genre: {info.genre}, Rating: {info.rating}, Length: {info.length} minutes</p>
                <img src={info.image} alt={`${info.title} poster`} className='w-25'/>
                <p className='lead text-warning'>Release Date: {info.releaseDate.toString().slice(0, 10)}</p>
                <hr className="my-2"></hr>
                <p className='lead'>{info.actors}</p>
                <form className=' mx-auto center col-8 text-dark' onSubmit={onSubmitActor}>
                    <div className='form-floating'>
                        <input type="text" name="actors" placeholder='Default Input' className='form-control' onChange={(event)=> setNewActor(event.target.value)}/>
                        <label htmlFor="actorsFloatin">Actor Name</label>
                    </div>
                    <input type="submit" value="Add Actor" className='btn btn-outline-light m-3'/>
                </form>
            </div>
        </div>    
    )
}

export default MovieInfo;