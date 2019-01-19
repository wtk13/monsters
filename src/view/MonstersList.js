import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

class MonstersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      activeSlide: 0,
      direction: null
    }

    this.handleSelect = this.handleSelect.bind(this);
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

  handleSelect(selectedIndex, e) {
    this.setState({ activeSlide: selectedIndex, direction: e.direction });
  }

  render() {
    const { monsters, activeSlide, direction } = this.state;
    return (
        <article className='widgetContent'>
          <h1 className='widgetContent__header'>Choose your monster</h1>
          { monsters ? (
            <Carousel
              activeIndex={ activeSlide }
              direction={ direction }
              onSelect={ this.handleSelect }>
                { monsters.map((monster, index) => (
                  <Carousel.Item className='monsterItem' key={ index }>
                    <div className='monsterItem__imgContainer'>
                      <Link key={index} to={monster.slug} ><img className='monsterItem__img' src={ monster.images.big } alt={ monster.name }/></Link>
                    </div>
                    <Carousel.Caption className='monsterItem__name'>{ monster.name }</Carousel.Caption>
                  </Carousel.Item>
                ))}
            </Carousel>
          ) : (
            <p>Loading...</p>
          )}
        </article>
    );
  }
}

export default MonstersList;
