import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/layout/Index'

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exac path="/" component={ Index } />
                    </Switch>
                </div>
            </React.Fragment>
        </Router>
    );
  }
}

export default App;
