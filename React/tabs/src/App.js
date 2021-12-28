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
    {ballName: "Adidas Pro-Storm", color: "white/orange", picture:{Champions}, price: "$164.99", usedIn: "UEFA Champions League", selected: false},
    {ballName: "Select Derbystar", color: "white/teal", picture:{DerbyStar}, price: "$159.99", usedIn: "Bundesliga", selected: false},
    {ballName: "Nike Flight", color: "white/black/orange", picture:{NikeFlight}, price: "$159.99", usedIn: "Barclay's Premier League", selected: false},
    {ballName: "Puma Accelerate", color: "white/orange/yellow", picture:{Puma}, price: "$139.99", usedIn: "Spanish La Liga 1", selected: false}
  ]);
  const [activeBall, setActiveBall] = useState(-1);
  const [clickedBall, setClickedBall] = useState([]);


  const onClickHandler = (index) => {
    setActiveBall(index);
  }
  

  return (
    <div className="App bg-dark text-light">
      <header className="App-header">
        <h1 className='display-1'>Let's make some tabs!</h1>
      </header>
      <div className='contentContainer d-flex'>
        <aside className='d-flex-column justify-content-evenly'>
          {
            soccerBalls.map((item, i)=>{
              return <Tab key={i} index={i} ballDetails={item} onClick={onClickHandler}/>
            })
          }
        </aside>
        {/* <Details ball="Adidas" color="white/orange" picture={Champions} price="$164.99" usedIn="Champions League"/> */}
        {activeBall >= 0 ? <Details ballDetails={soccerBalls[activeBall]} /> : <p></p>}
      </div>
      
    </div>
  );
}

export default App;
