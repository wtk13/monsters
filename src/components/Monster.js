import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class Monster extends Component {
  constructor(props) {
    super(props);

    this.PROGRESS_BAR_COLORS = {
      power: 'success',
      danger: 'danger',
      frequency: 'info'
    }
    this.capitalize = this.capitalize.bind(this);
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { details } = this.props;
    const { statistics } = details;

    return (
      <article className='monsterWrapper'>
        <div className='monsterMainInfo'>
          <div className='monsterMainInfo__imgContainer'>
            <img className='monsterMainInfo__avatar' src={ details.images.thumb } alt={ details.name }/>
          </div>
          <h2 className='monsterMainInfo__name'>{ details.name }</h2>
        </div>
        <div className='monsterAdditionalInfo'>
          <ul className='monsterAdditionalInfo__statistics'>
            { Object.keys(statistics).map((key, index) => (
              <li key={ index }>
                <div className='progressBar'>
                  <span className='progressBar__property'>{ this.capitalize(key) }: </span>
                  <ProgressBar className='progressBar__bar' bsStyle={ this.PROGRESS_BAR_COLORS[key] } now={ Number(statistics[key]) * 100 } />
                  <span className='progressBar__value'>{ `(${(Number(statistics[key]) * 100).toFixed()})` }</span>
                </div>
              </li>
            ))}
          </ul>
          <p className='monsterAdditionalInfo__description'>{ details.description }</p>
        </div>
      </article>
    );
  }
}

export default Monster;

// {this.progressBarColors[key]}
