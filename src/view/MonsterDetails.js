import React, { Component } from 'react';
import Monster from '../components/Monster';

class MonsterDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {},
    }
  }

  componentDidMount() {
    this.getMonster();
  }

  getMonster() {
    fetch(`http://localhost:8080/api/v1/monster/${this.props.match.params.slug}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`There is no data for ${this.props.match.params.slug}`);
      })
      .then(response => {
        this.setState({details: response.data})
      }).catch(err => Promise.reject(err.message));
  }

  render() {
    const { details } = this.state;
    return (
        <div>
          <h1>Monster details</h1>
          <Monster details={ details }/>
        </div>
    );
  }
}

export default MonsterDetails;
