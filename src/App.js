
import './App.css';
import { FaArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';


function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/team/:idTeam/">
            <TeamDetails></TeamDetails>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
