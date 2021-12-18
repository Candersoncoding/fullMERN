import React, {useState} from 'react';


const MainForm = (props) => {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: parseInt(""),
        address: "",
        city: "",
        state: ""
    })

    const onClickSubmit = (event) => {
        setForm({
            ...form, //spread the current data in form state
            [event.target.name]: event.target.value // get the value for the data related to the name field of each key in form state 
        });
    }

    return(
        <div className='mainFormContainer bg-dark rounded m-5 p-5 pt-2'>
            <h1 className='d-flex text-light content-justify-left m-5'>Customer Information</h1>
            <div className='form-floating m-5'>
                <input className="form-control" type="text" name="firstName" placeholder="Default input" onChange={onClickSubmit}></input>
                <label for="floatingFirstName">First Name</label>
            </div>
            <div className='form-floating m-5'>
                <input className="form-control" type="text" name="lastName" placeholder="Default input" onChange={onClickSubmit}></input>
                <label for="floatingLastName" >Last Name</label>
            </div>
            <div className='form-floating m-5'>
                <input className="form-control" type="email" name="email" placeholder="Default input" onChange={onClickSubmit}></input>
                <label for="floatingEmail" >E-mail</label>
            </div>
            <div className='form-floating m-5'>
                <input className="form-control" type="number" name="phoneNumber" placeholder="Default input" onChange={onClickSubmit}></input>
                <label for="floatingPhoneNumber" >Phone Number</label>
            </div>
            <div className='d-flex m-5'>
                <div className='form-floating m-1 flex-grow-1'>
                    <input className="form-control" type="text" name="address" placeholder="Default input" onChange={onClickSubmit}></input>
                    <label for="floatingAddress" >Address</label>
                </div>
                <div className='form-floating m-1 flex-grow-0'>
                    <input className="form-control" type="text" name="city" placeholder="Default input" onChange={onClickSubmit}></input>
                    <label for="floatingCity" >City</label>
                </div>
                <div className='form-floating m-1 flex-grow-0'>
                    <input className="form-control" type="text" name="state" placeholder="Default input" onChange={onClickSubmit}></input>
                    <label for="floatingState" >State</label>
                </div>
            </div>
            
            <div className="d-flex justify-content-end m-5">
                <button className='btn btn-outline-danger m-2'>Cancel</button>
                <button className='btn btn-outline-success m-2' onClick={onClickSubmit}>Submit Delivery Info</button>
            </div>
        </div>
    )
}

export default MainForm;