import React, {useState, useEffect} from "react";



const SoccerCleatsForm = (props) => {

    const [cleatForm, setCleatForm] = useState({
        styleName: "",
        color: "",
        material: "",
        weight: 0,
        price: ""
    })

    const onChangeHandler = (event) => {
        setCleatForm({
            ...cleatForm,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(cleatForm);
    }
    return(
        <div className="formContainer d-flex justify-content-end" onSubmit={onSubmitHandler}>
            <form className="w-25 bg-dark rounded m-3">
                <h3 className="text-light m-2 display-6">Add New Cleats!</h3>
                <div className="form-floating m-3">
                    <input class="form-control" type="text" name="styleName" placeholder="Default input" onChange={onChangeHandler}/>
                    <label htmlFor="floatingStyleName">Style Name</label>
                </div>
                <div className="form-floating m-3">
                    <input class="form-control" type="text" name="color" placeholder="Default input" onChange={onChangeHandler}/>
                    <label htmlFor="floatingColor">Color</label>
                </div>
                <div className="form-floating m-3">
                    <input class="form-control" type="text" name="material" placeholder="Default input" onChange={onChangeHandler}/>
                    <label htmlFor="floatingMaterial">Material</label>
                </div>
                <div className="form-floating m-3">
                    <input class="form-control" type="text" name="weight" placeholder="Default input" onChange={onChangeHandler}/>
                    <label htmlFor="floatingWeight">Weight</label>
                </div>
                <div className="form-floating m-3">
                    <input class="form-control" type="text" name="price" placeholder="Default input" onChange={onChangeHandler}/>
                    <label htmlFor="floatingPrice">Price</label>
                </div>
                <div className="d-flex justify-content-evenly m-3">
                    <button className="btn btn-light w-25">Cancel</button>
                    <input className="btn btn-outline-light w-25" type="submit" value="Add"/>
                </div>
            </form>
        </div>
    )
}

export default SoccerCleatsForm;