import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {

  state = {
    selectedPerson: null,
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route path="/" render={() => <h2>Драутути</h2>} exact />
          <Route path="/planet" component={RandomPlanet} />
          <Route path="/people" exact render={() => <ItemList onItemSelected={this.onPersonSelected} />} />
          <Route path="/people/:id" render={ ({ match }) => {
            const { id } = match.params;
            return <PersonDetails personId={id} />
            }} />
        </Router>
      </div>
    );
  }
}
