import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main.jsx';

function App() {
  return (
    <div className='App bg-dark'>
      <Router>
        <Main path={"/"}/>
      </Router>
    </div>
  );
}

export default App;
