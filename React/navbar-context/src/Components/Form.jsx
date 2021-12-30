import React, {useState, useContext} from 'react';
import { NameContext } from './Wrapper';


const Form = (props) => {

    const name = useContext(NameContext);

    const onSubmitForm = (event) => {
        name = (event.target.value);
    }

    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <div className='form-floating'>
                    <input className="form-control" type="text" name="name" placeholder="Default input" onChange={(event)=>event.target.value}/>
                    <label htmlFor="floatingName">Your Name:</label>
                </div>
                <input type="submit" value="Change Name" />
            </form>
        </div>
    )
}

export default Form;