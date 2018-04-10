import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Info from './Info';
import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ul>
              <li>
                <Link to="/">Hjem</Link>
              </li>
              <li>
                <Link to="/about">Om siden</Link>
              </li>
              <li>
                <Link to="/info">Mere info</Link>
              </li>
            </ul>
          </header>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/info" component={Info} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
