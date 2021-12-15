import React, {Component} from 'react';


class Cars extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className='componentCarContainer'>
                <subHeading>
                    <h2 className=''>{this.props.title}</h2>
                </subHeading>
                <div>
                    <img src={this.props.car} alt="picture of car being crushed" />
                    <h5>{this.props.crushStatus}</h5>
                </div>
                <img src={this.props.picture} alt="featured picture of monster truck" />
                <button className='btn btn-outline-dark'>Crush</button>
            </div>
        )
    }
}

export default Cars;