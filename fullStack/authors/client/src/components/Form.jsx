import React from 'react'
import {Link} from '@reach/router';

export default function Form(props) {

    return (
        <div className='w-50 mx-auto center'>
            <form className='bg-info p-5 m-5 d-flex flex-column align-items-center rounded bgOpacity' onSubmit={props.onHandleSubmitter}>
            <h1 className='text-light display-5'>{props.title} Author</h1>

                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="firstName" type="text" placeholder="Default input" onChange={props.changeForm} value={props.form.firstName}/>
                    <label htmlFor="floatingFirstName">First Name</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="lastName" type="text" placeholder="Default input" onChange={props.changeForm} value={props.form.lastName}/>
                    <label htmlFor="floatingLastName">Last Name</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="age" type="text" placeholder="Default input" onChange={props.changeForm} value={props.form.age}/>
                    <label htmlFor="floatingAge">Age</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="careerLength" type="text" placeholder="Default input" onChange={props.changeForm} value={props.form.careerLength}/>
                    <label htmlFor="floatingCareerLength">Career Length</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="penName" type="text" placeholder="Default input" onChange={props.changeForm} value={props.form.penName}/>
                    <label htmlFor="floatingPenName">Pen Name</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="hairColor" type="text" placeholder="Default input" onChange={props.changeForm} value={props.form.hairColor}/>
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
