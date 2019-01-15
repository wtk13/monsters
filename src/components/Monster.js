import React, { Component } from 'react';

class Monster extends Component {
  render() {
    const { details } = this.props;
    return (
      <article className="monster">
        <h2 className="monster__name">{ details.name }</h2>
      </article>
    );
  }
}

export default Monster;
