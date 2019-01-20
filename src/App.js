import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      activeSlide: 0,
    }

    this.getActiveSlide = this.getActiveSlide.bind(this);
  }

  getActiveSlide = activeSlide => {
    this.setState({activeSlide: activeSlide});
  }

  render() {
    return (
      <Router>
        <div className='appWrapper'>
          <div className='appWrapper__view'>
            <Header />
            <main className='mainContent'>
              <Route path="/" exact={true} render={ () => <MonstersList getActiveSlide={this.getActiveSlide} activeSlide={this.state.activeSlide} /> } />
              <Route path='/monster/:slug' component={ MonsterDetails } />
              <Route path='/about' component={ About }/>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
