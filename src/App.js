import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {AddUser} from "./pages/ChooseCar";

import 'bootstrap/dist/css/bootstrap.min.css'
import { ChooseCar } from './pages/ChooseCar';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />   
          <Route path="/add" component={ChooseCar} />
            
        </Switch>

      </Router>
    </div>
  );
}

export default App;
