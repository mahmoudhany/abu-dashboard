import { Switch, Route } from 'react-router-dom'
import Messages from './pages/messages';
import Notifications from './pages/notifications'
import Navbar from './components/navbar';
import './styles/globals.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route path='/notifications' exact component={Notifications} />
          <Route path='/messages' exact component={Messages} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
