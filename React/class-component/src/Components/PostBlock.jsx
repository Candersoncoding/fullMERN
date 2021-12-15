import React, {Component} from "react";

class PostBlock extends Component{
    constructor(props){
        super(props);
        this.state = {
            likes: this.props.likes
        }
    }
    render(){
        return(
            <div className="border border-primary p-3 m-5">
                <h3>{this.props.name}:</h3>
                <h5>Likes: {this.state.likes}</h5>
                <button onClick={()=> this.setState({likes:this.state.likes+=1})} className={`${this.props.button}`}>Click the button</button>
            </div>
        )
    }
}

export default PostBlock;