import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Home from './components/Header'
import './style.css'
import Recipe from './components/Recipe'
import Payment from './components/Payment'
import Otp from './components/Otp'

class App extends Component {
  render() {
    return (
     <Router>

       <Home/>

       <Switch>
         <Route path='/' exact component={Recipe}/>
         <Route path='/payment'  exact component={Payment}/>
         <Route path='/payment/otp'  component={Otp}/>

       </Switch>
     </Router>
    );
  }
}

export default App;