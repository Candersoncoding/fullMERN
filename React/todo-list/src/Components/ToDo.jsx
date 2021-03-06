import React, {useState} from 'react';

const ToDo = (props) =>{

    const [inputItems, setInputItems] = useState("");
    const [currentItems, setCurrentItems] = useState([]);

    const formStyle = {
        height: '350px',
        width: '350px',
        backgroundColor: '#212529',
        borderRadius: '15px'
    }

    const onSubmitItem = (event) => {
        event.preventDefault();
        setCurrentItems([...currentItems, inputItems]);
    }

    return(
        <div className=''>
            <div class="jumbotron bg-secondary col-8 mx-auto center p-3">
                <h1 class="display-3">List Name!</h1>
                <div className='d-flex justify-content-between m-3'>
                    <div >
                        <h5 className='display-5'>Items:</h5>
                        {
                            currentItems.map((item, i)=>{
                                return <h5 key={i}>{item}</h5>
                            })
                            // this is where I will map over the current list items
                        }
                    </div>
                    <form style={formStyle} onSubmit={onSubmitItem}>
                        <div className='form-floating mt-5 m-3 text-dark'>
                            <input className='form-control' type="text" placeholder="Default input" name="listItem" onChange={(event)=>setInputItems(event.target.value)}></input>
                            <label htmlFor="floatingListItem">What's on your list? Type here</label>
                        </div>
                        <input className="btn btn-outline-light btn-lg m-5" type="submit" value="Add It"/>
                    </form>
                        
                </div>
            </div>
        </div>
    )
}

export default ToDo;