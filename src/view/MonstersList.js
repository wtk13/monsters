import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { BarLoader } from 'react-spinners';

class MonstersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: null,
      activeSlide: this.props.activeSlide,
      direction: null,
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.setState({ activeSlide: this.props.activeSlide });
  }

  handleSelect(selectedIndex, e) {
    this.props.getActiveSlide(selectedIndex);
    this.setState({ activeSlide: selectedIndex, direction: e.direction });
  }

  render() {
    const { activeSlide, direction } = this.state;
    const { monsters } = this.props;

    return (
        <article className='widgetContent'>
          <h1 className='widgetContent__header'>Choose your monster</h1>
          { monsters ? (
            <Carousel
              className='widgetContent__carousel'
              activeIndex={ activeSlide }
              direction={ direction }
              onSelect={ this.handleSelect }>
                { monsters.map((monster, index) => (
                  <Carousel.Item className='monsterItem' key={ index }>
                    <div className='monsterItem__imgContainer'>
                      <Link key={index} to={`/monster/${monster.slug}`} ><img className='monsterItem__img' src={ monster.images.big } alt={ monster.name }/></Link>
                    </div>
                    <Carousel.Caption className='monsterItem__name'>{ monster.name }</Carousel.Caption>
                  </Carousel.Item>
                ))}
            </Carousel>
          ) : (
            <div className='widgetContent__loader'>
              <BarLoader
                width={150}
                height={5}
                color={'#3A435E'}
              />
            </div>
          )}
        </article>
    );
  }
}

export default MonstersList;
