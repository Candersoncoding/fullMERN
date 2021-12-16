import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MonsterTruck from './Components/MonsterTruck.jsx';
import GraveDigger from './Images/Gravedigger.png';
import BountyHunter from './Images/BountyHunter.jpg';
import Xtreme from './Images/Xtreme.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Demolition Derby!</h1>
      </header>
      <div className='mainCarContainer'>
        <MonsterTruck truckName="Grave Digger" truckPicture={GraveDigger} />
        <MonsterTruck truckName="Bounty Hunter" truckPicture={BountyHunter}/>
        <MonsterTruck truckName="Xtreme" truckPicture={Xtreme}/>
       
      </div>
      
    </div>
  );
}

export default App;
