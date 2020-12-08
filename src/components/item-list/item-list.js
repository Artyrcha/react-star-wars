import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

import './item-list.css';

class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: null
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((list) => {
        this.setState({
          peopleList: list,
        });
      });
  }

  renderItems(arr) {
    const { history } = this.props;
    
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item" 
            key={id}
            onClick = { () => history.push(`/people/${id}`) }>
          {name}
        </li>
      )
    })
  }

  render() {

    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}

export default withRouter(ItemList);