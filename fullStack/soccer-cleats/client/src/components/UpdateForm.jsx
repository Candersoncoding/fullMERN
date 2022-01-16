import React, {useState} from "react";
import axios from 'axios';


const UpdateForm = (props) => {

    return(
        <div className="bg-primary d-flex justify-content-end w-25 bg-dark rounded m-3">
            <form className="mx-auto center" name="formCleats">
                <h3 className="text-light m-2 display-6">Add New Cleats!</h3>
                <div className="form-floating mt-3">
                    <input class="form-control" type="text" name="styleName" placeholder="Default input" onChange={onChangeHandler}/>
                    <label htmlFor="floatingStyleName">Style Name</label>
                </div>
                <div className="form-floating mt-3">
                    <input class="form-control" type="text" name="color" placeholder="Default input" onChange={onChangeHandler}/>
                    <label htmlFor="floatingColor">Color</label>
                </div>
                <div className="form-floating mt-3">
                    <input class="form-control" type="text" name="material" placeholder="Default input" onChange={onChangeHandler}/>
                    <label htmlFor="floatingMaterial">Material</label>
                </div>
                <div className="form-floating mt-3">
                    <input class="form-control" type="text" name="weight" placeholder="Default input" onChange={onChangeHandler}/>
                    <label htmlFor="floatingWeight">Weight</label>
                </div>
                <div className="form-floating mt-3">
                    <input class="form-control" type="text" name="price" placeholder="Default input" onChange={onChangeHandler}/>
                    <label htmlFor="floatingPrice">Price</label>
                </div>
                <div className="d-flex justify-content-evenly mt-3 mb-3">
                    <button className="btn btn-light w-25">Cancel</button>
                    <input className="btn btn-outline-light w-25" type="submit" value="Add"/>
                </div>
            </form>
        </div>
    )
}

export default UpdateForm;