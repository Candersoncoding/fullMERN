import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';



const Main = () => {

    const [authors, setAuthors] = useState([]);

    // const getAllAuthors = () => {
    //     axios.get('http://localhost:8000/authors')
    //         .then(res => setAuthors(res.data.Author))
    //         .catch(err => console.log({message: "hey something went wrong", err: err}))
    // }
    // useEffect(()=>{
    //     getAllAuthors();
    // }, [authors])

    useEffect(()=> {
        axios.get('http://localhost:8000/authors')
            .then(res=> setAuthors(res.data.Author))
            .catch(err=> console.log(err))
    }, [authors])

    const handleDelete = (_id, i) => {
        axios.delete(`http://localhost:8000/author/delete/${_id}`)
            .then(setAuthors(authors.slice(0, i), authors.slice(i+1, authors[authors.length])))
            .catch(err => console.log(err))
    } 


  return(
        <div className='d-flex'>
            <div className='bg-info m-5 rounded bgOpacity flex-grow-1'>
                <table className='bg-light text-light mx-auto center m-2 mt-5 mb-5'>
                    <thead className='bg-dark display-6'>
                        <tr>
                            <th>Author</th>
                            <th className='p-5 pt-3 pb-3'>Available actions</th>
                        </tr>
                    </thead>
                    <tbody className='bg-info display-6' >
                        {
                            authors.map((item, i)=>{
                                return  <tr key={i}>
                                            <td>{item.firstName} {item.lastName}</td>
                                            <td><Link className='btn btn-warning text-light m-1 w-25' to={`/info/${item._id}`}>View</Link><Link className='btn btn-warning text-light m-1 w-25' to={`/edit/${item._id}`}>Edit</Link><button className='btn btn-danger text-light m-1 w-25' onClick={()=>handleDelete(item._id, i)}>Delete</button></td> 
                                        </tr>
                                        
                            })
                        }
                        
                    </tbody>
                    
                </table>
                <Link className='btn btn-dark m-3' to={"/new"}>Add New Author Here</Link>
            </div>
        </div>
  ) 
}

export default Main;
