import React, {Component} from 'react';
import fine from '../Images/fine.jpg';
import fine1 from '../Images/fine1.jpg';
import fine2 from '../Images/fine2.jpg';
import topDamage from '../Images/top-damage.jpg';
import topDamage1 from '../Images/top-damage1.jpg';
import topDamage2 from '../Images/top-damage2.jpg';
import halfFlat from '../Images/half-flat.jpg';
import halfFlat1 from '../Images/half-flat1.jpg';
import halfFlat2 from '../Images/half-flat2.jpg';
import flat from '../Images/flat.jpg';
import flat1 from '../Images/flat1.jpg';
import flat2 from '../Images/flat2.jpg';


class MonsterTruck extends Component {
    constructor(props){
        super(props)
        this.crushStatus = ["ready to be destroyed!", "top damage", "beat up", "totally flat!"]
        this.GraveDiggerJunkCarPictures = [fine, topDamage, halfFlat, flat]
        this.BountyHunterJunkCarPictures = [fine1, topDamage1, halfFlat1, flat1]
        this.XtremeJunkCarPictures = [fine2, topDamage2, halfFlat2, flat2]
        this.state = {
            statusIterator: 0
        }

    }
    render(){

        // this function resets the status iterator back to zero, and 
        // concurrently the status message and junk car image back to the originals
        const onClickReset = () => {
            this.setState(
                {statusIterator: 0}
            );
        }

        // this function console logs the monster trucks name and iterates the
        // As long as the value of the status iterator is not larger the the value 
        // of the length of the crushed car status, set status iterator to be 
        // one greater than the current value.
        const onClickCrush = () => {
            console.log(`clicked on ${this.props.truckName}!`)
            if(this.state.statusIterator < this.crushStatus.length-1){
                this.setState(
                    {statusIterator: this.state.statusIterator + 1}
                );
            }
        }
        return(
            <div className='componentCarContainer'>
                {/* this div displays the monster truck's name and
                    the picture */}
                <div>
                    <h2 className='truckTitle'>{this.props.truckName}</h2>
                    <img className="truckPictures" src={this.props.truckPicture} alt="featured picture of monster truck" />
                </div>
                <div>
                    <h3 className='text-light'>Let's crush a car!</h3>
                    {/* this ternary statement determines which array of images to gather
                        and display based on the monster truck name passed through props
                        into each component*/}
                    {this.props.truckName == "Grave Digger" ?
                    <img src={this.GraveDiggerJunkCarPictures[this.state.statusIterator]} className="junkCarPicture" alt="picture of car being crushed" /> :
                    this.props.truckName == "Bounty Hunter" ?
                    <img src={this.BountyHunterJunkCarPictures[this.state.statusIterator]} className="junkCarPicture" alt="picture of car being crushed" /> :
                    <img src={this.XtremeJunkCarPictures[this.state.statusIterator]} className="junkCarPicture" alt="picture of car being crushed" />}
                    <h5>Status: {this.crushStatus[this.state.statusIterator]}</h5>
                </div>
                {/* this container below holds the two event buttons that iterate over the pictures
                    and status statements based on which monster truck is clicked. */}
                <div className='buttonContainer'>
                    <button className='btn btn-outline-dark m-3 crushButton' onClick={onClickCrush}>Crush</button>
                <button className='btn btn-outline-light m-3 crushButton' onClick={onClickReset}>Reset</button>
                </div>
                
            </div>
        )
    }
}

export default MonsterTruck;