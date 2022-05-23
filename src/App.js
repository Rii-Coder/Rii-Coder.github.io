import NavBar from './Navbar';
import Home from './Home';
import BannerCDBD from './CharactersDBD';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  const killers = "https://dbd-api.herokuapp.com/killers";
  const survivors = "https://dbd-api.herokuapp.com/survivors";

  return (

    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Survivors">
              <BannerCDBD url={survivors}/>
            </Route>
            <Route path="/Killers">
            <BannerCDBD url={killers}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
