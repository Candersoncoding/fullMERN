import { navigate } from '@reach/router';
import React, {useState} from 'react';
import Form from '../components/Form.jsx';
import axios from 'axios';


export default function New() {


    const [newAuthor, setNewAuthor] = useState({
        firstName: "",
        lastName: "",
        age: 0,
        careerLength: 0,
        penName: "",
        hairColor: ""
    })

    const handleOnChangeForm = (event) => {
        setNewAuthor({
            ...newAuthor,
            [event.target.name]: event.target.value
        })
    }

    const postOnSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/author/create', newAuthor)
            .then(res => {
                console.log(newAuthor);
                navigate("/");
                })
            .catch(err=> console.log({message: "that didn't go right, try again", err: err }))
    }
  return (
        <div>
            <Form onHandleSubmitter={postOnSubmit} changeForm={handleOnChangeForm} form={newAuthor} title="New"/>
        </div>
    )
}
