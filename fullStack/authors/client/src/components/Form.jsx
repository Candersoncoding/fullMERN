import React from 'react'

export default function Form() {
    return (
        <div className='w-50'>
            <form className='bg-info p-5 m-5 d-flex flex-column align-items-center rounded formNewAuthor'>
            <h1 className='text-light display-5'>New Author</h1>

                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="firstName" type="text" placeholder="Default input" />
                    <label htmlFor="floatingFirstName">First Name</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="lastName" type="text" placeholder="Default input" />
                    <label htmlFor="floatingLastName">Last Name</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="firstName" type="text" placeholder="Default input" />
                    <label htmlFor="floatingFirstName">Age</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="firstName" type="text" placeholder="Default input" />
                    <label htmlFor="floatingFirstName">Career Length</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="firstName" type="text" placeholder="Default input" />
                    <label htmlFor="floatingFirstName">Pen Name</label>
                </div>
                <div className='form-floating m-3 col-8'>
                    <input className="form-control" name="firstName" type="text" placeholder="Default input" />
                    <label htmlFor="floatingFirstName">Hair Color</label>
                </div>
                <input type="submit" className="m-3 btn btn-outline-light" value="Add Author" />
            </form>
        </div>
    )
}
