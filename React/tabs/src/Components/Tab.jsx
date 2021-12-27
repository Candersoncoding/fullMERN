import React, {useState} from 'react';

const Tab = (props) => {



    return(
        <div>
            <button className='btn btn-primary m-3'>{props.ballDetails.ballName}</button>
        </div>
    )
}

export default Tab;