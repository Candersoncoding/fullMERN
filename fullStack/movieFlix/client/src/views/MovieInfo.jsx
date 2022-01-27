import React, {useEffect, useState} from 'react';
import axios from 'axios';

const MovieInfo = (props) => {

    const {id} = props;
    const [info, setInfo] = useState({
        actors: []
    });
    

    useEffect(()=> {
        axios.get(`http://localhost:8000/movie/${id}`)
        .then(res => setInfo(res.data.Movie))
        .catch(err => console.log(err))
    }, [id]);

    const onSubmitActor = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/movie/addactor/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

  return(
        <div>
            <div className="jumbotron text-light">
                <h1 className="display-1 text-primary">{info.title}</h1>
                <p className="lead text-warning">Genre: {info.genre}, Rating: {info.rating}, Length: {info.length} minutes</p>
                <img src={info.image} alt={`${info.title} poster`} className='w-25'/>
                <p className='lead text-warning'>Release Date: {info.releaseDate}</p>
                <hr className="my-2"></hr>
                <ul>
                    {
                        info.actors.map((item, i) =>{
                                return <li className='lead' key={i}>{item}</li>
                        })
                    }
                </ul>
                <form className=' mx-auto center col-8 text-dark' onSubmit={onSubmitActor}>
                    <div className='form-floating'>
                        <input type="text" name="actors" placeholder='Default Input' className='form-control'/>
                        <label htmlFor="actorsFloating">Actor Name</label>
                    </div>
                    <input type="submit" value="Add Actor" className='btn btn-outline-light m-3'/>
                </form>
            </div>
        </div>    
    )
}

export default MovieInfo;