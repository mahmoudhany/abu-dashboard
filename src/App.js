import { Switch, Route } from 'react-router-dom'
import Messages from './pages/messages';
import Notifications from './pages/notifications'
import Navbar from './components/navbar';
import './styles/globals.scss';
import Profile from './pages/profile';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container my-5">
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/notifications' exact component={Notifications} />
          <Route path='/messages' exact component={Messages} />
          <Route path='/profile' exact component={Profile} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
