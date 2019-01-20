import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MonstersList from './view/MonstersList';
import MonsterDetails from './view/MonsterDetails';
import About from './view/About';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/main.scss';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: null,
      activeSlide: 0,
    }

    this.getActiveSlide = this.getActiveSlide.bind(this);
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
        setTimeout(() => {
          this.setState({ monsters: response.data, loading: false });
        }, 1000);
      }).catch(err => Promise.reject(err.message));
  }

  getActiveSlide = activeSlide => {
    this.setState({ activeSlide: activeSlide });
  }

  render() {
    const { monsters } = this.state;
    return (
      <Router>
        <div className='appWrapper'>
          <div className='appWrapper__view'>
            <Header />
            <main className='mainContent'>
              <Switch>
                <Route path='/' exact={ true } render={ () => <MonstersList getActiveSlide={ this.getActiveSlide } activeSlide={ this.state.activeSlide } monsters={ monsters }/> } />
                <Route path='/monster/:slug' exact={ true } component={ MonsterDetails } />
                <Route path='/about' exact={ true } component={ About }/>
                <Redirect from='*' to='/'/>
              </Switch>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
