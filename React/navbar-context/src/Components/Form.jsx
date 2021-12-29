import React, {useState} from 'react';


const Form = (props) => {

    // const [currentName, setCurrentName] = useState("");

    const onSubmitForm = (event) => {
        setCurrentName(event.target.value);
    }

    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <div className='form-floating'>
                    <input className="form-control" type="text" name="userName" placeholder="Default input" onChange={(event)=>event.target.value}/>
                    <label htmlFor="floatingUserName">Your Name:</label>
                </div>
                <input type="submit" value="Change Name" />
            </form>
        </div>
    )
}

export default Form;