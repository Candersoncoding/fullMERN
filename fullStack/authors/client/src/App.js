import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main.jsx';
import Edit from './views/Edit.jsx';
import New from './views/New.jsx';
import Info from './views/Info.jsx';

function App() {
  return (
    <div className="App">
      <h1 className='display-1 text-light'>Authors</h1>
      <Router>
        <Main path="/" />
        <New path="/new" />
        <Info path="/info/:id" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
