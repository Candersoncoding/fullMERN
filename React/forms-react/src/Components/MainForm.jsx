import React, {useState} from 'react';


const MainForm = (props) => {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: ""
    });
    const [currentGuest, setCurrentGuest] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: ""
    });

    const onChangeInput = (event) => {
        setForm({
            ...form, //spread the current data in form state
            [event.target.name]: event.target.value // get the value for the data related to the name field of each key in form state 
        });
    }

    const onClickSubmit = (event) => {
        event.preventDefault();
        setCurrentGuest(form);
        console.log(currentGuest); 
        document.forms['customerForm'].reset();
    }

    const onClickCancel = (event) => {
        event.preventDefault();
        document.forms['customerForm'].reset();
    }

    return(
        <div className='mainFormContainer bg-dark rounded m-5 p-5 pt-2' >
            <form onSubmit={onClickSubmit} name="customerForm">
                <h1 className='d-flex text-light content-justify-left m-5'>Customer Information</h1>
                <div className='form-floating m-5'>
                    <input className="form-control" type="text" name="firstName" placeholder="Default input" onChange={onChangeInput}></input>
                    <label htmlFor="floatingFirstName">First Name</label>
                </div>
                <div className='form-floating m-5'>
                    <input className="form-control" type="text" name="lastName" placeholder="Default input" onChange={onChangeInput}></input>
                    <label htmlFor="floatingLastName" >Last Name</label>
                </div>
                <div className='form-floating m-5'>
                    <input className="form-control" type="email" name="email" placeholder="Default input" onChange={onChangeInput}></input>
                    <label htmlFor="floatingEmail" >E-mail</label>
                </div>
                <div className='form-floating m-5'>
                    <input className="form-control" type="number" name="phoneNumber" placeholder="Default input" onChange={onChangeInput}></input>
                    <label htmlFor="floatingPhoneNumber" >Phone Number</label>
                </div>
                <div className='d-flex m-5'>
                    <div className='form-floating m-1 flex-grow-1'>
                        <input className="form-control" type="text" name="address" placeholder="Default input" onChange={onChangeInput}></input>
                        <label htmlFor="floatingAddress" >Address</label>
                    </div>
                    <div className='form-floating m-1 flex-grow-0'>
                        <input className="form-control" type="text" name="city" placeholder="Default input" onChange={onChangeInput}></input>
                        <label htmlFor="floatingCity" >City</label>
                    </div>
                    <div className='form-floating m-1 flex-grow-0'>
                        <input className="form-control" type="text" name="state" placeholder="Default input" onChange={onChangeInput}></input>
                        <label htmlFor="floatingState" >State</label>
                    </div>
                </div>
                
                <div className="d-flex justify-content-end m-5">
                    <button className='btn btn-outline-danger m-2' onClick={onClickCancel} >Cancel</button>
                    <button className='btn btn-outline-success m-2' type="submit" >Submit Delivery Info</button>
                </div>
            </form>
        </div>
    )
}

export default MainForm;