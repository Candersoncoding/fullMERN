import React, {useState, useEffect} from 'react';
import Form from '../components/Form.jsx';
import axios from 'axios';
import {Link} from '@reach/router';

const Main = () => {

    const [form, setForm] = useState({
        title: "",
        genre: "",
        rating: "",
        releaseDate: Date(),
        inTheaters: false,
        length: 0,
        images: ""
    })

    const [errors, setErrors] = useState({})

    const [movieList, setMovieList] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8000/movies')
            .then(res => setMovieList(res.data.Movie))
            .catch(err => console.log(err))
    }, [movieList])

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value == "checkbox" ? event.target.checked : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/movie/create', form)
            .then(res => {
                if(res.data.error){
                    console.log(res.data.error.errors.genre.properties)
                    setErrors(res.data.error.errors);
                }
                else{
                    console.log(res)
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1 className=" text-light p-5 display-1">Movie Flix</h1>
            <div className='d-flex m-3'>
                <div className='text-light bg-secondary p-5 m-3 w-75'>
                    <h1 className='display-5 p-3'>Movies</h1>
                    <div className='d-flex justify-content-evenly flex-wrap'>
                        {
                            movieList.map((item, i)=>{
                                return  <Link key={i} className='movieLink' to={`/movie/${item._id}`}>
                                            <h4  className='mx-auto center '>
                                                {item.title}
                                            </h4>
                                            <img className='movieImage' src={item.image} alt={`image of ${item.title}`} />
                                        </Link>           
                            })
                        }
                    </div>
                </div>
                <Form onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={errors}/>
            </div>
            
        </div>
    )
}

export default Main;