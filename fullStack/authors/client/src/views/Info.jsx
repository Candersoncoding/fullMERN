import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';




const Info = (props) => {
    
    const [author, setAuthor] = useState({});

    useEffect(()=> {
        axios.get(`http://localhost:8000/author/${props.id}`)
            .then(res=> setAuthor(res.data.Author))
            .catch(err=> err)
    }, [props.id])

  return(
        <div className='jumbotron bg-info w-75 mx-auto center rounded bgOpacity'>
            <h1 className="display-3 ">{author.firstName}'s Info</h1>
            <hr className="my-2"></hr>
            <p className='display-5 d-flex flex-start'>Hair Color: {author.hairColor}</p>
            <p className='display-5 d-flex flex-start'>Age: {author.age}</p>
            <p className='display-5 d-flex flex-start'>Pen Name: {author.penName}</p>
            <p className='display-5 d-flex flex-start'>Career Length: {author.careerLength}</p>
            <Link to={"/"} className='btn btn-light m-3 btn-lg'>Back</Link>
        </div>
  )
}

export default Info;
