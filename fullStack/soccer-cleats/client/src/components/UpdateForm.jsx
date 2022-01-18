import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link, navigate } from "@reach/router";



const UpdateForm = (props) => {

    const [updateSoccerCleats, setUpdateSoccerCleats] = useState({
        styleName: "",
        color: "",
        material: "",
        weight: 0,
        price: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/soccer-cleats/${props.cleatsId}`)
            .then(res=> setUpdateSoccerCleats(res.data.soccerCleats))
            .catch(err=> console.log({messsage: "That didn't quite work out there", err: err}))
    }, [props._id])

    const onChangeHandler = (event) => {
        setUpdateSoccerCleats({
            ...updateSoccerCleats,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/soccer-cleats/update/${props.cleatsId}`, updateSoccerCleats)
            .then(res=> {
                console.log(res);
                navigate("/");
            })
            .catch(err=> console.log(err))
    }

    return(
        <div className="bg-primary d-flex justify-content-end w-25 rounded m-3">
             <form className="mx-auto center" name="updateFormCleats" onSubmit={onSubmitHandler}>
                <h3 className="text-light m-2 display-6">Add New Cleats!</h3>
                <div className="form-floating mt-3">
                    <input className="form-control" type="text" name="styleName" placeholder="Default input" onChange={onChangeHandler} value={updateSoccerCleats.styleName} />
                    <label htmlFor="floatingStyleName">Style Name</label>
                </div>
                <div className="form-floating mt-3">
                    <input className="form-control" type="text" name="color" placeholder="Default input" onChange={onChangeHandler} value={updateSoccerCleats.color} />
                    <label htmlFor="floatingColor">Color</label>
                </div>
                <div className="form-floating mt-3">
                    <input className="form-control" type="text" name="material" placeholder="Default input" onChange={onChangeHandler} value={updateSoccerCleats.material} />
                    <label htmlFor="floatingMaterial">Material</label>
                </div>
                <div className="form-floating mt-3">
                    <input className="form-control" type="text" name="weight" placeholder="Default input" onChange={onChangeHandler} value={updateSoccerCleats.weight} />
                    <label htmlFor="floatingWeight">Weight</label>
                </div>
                <div className="form-floating mt-3">
                    <input className="form-control" type="text" name="price" placeholder="Default input" onChange={onChangeHandler} value={updateSoccerCleats.price} />
                    <label htmlFor="floatingPrice">Price</label>
                </div>
                <div className="d-flex justify-content-evenly mt-3 mb-3">
                    <button className="btn btn-light w-25"><Link to={"/"} className="text-decoration-none text-dark">Cancel</Link></button>
                    <input className="btn btn-outline-light w-25" type="submit" value="Add"/>
                </div>
            </form>
        </div>
    )
}

export default UpdateForm;