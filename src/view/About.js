import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className='widgetContent'>
        <h1 className='widgetContent__header'>About page</h1>
        <article className='aboutPageContent'>
          <p>This is react training app. Below there are listed libraries, technologies and techniques used in this project:</p>
          <ol className='aboutPageContent__list'>
            <li>React v16.7.0</li>
            <li>React Router v4</li>
            <li>Bootstrap v3</li>
            <li>React Bootstrap</li>
            <li>React Spinners</li>
            <li>Monsters local API</li>
            <li>SASS</li>
            <li>BEM</li>
          </ol>
        </article>
      </div>
    );
  }
}

export default About;
