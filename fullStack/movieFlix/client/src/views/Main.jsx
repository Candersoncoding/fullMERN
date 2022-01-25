import React, {useState, useEffect} from 'react';
import Form from '../components/Form.jsx';

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

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    return(
        <div>
            <Form onChangeHandler={onChangeHandler}/>
        </div>
    )
}

export default Main;