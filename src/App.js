import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {CarList} from "./pages/Car";
import Login from './pages/Login';

import 'bootstrap/dist/css/bootstrap.min.css'
import { ChooseCar } from './pages/ChooseCar';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/login" component={Login} />  
          <Route path="/book" component={ChooseCar} />
          <Route path="/car" component={CarList}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
