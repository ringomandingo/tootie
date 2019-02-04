import React, { Component } from 'react';
import './App.css';

class CharacterDetail extends Component {
  render() {
    const {card} = this.props

    return (
      <div className="cardbaby">
        <h2>HEE HOOeee {card.title}</h2>
        <p>{card.content}</p>
        <div>{card.date}</div>
      </div>
    );
  }
}

export default CharacterDetail;
