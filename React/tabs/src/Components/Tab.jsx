import React, {useState} from 'react';

const Tab = (props) => {

    const tabClickedHandler = (event) => {
        event.preventDefault();
        props.onClick(props.index);
    }

    const tabStyle = {
        width: "225px"
    }

    return(
        <div>
            <button style={tabStyle} className='btn btn-primary btn-lg m-3' onClick={tabClickedHandler}>{props.ballDetails.ballName}</button>
        </div>
    )
}

export default Tab;