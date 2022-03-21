import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ChooseCar } from './pages/ChooseCar';
import { CarDetail } from './pages/CarDetail';
import Protected from './components/Protected';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/login" component={Login} />  
          <Route path="/book">
            <Protected Cmp={ChooseCar}/>
          </Route>
          <Route path="/detail/:id">
            <Protected Cmp={CarDetail}/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
