import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import PostBlock from './Components/PostBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header p-5 border border-danger m-5">
        <h1>Class Components</h1>
      </header>
      <PostBlock name="Batman" likes={5} button='btn btn-outline-primary m-3' />
      <PostBlock name="All Might" likes={1000000} button='btn btn-outline-success m-3' />
      {/* <PostBlock name={} likes={} />
      <PostBlock name={} likes={} /> */}
      {/* <div className="border p-3">
        <h3>Batman:</h3>
        <h5>Likes: 5</h5>
        <button className="btn btn-outline-primary m-3 ">Click the button</button>
      </div>
      <div className='border p-3'>
        <h3>All Might:</h3>
        <h5>Likes: 1000000</h5>
        <button className="btn btn-outline-danger m-3">Click the button</button>
      </div> */}
    </div>
  );
}

export default App;
