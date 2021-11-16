
import './App.css';
import Home from './components/Home';
import Albums from './components/Albums';
import Songs from './components/Songs';
import News from './components/News';
import  {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Albums" component={Albums} />
      <Route path="/Songs" component={Songs} />
      <Route path="/News" component={News} />
      
    </Switch>

    </Router>
  
    </>

  );
}

export default App;
