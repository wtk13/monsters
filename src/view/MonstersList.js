import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MonstersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
    }
  }

  componentDidMount() {
    this.getAllMonsters();
  }

  getAllMonsters() {
    fetch('http://localhost:8080/api/v1/monsters')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Can not connect to the API');
      })
      .then(response => {
        this.setState({monsters: response.data});
      }).catch(err => Promise.reject(err.message));
  }

  render() {
    const { monsters } = this.state;
    console.log({monsters});
    return (
        <article className='widgetContent'>
          <h1 className='widgetContent__header'>Choose your monster</h1>
          { monsters ? (
            <ul>
              { monsters.map((monster, index) => (
                <li key={index}><Link to={`/monster/${monster.slug}`}>{ monster.name }</Link></li>
              )) }
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </article>
    );
  }
}

export default MonstersList;
