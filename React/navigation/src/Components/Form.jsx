import React, {useState} from "react";



const Form = (props) => {

    const [form, setForm] = useState({
        direction: "",
        text: ""
    })

    const onChangeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onSubmitted(form);
    }

    return(
        <div>
            <form className="mx-auto center d-flex justify-content-evenly p-3" onSubmit={onSubmitHandler}>
                <select name="direction" className="col-2 rounded" onChange={onChangeHandler}>
                    <option value="">Choose</option>
                    <option value="forward">Forward</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                    <option value="uturn">U-turn</option>
                </select>
                <div className="form-floating col-8">
                    <input type="text" name="text" placeholder="Default input" className="form-control" onChange={onChangeHandler}/>
                    <label htmlFor="floatingText">Street</label>
                </div>
                <input type="submit" value="Submit" className="btn btn-success"/>
            </form>
            
        </div>
    )
}

export default Form;