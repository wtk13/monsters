import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MonstersList from './view/MonstersList';
import MonsterDetails from './view/MonsterDetails';
import './styles/main.scss';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact={true} render={ () => <MonstersList /> } />
          <Route path='/:slug' component={ MonsterDetails } />
        </div>
      </Router>
    );
  }
}

export default App;
