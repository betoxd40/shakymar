import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Home from '../containers/Home';
import Deluxe from '../containers/Deluxe';
import '../sass/app.scss'
import 'antd/dist/antd.css';

export default class App extends Component {
  render() {
    return (
          <Router>
              <div>
                  <Route exact path="/" component={Home}/>
                  <Route path="/deluxe" component={Deluxe}/>
              </div>
          </Router>
    );
  }
}
