import { Login, Register, GetUser } from 'pages';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' element={<Navigate to='/register' />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/getUser' element={<GetUser />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
