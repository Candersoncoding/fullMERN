import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main.jsx';

function App() {
  return (
    <div className='App bg-dark'>
      <h1 className=" text-light p-5 display-1">Movies</h1>
      <Router>
        <Main path={"/"}/>
      </Router>
    </div>
  );
}

export default App;
