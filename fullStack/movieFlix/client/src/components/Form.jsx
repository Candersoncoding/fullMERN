import React, {useState} from 'react';


const Form = (props) => {

    
  return(
    <div className='mx-auto center w-75 bg-secondary'>
        <form className='mx-auto center w-75 m-3 p-3'>
            <h1 className='text-light p-3 d-flex flex-start display-5'>New Movie</h1>
            <div className='form-floating m-3'>
                <input type="text" name="title" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                <label htmlFor="titleFloating">Title</label>
            </div>
            <div className='form-floating m-3'>
                <input type="text" name="title" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                <label htmlFor="titleFloating">Genre</label>
            </div>
            <div className='form-floating m-3'>
                <input type="text" name="title" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                <label htmlFor="titleFloating">Rating</label>
            </div>
            <div className='form-floating m-3'>
                <input type="Date" name="title" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                <label htmlFor="titleFloating">Release Date</label>
            </div>
            <div className='form-floating m-3'>
                <input type="number" name="title" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                <label htmlFor="titleFloating">length</label>
            </div>
            <div className='form-floating m-3'>
                <input type="text" name="title" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                <label htmlFor="titleFloating">Ad Poster Image</label>
            </div>
            <div className='form-group m-3 bg-light rounded p-3 d-flex justify-content-start'>
                <label htmlFor="inTheatersFloating">Currently In Theaters</label>
                <input type="checkbox" name="inTheaters" className='form-check-input m-1' placeholder='Default input' onChange={props.onChangeHandler} />
            </div>
            <div>
                <button className="btn btn-outline-danger">Cancel</button>
                <input type="submit" value="Add Movie" className='btn btn-success m-3'/>
            </div>
        </form>
    </div>
  )
}

export default Form;