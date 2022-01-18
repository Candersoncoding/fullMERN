import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UpdateForm from '../components/UpdateForm';


const Edit = (props) => {

    return(
        <div>
            <header className='bg-primary p-4 text-light'>
                <h1 >Edit Page</h1>
            </header>
            <div className='d-flex justify-content-center'>
                <UpdateForm cleatsId={props.id} />
            </div>
            
        </div>
    )
}

export default Edit;