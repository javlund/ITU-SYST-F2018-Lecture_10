import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getBreeds } from './retriever';
import Dog from './Dog';

class App extends Component {
  state = {
    breeds : []
  }

  constructor() {
    super();
    getBreeds()
      .then(json => {
        this.setState({
          breeds: json.message
        });
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Hunde hurra</h1>
          </header>
          <Route path="/:breed" component={Dog} />
          <ul>
            {this.state.breeds.map(breed =>
              <li key={breed}><Link to={`/${breed}`}>{breed}</Link></li>
            )}
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;
