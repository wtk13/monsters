import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MonsterDetails extends Component {
  render() {
    const { slug } = this.props.match.params
    return (
        <div>
          <Link to='/'>
            <h6>Back to home</h6>
          </Link>
          <br/>
          <br/>
          { slug }
        </div>
    );
  }
}

export default MonsterDetails;
