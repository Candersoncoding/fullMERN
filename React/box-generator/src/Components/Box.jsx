import React, { useState } from 'react';



const Box = (props) => {

    
    // const [backgroundColor, height, width, borderColor] = props;

    const colorStyle = {
        backgroundColor: props.color
        // height: `150px`,
        // width: `150px`,
        // margin: "50px",
        // border: `solid 2px black`
};


    return(
        <div className='boxStyle' style={colorStyle}>
            
        </div>
    )
}

export default Box;