import React, {useState} from 'react';


const Form = (props) => {

    
  return(
    <div className='mx-auto center w-75 bg-secondary'>
        <form className='mx-auto center w-75 m-3 p-3' onSubmit={props.onSubmitHandler}>
            <h1 className='text-light p-3 d-flex flex-start display-5'>New Movie</h1>
            <div className='form-floating m-3'>
                <input type="text" name="title" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                <label htmlFor="titleFloating">Title</label>
            </div>
            <div className='d-flex m-3'>
                <div className='form-floating flex-grow-1'>
                    <input type="text" name="genre" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                    <label htmlFor="genreFloating">Genre</label>
                </div>
                <select className='custom-select p-3 bg-light rounded' name="rating" onChange={props.onChangeHandler}>
                    <option placeholder="default value">Choose Rating</option>
                    <option value="r">R</option>
                    <option value="pg-13">PG-13</option>
                    <option value="pg">PG</option>
                    <option value="g">G</option>
                    <option value="nr">NR</option>
                </select>
            </div>
            <div className='form-floating m-3'>
                <input type="Date" name="releaseDate" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                <label htmlFor="releaseDateFloating">Release Date</label>
            </div>
            <div className='form-floating m-3'>
                <input type="number" name="length" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                <label htmlFor="lengthFloating">length</label>
            </div>
            <div className='form-floating m-3'>
                <input type="text" name="image" className='form-control' placeholder='Default input' onChange={props.onChangeHandler} />
                <label htmlFor="imageFloating">Ad Poster Image</label>
            </div>
            <div className='form-group m-3 bg-light rounded p-3 d-flex justify-content-start'>
                <label htmlFor="inTheatersFloating">Currently In Theaters</label>
                <input type="checkbox" name="inTheaters" className='form-check-input m-1' onChange={props.onChangeHandler} />
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