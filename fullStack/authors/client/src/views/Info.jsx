import React, {useEffect, useState} from 'react';
import axios from 'axios';




const Info = (props) => {

    const [authorInfo, setAuthorInfo] = useState([]);
    
    const getAuthor = () => {
        axios.get(`http://localhost:8000/author/${props.id}`)
            .then(res=> setAuthorInfo(res.data.Author))
            .catch(err=> err)
    }
    useEffect(()=> {
        getAuthor(props.id);
    }, [props.id])

  return(
        <div className='jumbotron bg-info w-75 mx-auto center'>
            <h1 className="display-3 ">{authorInfo.firstName}'s Info</h1>
            <hr className="my-2"></hr>
            <p className='display-5 d-flex flex-start'>Hair Color: {authorInfo.hairColor}</p>
            <p className='display-5 d-flex flex-start'>Age: {authorInfo.age}</p>
            <p className='display-5 d-flex flex-start'>Career Length: {authorInfo.careerLength}</p>
        </div>
  )
}

export default Info;
