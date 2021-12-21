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
        event.preventDefault(); // prevents the default action of submit function that reloads the page
        setCurrentGuest(form);
        console.log(currentGuest); 
        document.forms['customerForm'].reset(); // resets the form to be empty after the form is submitted
    }

    const onClickCancel = (event) => {
        event.preventDefault();
        document.forms['customerForm'].reset();
    }

    const nameAndCityValid = (input) => {
        return input.length > 2;
    }
    const phoneNumberValid = (input) => {
        return input.length === 10;
    }

    const stateValid = (input) => {
        const checkState = new RegExp(/^([A-Z]{2})+$/g)// only two consecutive capital letters
        return  checkState(input);
    }

    const emailValid = (input) => {
        const checkEmail = new RegExp(/^([a-zA-Z0-9])+.@([a-z])+.([.])+([a-z])+$/g);
        return checkEmail(input);
    }

    const addressValid = (input) => {
        const checkAddress = new RegExp(/^([0-9]{1,6})+([/\s]?)+([a-zA-Z])+([/\s]?)+([a-zA-Z]?)+([/\s]?)?([a-zA-Z]?)+$/g);
        return checkAddress(input);
    }

    const allFieldsValid = (allInput) => {
        return nameAndCityValid(allInput.firstName, allInput.lastName, allInput.city) && phoneNumberValid(allInput.phoneNumber) && emailValid(allInput.email) && stateValid(allInput.state) && addressValid(allInput.address);
    }

    return(
        <div className='mainFormContainer bg-dark rounded m-5 p-5 pt-2' >
            <form onSubmit={onClickSubmit} name="customerForm">
                <h1 className='d-flex text-light content-justify-left m-5'>Customer Information</h1>
                <div className='form-floating m-5'>
                    <input className="form-control m-1" type="text" name="firstName" placeholder="Default input" onChange={onChangeInput}></input>
                    <label htmlFor="floatingFirstName">First Name</label>
                    {!nameAndCityValid(form.firstName) && form.firstName.length !== 0 && <span className='alert-danger rounded m-1 col-5'>At least 3 characters required!</span>}
                </div>
                <div className='form-floating m-5'>
                    <input className="form-control mb-1" type="text" name="lastName" placeholder="Default input" onChange={onChangeInput}></input>
                    <label htmlFor="floatingLastName" >Last Name</label>
                    {!nameAndCityValid(form.lastName) && form.lastName.length !== 0 && <span className='alert-danger rounded m-1 col-5'>At least 3 characters required!</span>}
                </div>
                <div className='form-floating m-5'>
                    <input className="form-control" type="email" name="email" placeholder="Default input" onChange={onChangeInput}></input>
                    <label htmlFor="floatingEmail" >E-mail</label>
                </div>
                <div className='form-floating m-5'>
                    <input className="form-control mb-1" type="number" name="phoneNumber" placeholder="Default input" onChange={onChangeInput}></input>
                    <label htmlFor="floatingPhoneNumber" >Phone Number</label>
                    {!phoneNumberValid(form.phoneNumber) && form.phoneNumber.length !== 0 && <span className='alert-danger rounded m-1 col-5'>10 digits required!</span>}
                </div>
                <div className='d-flex m-5'>
                    <div className='form-floating m-1 flex-grow-1'>
                        <input className="form-control m-1" type="text" name="address" placeholder="Default input" onChange={onChangeInput}></input>
                        <label htmlFor="floatingAddress" >Address</label>
                    </div>
                    <div className='form-floating m-1 flex-grow-0'>
                        <input className="form-control m-1" type="text" name="city" placeholder="Default input" onChange={onChangeInput}></input>
                        <label htmlFor="floatingCity" >City</label>
                        {!nameAndCityValid(form.city) && form.city.length !== 0 && <span className='alert-danger rounded m-1 col-5'>At least 3 characters required!</span>}
                    </div>
                    <div className='form-floating m-1 flex-grow-0'>
                        <input className="form-control m-1" type="text" name="state" placeholder="Default input" onChange={onChangeInput}></input>
                        <label htmlFor="floatingState" >State</label>
                    </div>
                </div>
                
                <div className="d-flex justify-content-end m-5">
                    <button className='btn btn-outline-danger m-2' onClick={onClickCancel} >Cancel</button>
                    {
                        allFieldsValid(form) ?
                            <button className='btn btn-outline-success m-2' type="submit" >Submit Delivery Info</button> :
                            <button className='btn btn-outline-success m-2' type="submit" disabled >Submit Delivery Info</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default MainForm;