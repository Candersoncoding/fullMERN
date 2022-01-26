import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main.jsx';
import MovieInfo from './views/MovieInfo';

function App() {
  return (
    <div className='App bg-dark'>
      <Router>
        <Main path={"/"}/>
        <MovieInfo path={"/movie/:id"} />
      </Router>
    </div>
  );
}

export default App;
