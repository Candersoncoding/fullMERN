import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from './Components/Tab.jsx';
import Details from './Components/Details';
import Champions from './Images/Champions.jpg';
import DerbyStar from './Images/DerbyStar.jpg';
import NikeFlight from './Images/NikeFlight.jpg';
import Puma from './Images/Puma.jpg';

function App() {

  const [soccerBalls, setSoccerBalls] = useState([
    {ballName: "Adidas Pro-Storm", color: "white/orange", picture:{Champions}, price: "$164.99", usedIn: "UEFA Champions League"},
    {ballName: "Select Derbystar", color: "white/teal", picture:{DerbyStar}, price: "$159.99", usedIn: "Bundesliga"},
    {ballName: "Nike Flight", color: "white/black/orange", picture:{NikeFlight}, price: "$159.99", usedIn: "Barclay's Premier League"},
    {ballName: "Puma Accelerate", color: "white/orange/yellow", picture:{Puma}, price: "$139.99", usedIn: "Spanish La Liga 1"}
  ]); 

  return (
    <div className="App bg-dark text-light">
      <header className="App-header">
        <h1 className='display-1'>Let's make some tabs!</h1>
      </header>
        <div className='d-flex justify-content-evenly'>
            {
              soccerBalls.map((item, i)=>{
                return <Tab ballDetails={item}/>
              })
            }
        </div>
        <Details ball="Adidas" color="white/orange" picture={Champions} price="$164.99" usedIn="Champions League"/>
    </div>
  );
}

export default App;
