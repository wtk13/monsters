import React, { Component } from 'react';
import './styles/main.scss';

class App extends Component {
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

    return (
      <div className='appWrapper'>
        <h1>Monsters list</h1>
        <ul>
          { monsters.map((monster, index) => (
            <li key={index}>{monster.name}</li>
          )) }
        </ul>
      </div>
    );
  }
}

export default App;
