import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MonstersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      activeSlide: 0,
    }

    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.setSlide = this.setSlide.bind(this);
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
        this.setState({ monsters: response.data });
      }).catch(err => Promise.reject(err.message));
  }

  prevSlide(e) {
    e.preventDefault();
    this.setState({ activeSlide: this.state.activeSlide - 1 >= 0 ? this.state.activeSlide - 1 : this.state.monsters.length - 1 });
  }

  nextSlide(e) {
    e.preventDefault();
    this.setState({ activeSlide: this.state.activeSlide + 1 < this.state.monsters.length ? this.state.activeSlide + 1 : 0 });
  }

  setSlide(e) {
    this.setState({ activeSlide: Number(e.target.getAttribute('data-slide-to')) });
  }

  render() {
    const { monsters, activeSlide } = this.state;
    return (
        <article className='widgetContent'>
          <h1 className='widgetContent__header'>Choose your monster</h1>
          { monsters ? (
            <div className='carousel slide' data-ride='carousel'>
            <ol className='carousel-indicators'>
              { monsters.map((monster, index) => (
                <li key={ index }
                    data-slide-to={ index }
                    className={ `${index === activeSlide ? 'active' : ''}` }
                    onClick={ this.setSlide }></li>
              )) }
            </ol>
              <div className='carousel-inner'>
                { monsters.map((monster, index) => (
                  <div key={ index } className={ `carousel-item ${index === activeSlide ? 'active' : ''} slideWrapper` }>
                    <div style={{ height: 340, display: 'flex', justifyContent: 'center', padding: '0px 50px 50px', flexDirection: 'column' }}>
                      <img style={{ maxWidth: '100%', maxHeight: '100%'}}src={ monster.images.big } alt={ monster.name }/>
                      <p style={{ textAlign: 'center', marginBottom: 0 }}>{ monster.name }</p>
                    </div>
                  </div>
                ))}
              </div>
              <a className='carousel-control-prev' href='' role='button' data-slide='prev' onClick={ this.prevSlide }>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a className='carousel-control-next' href='' role='button' data-slide='next' onClick={ this.nextSlide }>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </article>
    );
  }
}

export default MonstersList;
