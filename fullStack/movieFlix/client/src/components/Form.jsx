import React, {useState} from 'react';


const Form = (props) => {

    
  return(
    <div className='mx-auto center w-50 bg-secondary m-3'>
        <form className='mx-auto center w-75 m-3 p-3 ' onSubmit={props.onSubmitHandler}>
            <h1 className='text-light p-3 display-5'>New Movie</h1>
            <div className='form-floating m-3'>
                <input type="text" name="title" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                <label htmlFor="titleFloating">Title</label>
                <span className='alert-danger'>{props.error.title && props.error.title.message}</span> 
                
                
            </div>
                    <span className='alert-danger'>{props.error.genre && props.error.genre.message}</span>
            <div className='d-flex m-3'>
                <div className='form-floating flex-grow-1'>
                    <input type="text" name="genre" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                    <label htmlFor="genreFloating">Genre</label>
                </div>
                <select className='custom-select p-3 bg-light rounded' name="rating" onChange={props.onChangeHandler}>
                    <option placeholder="default value">Choose Rating</option>
                    <option value="R">R</option>
                    <option value="PG-13">PG-13</option>
                    <option value="PG">PG</option>
                    <option value="G">G</option>
                    <option value="NR">NR</option>
                </select>
            </div>
                <span className='alert-danger'>{props.error.rating && props.error.rating.message}</span>
            <div className='form-floating m-3'>
                <input type="Date" name="releaseDate" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                <label htmlFor="releaseDateFloating">Release Date</label>
                <span className='alert-danger'>{props.error.releaseDate && props.error.releaseDate.message}</span>
            </div>
            <div className='form-floating m-3'>
                <input type="number" name="length" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                <label htmlFor="lengthFloating">length</label>
                <span className='alert-danger'>{props.error.length && props.error.length.message}</span>
            </div>
            <div className='form-floating m-3'>
                <input type="text" name="image" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                <label htmlFor="imageFloating">Ad Poster Image</label>
                <span className='alert-danger'>{props.error.image && props.error.image.message}</span>
            </div>
            <div className='form-group m-3 bg-light rounded p-3 d-flex justify-content-start'>
                <label htmlFor="inTheatersFloating">Currently In Theaters</label>
                <input type="checkbox" name="inTheaters" className='form-check-input m-1' onChange={props.onChangeHandler} />
                <span className='alert-danger'>{props.error.inTheaters && props.error.inTheaters.message}</span>
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