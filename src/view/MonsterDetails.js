import React, { Component } from 'react';
import Monster from '../components/Monster';
import { BarLoader } from 'react-spinners';

class MonsterDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: null,
    }
  }

  componentDidMount() {
    this.getMonster();
  }

  getMonster() {
    fetch(`http://localhost:8080/api/v1/monster/${ this.props.match.params.slug }`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`There is no data for ${ this.props.match.params.slug }`);
      })
      .then(response => {
        setTimeout(() => {
          this.setState({ details: response.data })
        }, 1000);

      }).catch(err => Promise.reject(err.message));
  }

  render() {
    const { details } = this.state;
    return (
        <article className='widgetContent'>
          <h1 className='widgetContent__header'>Monster details</h1>
          { details ? (
            <Monster details={ details }/>
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

export default MonsterDetails;
