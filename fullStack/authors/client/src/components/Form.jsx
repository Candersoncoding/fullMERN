import React, {useState} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router';

export default function Form() {

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

    const handleOnSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/author/create', newAuthor)
            .then(res => {
                console.log(newAuthor);
                navigate("/");
                })
            .catch(err=> console.log({message: "that didn't go right, try again", err: err }))
    }

    return (
        <div className='w-50'>
            <form className='bg-info p-5 m-5 d-flex flex-column align-items-center rounded formNewAuthor' onSubmit={handleOnSubmit}>
            <h1 className='text-light display-5'>New Author</h1>

                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="firstName" type="text" placeholder="Default input" onChange={handleOnChangeForm}/>
                    <label htmlFor="floatingFirstName">First Name</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="lastName" type="text" placeholder="Default input" onChange={handleOnChangeForm}/>
                    <label htmlFor="floatingLastName">Last Name</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="age" type="text" placeholder="Default input" onChange={handleOnChangeForm}/>
                    <label htmlFor="floatingAge">Age</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="careerLength" type="text" placeholder="Default input" onChange={handleOnChangeForm}/>
                    <label htmlFor="floatingCareerLength">Career Length</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="penName" type="text" placeholder="Default input" onChange={handleOnChangeForm}/>
                    <label htmlFor="floatingPenName">Pen Name</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="hairColor" type="text" placeholder="Default input" onChange={handleOnChangeForm}/>
                    <label htmlFor="floatingHairColor">Hair Color</label>
                </div>
                <div>
                    <input type="submit" className="m-3 btn btn-outline-light" value="Add Author" />
                    <button className='btn btn-light'><Link to="/" className='text-decoration-none text-dark'>Cancel</Link></button>
                </div>
            </form>
        </div>
    )
}
