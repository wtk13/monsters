import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="mainHeader">
        <nav className="mainHeader__navigation">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>
      </header>
    );
  }
}

export default Header;