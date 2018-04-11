import React, { Component } from 'react';
import { Container, Dimmer, Loader, Input } from 'semantic-ui-react';
import { getCountries } from './loadData';

class App extends Component {
  state = {
    loading: false,
    amount: 50,
    countries: []
  };

  changeAmount(amount) {
    this.setState({
      amount: amount
    });
  }

  retrieveCountries() {
    this.setState({
      loading: true
    });
    getCountries(this.state.amount).then(result => {
      const countries = result[1];
      this.setState({
        countries: countries,
        loading: false
      });
    });
  }

  componentDidMount() {
    this.retrieveCountries();    
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.amount !== prevState.amount) {
      this.retrieveCountries();
    }
  }

  render() {
    if(this.state.loading) {
      return (
        <Dimmer active>
          <Loader>Henter lande...</Loader>
        </Dimmer>
      )
    }
    return (
      <Container>
        <header className="App-header">
          <h1>Lande</h1>
        </header>
        <Input value={this.state.amount} onChange={event => this.changeAmount(event.target.value)} />
        <ul>
          {this.state.countries.map(country => (
            <li key={country.name}>Land: {country.name}, hovedstad: {country.capitalCity}</li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default App;
