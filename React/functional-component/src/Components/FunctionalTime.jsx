import React, {useState} from "react";
import like from '../Images/thumbs-up.png';


const FunctionalTime = (props) => {
    // this line below destructors props for all props passed to this component
    // and now the props are able to be referred to by just the props' variable name
    const {message, subMessage} = props;
    // state holds a read-value and setState holds a write-value, and setState
    // is used to update the read-value of state. state is an arbitrary name.
    const [messageLikes, setMessageLikes] = useState(0);

const onClickMessage = () => {
    console.log(messageLikes)
    if(messageLikes === 0){
        setMessageLikes(messageLikes + 1)
    }
    else{
        setMessageLikes(0)
    }
}

    return(
        <div className="bg-secondary m-5 p-2">
            {/* this line below determines if the message has been clicked on
                and if it has been clicked, then a thumbs up displays next to
                the message showing that it has been liked. */}
            {messageLikes === 1 ? <h3 onClick={onClickMessage}>{message} <img src={like} alt='thumbs-up' className="thumbsUp" /></h3> :
            <h3 onClick={onClickMessage}>{message}</h3>}
            <h5>{subMessage}</h5>
        </div>
    )
}

export default FunctionalTime;