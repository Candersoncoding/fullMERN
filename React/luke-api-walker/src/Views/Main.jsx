import React from "react";
import axios from 'axios';
import Form from '../Components/Form.jsx';


const Main = (props) => {


    return(
        <div>
            <header className="App-header">
                <h1 className='display-1'>Use the Force Luke</h1>
            </header>
            <Form />
        </div>
    )
}

export default Main;