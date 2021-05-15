import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Contactus from './Contactus';
import Product from './Product';
import Home from "./Home";
import { Route, BrowserRouter as Router} from 'react-router-dom';
const routing=(
  <Router>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route path="/Home" component={Home}></Route>
      <Route path="/Product" component={Product}></Route>
      <Route path="/Contactus" component={Contactus}></Route>
      
    </div>
  </Router>
)
ReactDOM.render(routing,document.getElementById('root'))
