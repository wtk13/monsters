import React, { Component } from 'react';

class Monster extends Component {
  render() {
    const { details } = this.props;
    return (
      <article className="monster">
        <header className="monster__name"><h2>{ details.name }</h2></header>
      </article>
    );
  }
}

export default Monster;
