import React, {useEffect, useState} from 'react';
import Form from '../components/Form.jsx';
import axios from 'axios';

export default function Main() {

    const [authors, setAuthors] = useState([{}]);

    useEffect(()=>{
        axios.get('http://localhost:8000/authors')
            .then(res => setAuthors(res.data.Author))
            .catch(err => console.log({message: "hey something went wrong", err: err}))
    }, [authors])
  return(
        <div className='d-flex'>
            <div className='bg-info m-5 rounded tableAuthors flex-grow-1'>
                <table className='bg-light text-light mx-auto center m-2 mt-5 mb-5'>
                    <thead className='bg-dark display-6'>
                        <th>Author</th>
                        <th>Available actions</th>
                    </thead>
                    <tbody className='bg-info display-6' >
                        {
                            authors.map((item, i)=>{
                                return  <tr>
                                            <td>{item.firstName} {item.lastName}</td>
                                            <td><button className='btn btn-warning text-light m-1 w-25'>Edit</button><button className='btn btn-danger text-light m-1 w-25'>Delete</button></td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            <Form />
            </div>
  ) 
}
