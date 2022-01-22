import React, {useEffect, useState} from 'react';
import Form from '../components/Form.jsx';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function Edit(props) {

    const [updateAuthor, setUpdateAuthor] = useState({
      firstName: "",
      lastName: "",
      age: 0,
      careerLength: 0,
      penName: "",
      hairColor: ""
  })
  useEffect(()=> {
    axios.get(`http://localhost:8000/author/${props.id}`)
      .then(res => setUpdateAuthor(res.data.Author))
      .catch(err => console.log(err))
  }, [props.id])

  const handleOnChangeForm = (event) => {
      setUpdateAuthor({
          ...updateAuthor,
          [event.target.name]: event.target.value
      })
  }

  const putOnSubmit = (event) => {
      event.preventDefault();
      axios.put(`http://localhost:8000/author/update/${props.id}`, updateAuthor)
          .then(res => {
              console.log(res.data.Author);
              navigate("/");
              })
          .catch(err=> console.log({message: "that didn't go right, try again", err: err }))
  }

  return (
      <div>
        <Form onHandleSubmitter={putOnSubmit} changeForm={handleOnChangeForm} form={updateAuthor} title="Edit"/>
      </div>
  )
}