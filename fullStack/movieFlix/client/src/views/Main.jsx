import React, {useState, useEffect} from 'react';
import Form from '../components/Form.jsx';
import axios from 'axios';

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

    const [movieList, setMovieList] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8000/movies')
            .then(res => setMovieList(res.data.Movie))
            .catch(err => console.log(err))
    }, [])
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value == "checkbox" ? event.target.checked : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/movie/create', form)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1 className=" text-light p-5 display-1">Movie Flix</h1>
            <div className='d-flex'>
                <div className='text-light bg-secondary p-5'>
                    <h1 className='display-5'>Movies</h1>
                    {
                        movieList.map((item, i)=>{
                            return  <div className='d-flex justify-content-evenly'>
                                        <img className='w-25 h-25' src={item.image} alt={`image of ${item.title}`} />
                                        <h5 key={i}>
                                            {item.title}
                                        </h5>
                                    </div>
                        })
                    }
                </div>
                <Form onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}/>
            </div>
        </div>
    )
}

export default Main;